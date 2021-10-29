import React from 'react';

export default class CustomBubble extends React.PureComponent {
  handleClick = () => {
    this.props.tracking.track('click', {
      callbell_type: 'widget-interact',
      callbell_channel: 'custom'
    });

    parent.window.open(`${encodeURI(this.props.url)}`, '_blank', 'noopener');
  };

  render() {
    return (
      <div className="custom-message" onClick={this.handleClick}>
        <img src={this.props.logoSrc} />
      </div>
    );
  }
}
