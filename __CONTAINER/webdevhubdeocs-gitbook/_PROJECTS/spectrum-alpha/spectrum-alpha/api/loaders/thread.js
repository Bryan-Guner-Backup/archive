// @flow
import { getThreads } from '../models/thread';
import { getParticipantsInThreads } from '../models/usersThreads';
import createLoader from './create-loader';

export const __createThreadLoader = createLoader((threads) =>
  getThreads(threads)
);

export const __createThreadParticipantsLoader = createLoader(
  (threadIds) => getParticipantsInThreads(threadIds),
  'group'
);

export default () => {
  throw new Error(
    '⚠️ Do not import loaders directly, get them from the GraphQL context instead! ⚠️'
  );
};
