import React, { Component } from 'react';
import TimeCard from './TimeCard';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class Timer extends Component {
  render() {
    return(
    <div style={styles.container}>
      <TimeCard breakLeft={this.props.breakLeft} converter={this.props.converter}
      breakTime={this.props.breakTime} workTime={this.props.workTime}
      handleTimer={this.props.handleTimer} pauseBreakTime={this.props.pauseBreakTime}
      handleReset={this.props.handleReset}/>
      <div id="time-handler">
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
      </div>
    </div>
    )
  }
}

export default Timer;
