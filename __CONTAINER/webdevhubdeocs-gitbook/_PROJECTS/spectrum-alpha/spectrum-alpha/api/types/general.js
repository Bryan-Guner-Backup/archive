// @flow
/**
 * General, reusable types
 */

const general = /* GraphQL */ `
  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  type ChannelPermissions {
    isMember: Boolean
    isBlocked: Boolean
    isPending: Boolean
    isOwner: Boolean
    isModerator: Boolean
    receiveNotifications: Boolean
  }

  type CommunityPermissions {
    isMember: Boolean
    isBlocked: Boolean
    isOwner: Boolean
    isModerator: Boolean
    isPending: Boolean
    receiveNotifications: Boolean
  }

  type ContextPermissions
    @deprecated(
      reason: "Use the CommunityMember or ThreadParticipant type to get permissions"
    ) {
    communityId: String
    isModerator: Boolean
    isOwner: Boolean
    isMember: Boolean
    isBlocked: Boolean
  }

  input EmailInviteContactInput {
    email: LowercaseString!
    firstName: String
    lastName: String
  }

  input EmailInvitesInput {
    id: ID!
    contacts: [EmailInviteContactInput]
    customMessage: String
  }

  type JoinSettings {
    tokenJoinEnabled: Boolean
    token: String
  }

  type RecurringPayment {
    plan: String
    amount: String
    createdAt: String
    status: String
  }

  enum EntityTypes {
    communities
    channels
    users
    threads
  }

  input UploadImageInput {
    image: Upload!
    type: EntityTypes!
    id: String
  }

  extend type Mutation {
    uploadImage(input: UploadImageInput!): String
  }
`;

module.exports = general;
