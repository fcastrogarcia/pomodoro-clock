import React, { Component } from 'react';
import TimeCard from './TimeCard';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const Timer = (props) => (
    <div style={styles.container}>
      <TimeCard breakLeft={props.breakLeft} converter={props.converter}
      breakTime={props.breakTime} workTime={props.workTime}
      handleTimer={props.handleTimer} pauseBreakTime={props.pauseBreakTime}
      handleReset={props.handleReset}/>
      <div id="time-handler">
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
      </div>
    </div>//eliminar time-handler div
    )

export default Timer;
