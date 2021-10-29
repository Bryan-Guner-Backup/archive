import React from 'react';
import posed from 'react-pose';

import SessionStorage from 'packs/javascripts/utils/session_storage';

const Loading = posed.div({
  loading: {
    x: ({ isLeft }) => (isLeft ? 30 : -30),
    opacity: 0
  },
  loaded: {
    x: 0,
    opacity: 1
  }
});

const DismissButton = posed.div({
  hide: {
    opacity: 0,
    transition: {
      duration: 220
    }
  },
  show: {
    opacity: 1,
    transition: {
      duration: 220
    }
  }
});

export default class WelcomeMessage extends React.PureComponent {
  sessionStorage = new SessionStorage();

  state = {
    loaded: false,
    show: true,
    hover: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 1000);
  }

  handleDismiss = () => {
    this.setState({ show: false });
    this.props.onDismiss();
  };

  render() {
    const shouldShow = this.state.show && this.props.show;

    return (
      <Loading
        pose={this.state.loaded && shouldShow ? 'loaded' : 'loading'}
        className={`callbell-container_welcome ${
          this.props.forceLeftPosition ? 'left-direction' : ''
        }`}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        isLeft={this.props.forceLeftPosition}
      >
        <div
          className="message-container show-scrollbar-on-hover"
          style={{ maxHeight: 50 }}
        >
          {this.props.message}
        </div>
        <DismissButton
          pose={this.state.hover ? 'show' : 'hide'}
          className="callbell-container_welcome_dismiss"
          onClick={this.handleDismiss}
          style={this.props.forceLeftPosition ? { right: -70 } : { left: 0 }}
        >
          <img width="20" src={this.props.cancelIconSrc} />
        </DismissButton>
      </Loading>
    );
  }
}
