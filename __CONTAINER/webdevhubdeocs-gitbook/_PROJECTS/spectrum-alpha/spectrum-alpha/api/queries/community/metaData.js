// TODO: Flow type again
import Raven from 'shared/raven';
import type { DBCommunity } from 'shared/types';
import type { GraphQLContext } from '../../';
import { canViewCommunity } from '../../utils/permissions';
import cache from 'shared/cache/redis';
import { communityChannelCount } from 'shared/graphql-cache-keys';

export default async (root: DBCommunity, _: any, ctx: GraphQLContext) => {
  const { user, loaders } = ctx;
  const { id, memberCount: rootMemberCount } = root;

  if (!(await canViewCommunity(user, id, loaders))) {
    return {
      channels: 0,
      members: 0,
    };
  }

  const [cachedChannelCount] = await Promise.all([
    cache.get(communityChannelCount(id)),
  ]);

  const getDbCommunityChannelCount = async () => {
    const count = await loaders.communityChannelCount
      .load(id)
      .then((res) => (res && res.reduction) || 0);

    await cache.set(communityChannelCount(id), count, 'ex', 3600);

    return count;
  };

  const getDbRootMemberCount = async () => {
    const count = await loaders.communityMemberCount
      .load(id)
      .then((res) => (res && res.reduction) || 0);

    await Raven.captureException(
      new Error(
        `Community with ID "${id}" does not have denormalized memberCount.`
      )
    );

    return count;
  };

  const returnedChannelCount =
    typeof cachedChannelCount === 'string'
      ? parseInt(cachedChannelCount, 10)
      : await getDbCommunityChannelCount();

  const returnedMemberCount =
    typeof rootMemberCount === 'number'
      ? rootMemberCount
      : await getDbRootMemberCount();

  return {
    channels: returnedChannelCount,
    members: returnedMemberCount,
  };
};
