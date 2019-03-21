import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class BreakLength extends Component {
  render() {
    return (
      <span className="component-container">
        <p id="break-label">Break Length</p>
        <button id="break-decrement" value="break-decrement" onClick={this.props.handleLength}>-</button>
        <span id="break-length">{this.props.length}</span>
        <button id="break-increment" value="break-increment" onClick={this.props.handleLength}>+</button>
      </span>
    )
  }
}

export default BreakLength;
