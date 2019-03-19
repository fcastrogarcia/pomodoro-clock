import React, { Component } from 'react';

class SessionLength extends React.Component {
  render() {
    return(
    <span className="component-container">
        <p id="session-label">Session Length</p>
        <button id="session-decrement" value="session-decrement" onClick={this.props.handleLength}>🡫</button>
        <span id="session-length">{this.props.length}</span>
        <button id="session-increment" value="session-increment" onClick={this.props.handleLength}>🡩</button>
    </span>
    )
  }
}
 export default SessionLength;
