import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import Fab from '@material-ui/core/Fab';


const styles = {
  time: {
    fontSize: 30
  },
  timerLabel: {
    fontSize: 40,
  }
}
function PauseButton(props) {
  return (
    <Fab color="primary" id="start_stop" onClick={props.onClick}><PauseRoundedIcon /></Fab>
  )
}
function PlayButton(props) {
  return (
    <Fab color="primary" id="start_stop" onClick={props.onClick}><PlayArrowRoundedIcon /></Fab>
  )
}

class Timer extends Component {

  render() {
    let button;
    if(this.props.workTime || this.props.breakTime) {
      button = <PauseButton onClick={this.props.breakTime ? this.props.pauseBreakTime : this.props.handleTimer} />
    } else {
      button = <PlayButton onClick={this.props.breakTime ? this.props.pauseBreakTime : this.props.handleTimer}/>
    }
    return(
    <div>
      <div>
        <Typography id="timer-label" style={styles.timerLabel}>{ this.props.breakLeft > 0 ? 'Break' : 'Session'}</Typography>
        <Card>
          <CardContent>
            <Typography style={styles.time}>
              <div id="time-left">{this.props.converter()}</div>
            </Typography>
          </CardContent>
        </Card>
    </div>
      <div id="time-handler">
        <audio id="beep" src="https://goo.gl/65cBl1" preload="auto"></audio>
        {button}
        <Fab color="secondary" id="reset" onClick={this.props.handleReset}><RestoreRoundedIcon /></Fab>
      </div>
    </div>
    )
  }
}

export default Timer;
