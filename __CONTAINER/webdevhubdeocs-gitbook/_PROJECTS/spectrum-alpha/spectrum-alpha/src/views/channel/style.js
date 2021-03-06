// @flow
import theme from 'shared/theme';
import styled from 'styled-components';
import { MEDIA_BREAK } from 'src/components/layout';

export const ColumnHeading = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  padding: 8px 16px 12px;
  margin-top: 24px;
  border-bottom: 2px solid ${theme.bg.border};
`;

export const MessageIconContainer = styled.div`
  color: ${theme.text.alt};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${theme.brand.alt};
  }
`;

export const UserListItemContainer = styled.div`
  border-bottom: 1px solid ${theme.bg.wash};
`;

export const CommunityContext = styled.div`
  display: flex;
  margin-top: 32px;
  margin-left: 32px;
  display: flex;
  align-items: center;

  @media (max-width: ${MEDIA_BREAK}px) {
    margin-top: 16px;
  }
`;

export const CommunityName = styled.h5`
  font-size: 18px;
  font-weight: 500;
  margin-left: 16px;
  color: ${theme.text.secondary};
`;

export const ChannelName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 8px;
  margin-left: 32px;
  color: ${theme.text.default};

  @media (max-width: ${MEDIA_BREAK}px) {
    margin-left: 0;
  }
`;

export const ChannelDescription = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-left: 32px;
  margin-bottom: 16px;
  color: ${theme.text.alt};

  @media (max-width: ${MEDIA_BREAK}px) {
    margin-left: 0;
  }
`;

export const MetadataContainer = styled.div`
  margin-left: 32px;

  @media (max-width: ${MEDIA_BREAK}px;) {
    margin-left: 8px;
  }
`;

export const FeedsContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${theme.bg.default};
`;
