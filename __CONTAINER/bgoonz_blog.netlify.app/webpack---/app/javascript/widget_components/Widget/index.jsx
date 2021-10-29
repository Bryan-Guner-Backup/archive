import React from 'react';
import posed from 'react-pose';
import debounce from 'lodash/debounce';
import { isMobile } from 'react-device-detect';

import Tracking from 'packs/javascripts/utils/tracking';
import SessionStorage from 'packs/javascripts/utils/session_storage';
import { loadFacebookSdk } from './facebookSdk';
import WelcomeMessage from './WelcomeMessage';
import WhatsappBubble from './WhatsappBubble';
import InstagramBubble from './InstagramBubble';
import FacebookMessengerBubble from './FacebookMessengerBubble';
import TelegramBubble from './TelegramBubble';
import CustomBubble from './CustomBubble';

const BASE_WIDGET_WIDTH = 108;
const BASE_WIDGET_HEIGHT = 108;
const MAX_WIDGET_WIDTH = 570;
const MAX_WIDGET_HEIGHT = 610;

const Loading = posed.div({
  loaded: {
    opacity: 1,
    x: 0
  },
  loading: {
    opacity: 0,
    x: ({ isLeft }) => (isLeft ? -40 : 40)
  }
});

const Parent = posed.div({
  open: {
    delayChildren: 20,
    staggerChildren: 120,
    opacity: 1
  },
  closed: {
    opacity: 0,
    staggerDirection: -1,
    staggerChildren: 120
  }
});

const PoweredBy = posed.div({
  open: { delay: 350, y: 0, opacity: 1 },
  closed: { delay: 350, y: 5, opacity: 0 }
});

const Item = posed.div({
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 30 }
});

export default class Widget extends React.Component {
  iframeContainer = window.parent.document.getElementById('callbell-iframe');
  tracking = new Tracking({ utm_medium: 'web-widget' });
  sessionStorage = new SessionStorage();

  state = {
    open: false,
    loaded: false,
    facebookLoaded: false,
    facebookChatOpen: false,
    showWelcomeMessage: this.hasWelcomeMessage,
    welcomeMessageIsVisible: this.hasWelcomeMessage
  };

  showIntegration(integration) {
    return isMobile
      ? this.props.widgetConfiguration.activeIntegrations[integration] &&
          this.props.widgetConfiguration.mobileActiveIntegrations[integration]
      : this.props.widgetConfiguration.activeIntegrations[integration] &&
          this.props.widgetConfiguration.desktopActiveIntegrations[integration];
  }

  get hasOnlineWelcomeMessage() {
    return (
      this.props.widgetConfiguration.welcomeMessageEnabled &&
      this.props.widgetConfiguration.welcomeMessage
    );
  }

  get hasOfflineMessage() {
    return (
      this.props.widgetConfiguration.offlineMessageEnabled &&
      this.props.widgetConfiguration.offlineMessage
    );
  }

  get hasWelcomeMessage() {
    if (isMobile) return false;
    if (this.sessionStorage.get('show_welcome_message') === 'false') return false;

    return !!(this.hasOnlineWelcomeMessage || this.hasOfflineMessage);
  }

  get welcomeMessage() {
    if (this.hasOnlineWelcomeMessage) {
      return this.props.widgetConfiguration.welcomeMessage;
    }

    if (this.hasOfflineMessage) {
      return this.props.widgetConfiguration.offlineMessage;
    }
  }

  get welcomeMessageWidth() {
    const node = document.querySelector('.callbell-container_welcome');

    if (node) return node.offsetWidth + 200;

    return MAX_WIDGET_WIDTH;
  }

  componentDidMount() {
    if (this.props.integrations.messenger) {
      loadFacebookSdk();

      window.fbLoaded.promise
        .then(() => {
          FB.Event.subscribe(
            'customerchat.load',
            () =>
              console.info('[Callbell] Facebook customerchat loaded.') ||
              this.setState({ facebookLoaded: true })
          );

          FB.Event.subscribe('customerchat.show', () =>
            this.setState({ facebookChatOpen: true })
          );

          FB.Event.subscribe('customerchat.hide', () =>
            this.setState({ facebookChatOpen: false })
          );
        })
        .catch(() => console.info('[Callbell] Facebook customerchat not loaded.'));
    }

    if (this.numberOfActiveIntegrations > 0) {
      this.tracking.track('visit');
    }

    setTimeout(() => this.setState({ loaded: true }), 500);
  }

  updateIframeWidth = (facebookChatOpen = false) => {
    const widgetWidth = this.props.widgetConfiguration.forceLeftPosition
      ? BASE_WIDGET_WIDTH + 12
      : BASE_WIDGET_WIDTH;

    if (
      this.hasWelcomeMessage &&
      this.state.showWelcomeMessage &&
      this.state.welcomeMessageIsVisible
    ) {
      this.iframeContainer.style.width = this.props.isMobile
        ? '100%'
        : `${this.welcomeMessageWidth}px`;
    } else if (facebookChatOpen && this.state.open) {
      this.iframeContainer.style.width = this.props.isMobile
        ? '100%'
        : `${MAX_WIDGET_WIDTH}px`;
    } else {
      setTimeout(() => (this.iframeContainer.style.width = `${widgetWidth}px`), 250);
    }
  };

  updateIframeHeight = (facebookChatOpen = false) => {
    if (facebookChatOpen && this.state.open) {
      this.iframeContainer.style.height = `${MAX_WIDGET_HEIGHT}px`;
    } else if (this.state.open) {
      this.iframeContainer.style.height = `${BASE_WIDGET_HEIGHT +
        this.numberOfActiveIntegrations * 100}px`;
    } else {
      setTimeout(
        () => (this.iframeContainer.style.height = `${BASE_WIDGET_HEIGHT}px`),
        250
      );
    }
  };

  get numberOfActiveIntegrations() {
    return Object.keys(this.props.integrations).filter(k => this.showIntegration(k))
      .length;
  }

  get atLeastOneActiveIntegration() {
    return Object.values(this.props.widgetConfiguration.activeIntegrations).some(
      active => active
    );
  }

  openWidget = debounce(
    () => {
      this.setState({ open: !this.state.open, showWelcomeMessage: false });
      this.props.integrations.messenger && FB.CustomerChat.hideDialog();
      this.tracking.track('click', { callbell_type: 'widget-open' });
    },
    250,
    { leading: true, trailing: false }
  );

  handleWelcomeMessageDismiss = () => {
    this.setState({ welcomeMessageIsVisible: false });
    this.sessionStorage.set('show_welcome_message', false);
  };

  render() {
    if (!this.atLeastOneActiveIntegration) {
      console.warn(
        'Your Callbell Widget has been loaded but no integration is currently displayed. Please check out your widget configuration on https://dash.callbell.eu/dashboard/onboarding'
      );
    }

    if (!this.numberOfActiveIntegrations) {
      this.iframeContainer.style.display = 'none';

      return null;
    }

    this.updateIframeWidth(this.state.facebookChatOpen);
    this.updateIframeHeight(this.state.facebookChatOpen);

    return (
      <div className="callbell-wrapper">
        {this.hasWelcomeMessage && (
          <WelcomeMessage
            show={this.state.showWelcomeMessage && this.state.open === false}
            message={this.welcomeMessage}
            cancelIconSrc={this.props.cancelIconSrc}
            onDismiss={this.handleWelcomeMessageDismiss}
            forceLeftPosition={this.props.widgetConfiguration.forceLeftPosition}
          />
        )}
        <Loading
          isLeft={this.props.widgetConfiguration.forceLeftPosition}
          pose={this.state.loaded ? 'loaded' : 'loading'}
          className={`callbell-container ${
            this.props.widgetConfiguration.forceLeftPosition ? 'left-direction' : ''
          }`}
        >
          <Parent
            className="callbell-container_integrations"
            pose={this.state.open ? 'open' : 'closed'}
            style={{ pointerEvents: this.state.open ? 'auto' : 'none' }}
          >
            {this.showIntegration('messenger') && (
              <Item key="facebook-messenger" className="integration facebook-messenger">
                <FacebookMessengerBubble
                  facebookLoaded={this.state.facebookLoaded}
                  pageId={this.props.pageId}
                  loggedInGreeting={this.props.widgetConfiguration.welcomeMessage}
                  logoSrc={this.props.messengerLogoSrc}
                  isMobile={isMobile}
                  tracking={this.tracking}
                  open={this.state.open}
                  facebookChatOpen={this.state.facebookChatOpen}
                  forceMessengerLinkOnChat={
                    this.props.widgetConfiguration.forceMessengerLinkOnChat
                  }
                />
              </Item>
            )}
            {this.showIntegration('whatsapp') && (
              <Item key="whatsapp-message" className="integration">
                <WhatsappBubble
                  logoSrc={this.props.whatsappLogoSrc}
                  number={this.props.whatsappNumber}
                  tracking={this.tracking}
                />
              </Item>
            )}
            {this.showIntegration('instagram') && (
              <Item key="instagram-direct-message" className="integration">
                <InstagramBubble
                  logoSrc={this.props.instagramLogoSrc}
                  username={this.props.instagramUsername}
                  isMobile={isMobile}
                  tracking={this.tracking}
                />
              </Item>
            )}
            {this.showIntegration('telegram') && (
              <Item key="telegram-message" className="integration">
                <TelegramBubble
                  logoSrc={this.props.telegramLogoSrc}
                  botName={this.props.telegramBotName}
                  tracking={this.tracking}
                />
              </Item>
            )}
            {this.showIntegration('custom') && (
              <Item key="custom-message" className="integration">
                <CustomBubble
                  logoSrc={this.props.customIntegrationLogoSrc}
                  url={this.props.customIntegrationUrl}
                  tracking={this.tracking}
                />
              </Item>
            )}
          </Parent>
          <div />
          <div
            className={`callbell-container_logo ${
              this.props.widgetConfiguration.brandImage.url
                ? 'callbell-container_logo_with-image'
                : ''
            }`}
          >
            <img src={this.props.logoImgSrc} onClick={this.openWidget} />
          </div>
          <PoweredBy
            key="powered-by"
            pose={this.state.open ? 'open' : 'closed'}
            onClick={this.handlePoweredByLink}
          >
            <small className="callbell-container_powered-by">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="#ecc94b"
                stroke="#ecc94b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>by</span>
              <a
                href={`https://www.callbell.eu/?utm_source=${window.parent.window.location.host}${window.parent.location.pathname}&utm_medium=web-widget`}
                target="_blank"
              >
                Callbell
              </a>
            </small>
          </PoweredBy>
        </Loading>
      </div>
    );
  }
}
