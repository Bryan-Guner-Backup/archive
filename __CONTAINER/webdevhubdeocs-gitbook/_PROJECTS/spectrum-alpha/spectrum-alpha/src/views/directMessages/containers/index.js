// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { Match } from 'react-router';
import Head from 'src/components/head';
import ThreadsList from '../components/threadsList';
import ExistingThread from './existingThread';
import { setTitlebarProps } from 'src/actions/titlebar';
import {
  ViewGrid,
  SecondaryPrimaryColumnGrid,
  PrimaryColumn,
} from 'src/components/layout';
import {
  StyledSecondaryColumn,
  NoCommunitySelected,
  NoCommunityHeading,
} from '../style';

type Props = {
  match: Match,
  dispatch: Dispatch<Object>,
};

type State = {
  activeThreadId: string,
};

class DirectMessages extends React.Component<Props, State> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(
      setTitlebarProps({
        title: 'Messages',
      })
    );
  }

  componentDidUpdate() {
    const { match, dispatch } = this.props;
    const { params } = match;
    if (!params.threadId) {
      dispatch(
        setTitlebarProps({
          title: 'Messages',
        })
      );
    }
  }

  render() {
    const { match } = this.props;
    const activeThreadId = match.params.threadId;

    return (
      <ViewGrid>
        <SecondaryPrimaryColumnGrid>
          <StyledSecondaryColumn shouldHideThreadList={!!activeThreadId}>
            <ThreadsList activeThreadId={activeThreadId} />
          </StyledSecondaryColumn>

          <PrimaryColumn>
            {activeThreadId ? (
              <ExistingThread id={activeThreadId} match={match} />
            ) : (
              <NoCommunitySelected>
                <Head title={'Messages'} />
                <div>
                  <NoCommunityHeading>
                    No conversation selected
                  </NoCommunityHeading>
                </div>
              </NoCommunitySelected>
            )}
          </PrimaryColumn>
        </SecondaryPrimaryColumnGrid>
      </ViewGrid>
    );
  }
}

export default connect()(DirectMessages);
