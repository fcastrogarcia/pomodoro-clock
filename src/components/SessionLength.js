import React from 'react';
import Button from '@material-ui/core/Button';

const SessionLength = (props) => (
    <span className="component-container">
        <p id="session-label">Session Length</p>
        <button id="session-decrement" value="session-decrement" onClick={props.handleLength}>-</button>
        <span id="session-length">{props.length}</span>
        <button id="session-increment" value="session-increment" onClick={props.handleLength}>+</button>
    </span>
    )

 export default SessionLength;
