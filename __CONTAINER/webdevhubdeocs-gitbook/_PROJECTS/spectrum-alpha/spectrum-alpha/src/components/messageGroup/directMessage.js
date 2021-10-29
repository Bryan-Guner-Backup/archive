// @flow
import React from 'react';
import { convertTimestampToDate } from 'shared/time-formatting';
import { ErrorBoundary } from 'src/components/error';
import Message from 'src/components/message';
import MessageErrorFallback from '../message/messageErrorFallback';
import type { Props } from './';
import type { GetDirectMessageThreadType } from 'shared/graphql/queries/directMessageThread/getDirectMessageThread';
import {
  MessagesWrapper,
  MessageGroupContainer,
  Timestamp,
  Time,
} from './style';

const DirectMessages = (props: {
  ...Props,
  thread: GetDirectMessageThreadType,
}) => {
  const { thread, messages, threadType, currentUser } = props;

  if (!messages) return null;

  return (
    <MessagesWrapper data-cy="message-group">
      {messages.map((group) => {
        // eliminate groups where there are no messages
        if (!Array.isArray(group) || group.length === 0) return null;
        // Since all messages in the group have the same Author and same initial timestamp, we only need to pull that data from the first message in the group. So let's get that message and then check who sent it.
        const initialMessage = group[0];
        const { author } = initialMessage;
        const roboText = author.user.id === 'robo';
        const me = currentUser
          ? author.user && author.user.id === currentUser.id
          : false;
        const canModerateMessage = me;

        if (roboText) {
          if (initialMessage.type === 'timestamp') {
            return (
              <Timestamp key={initialMessage.timestamp}>
                <hr />
                <Time>
                  {convertTimestampToDate(
                    new Date(initialMessage.timestamp).getTime()
                  )}
                </Time>
                <hr />
              </Timestamp>
            );
          } else {
            // Ignore unknown robo messages
            return null;
          }
        }

        return (
          <React.Fragment key={initialMessage.id}>
            <MessageGroupContainer key={initialMessage.id}>
              {group.map((message, index) => {
                return (
                  <ErrorBoundary
                    fallbackComponent={() => <MessageErrorFallback />}
                    key={message.id}
                  >
                    <Message
                      me={me}
                      key={message.id}
                      showAuthorContext={index === 0}
                      message={message}
                      canModerateMessage={canModerateMessage}
                      thread={thread}
                      threadType={threadType}
                    />
                  </ErrorBoundary>
                );
              })}
            </MessageGroupContainer>
          </React.Fragment>
        );
      })}
    </MessagesWrapper>
  );
};

export default DirectMessages;
