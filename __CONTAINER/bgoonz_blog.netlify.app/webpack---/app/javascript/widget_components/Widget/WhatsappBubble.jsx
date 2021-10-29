import React from 'react';
import { isMobile } from 'react-device-detect';

export default class WhatsappBubble extends React.PureComponent {
  handleClick = () => {
    this.props.tracking.track('click', {
      callbell_type: 'widget-interact',
      callbell_channel: 'whatsapp'
    });

    const phoneNumber = encodeURI(this.props.number.replace(/[+]+/g, ''));

    const link = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    parent.window.open(link, '_blank', 'noopener');
  };

  render() {
    return (
      <div className="whatsapp-message">
        <img src={this.props.logoSrc} onClick={this.handleClick} />
      </div>
    );
  }
}
