import React, { Component } from 'react';

class Timer extends React.Component {

  render() {
    return(
    <div>
      <div>
        <p id="timer-label">{ this.props.breakLeft > 0 ? 'Break' : 'Session'}</p>
        <div id="time-left">{this.props.converter()}</div>
    </div>
      <div id="time-handler">
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
        <button id="start_stop" onClick={this.props.breakTime ? this.props.pauseBreakTime : this.props.handleTimer}>play/pause</button>
        <button id="reset" onClick={this.props.handleReset}>reset</button>
      </div>
    </div>
    )
  }
}

export default Timer;
