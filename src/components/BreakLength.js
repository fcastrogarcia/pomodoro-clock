import React from 'react';
import Button from '@material-ui/core/Button';

const BreakLength = (props) => (
      <span className="component-container">
        <p id="break-label">Break Length</p>
        <button id="break-decrement" value="break-decrement" onClick={props.handleLength}>-</button>
        <span id="break-length">{props.length}</span>
        <button id="break-increment" value="break-increment" onClick={props.handleLength}>+</button>
      </span>
    )

export default BreakLength;
