import React from 'react';

export default class InstagramBubble extends React.PureComponent {
  handleClick = () => {
    this.props.tracking.track('click', {
      callbell_type: 'widget-interact',
      callbell_channel: 'instagram'
    });

    this.props.isMobile
      ? (parent.window.location.href = `instagram://user?username=${encodeURI(
          this.props.username
        )}`)
      : parent.window.open(
          `https://www.instagram.com/${encodeURI(this.props.username)}`,
          '_blank',
          'noopener'
        );
  };

  render() {
    return (
      <div className="instagram-direct-message" onClick={this.handleClick}>
        <img src={this.props.logoSrc} />
      </div>
    );
  }
}
