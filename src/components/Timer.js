import React, { Component } from 'react';
import TimeCard from './TimeCard';

const styles = {
  container: {
    backgroundColor: '',
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',
    height: ''
  }
}

const Timer = (props) => (
    <div style={styles.container}>
      <TimeCard breakLeft={props.breakLeft} converter={props.converter}
      breakTime={props.breakTime} workTime={props.workTime}
      handleTimer={props.handleTimer} pauseBreakTime={props.pauseBreakTime}
      handleReset={props.handleReset} timeLeft={props.timeLeft}/>
      <div id="time-handler">
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
      </div>
    </div>//eliminar time-handler div
    )

export default Timer;
