import React, { useState, useEffect } from 'react';
import { isMobile, isIOS, isSafari } from 'react-device-detect';

export default function FacebookMessengerBubble(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!props.isMobile) {
      focus();
      const listener = window.addEventListener('blur', function() {
        if (
          document.activeElement === document.querySelector('.fb_dialog_content > iframe')
        ) {
          props.tracking.track('click', {
            callbell_type: 'widget-interact',
            callbell_channel: 'messenger'
          });
        }

        window.removeEventListener('blur', listener);
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setShow(props.open), 300);
  }, [props.open]);

  const handleClick = e => {
    props.tracking.track('click', {
      callbell_type: 'widget-interact',
      callbell_channel: 'messenger'
    });

    // Trigger Facebook Messenger Chat Widget if it's loaded
    // and not explicitely excluded using "forceMessengerLinkOnChat"
    if (props.facebookLoaded && !props.forceMessengerLinkOnChat) {
      props.facebookChatOpen ? FB.CustomerChat.hide() : FB.CustomerChat.show();
      return;
    }

    // Fallback link directly to messenger app
    if (isMobile) {
      parent.window.location.href = isIOS
        ? `fb-messenger://user-thread/${props.pageId}`
        : `fb-messenger://user/${props.pageId}`;
    } else {
      parent.window.open(
        `https://www.messenger.com/t/${props.pageId}`,
        '_blank',
        'noopener'
      );
    }
  };

  const renderMobileVersion = () => (
    <div className="messenger-message" onClick={handleClick}>
      <img src={props.logoSrc} />
    </div>
  );

  const renderMessengerChat = () => (
    <div className="fb-wrapper">
      {renderMobileVersion()}
      <div
        id="fb-root"
        className={show ? 'show' : ''}
        style={{ marginLeft: props.facebookLoaded ? '0px' : '-10000px' }}
      />
      <div
        className="fb-customerchat"
        page_id={props.pageId}
        app_id="2230974307181839"
        logged_in_greeting={props.loggedInGreeting}
        logged_out_greeting={props.loggedInGreeting}
      />
    </div>
  );

  return props.forceMessengerLinkOnChat || props.isMobile || isSafari
    ? renderMobileVersion()
    : renderMessengerChat();
}
