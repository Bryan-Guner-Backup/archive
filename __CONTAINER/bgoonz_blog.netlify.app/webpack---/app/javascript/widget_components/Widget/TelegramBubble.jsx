import React from 'react';

export default class InstagramBubble extends React.PureComponent {
  handleClick = () => {
    this.props.tracking.track('click', {
      callbell_type: 'widget-interact',
      callbell_channel: 'telegram'
    });

    parent.window.open(
      `https://t.me/${encodeURI(this.props.botName)}`,
      '_blank',
      'noopener'
    );
  };

  render() {
    return (
      <div className="telegram-message" onClick={this.handleClick}>
        <img src={this.props.logoSrc} />
      </div>
    );
  }
}
