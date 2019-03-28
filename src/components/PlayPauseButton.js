import React from 'react';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import {Fab, IconButton} from '@material-ui/core/';

const styles = {
  button: {
    marginRigth: '0.5em'
  }
}

const PlayPauseButton = (props) => {
  if(props.workTime || props.breakTime) {
  return (
    <PauseButton style={styles.button} onClick={props.breakTime ? props.pauseBreakTime : props.handleTimer} />
  )
  } else {
    return (
    <PlayButton style={styles.button} onClick={props.breakTime ? props.pauseBreakTime : props.handleTimer}/>
)
  }
}
const PauseButton = (props) => (
    <IconButton color="action" id="start_stop" onClick={props.onClick}><PauseRoundedIcon style={{fontSize: '2em'}}/></IconButton>
  );

const PlayButton = (props) => (
      <IconButton color="action" id="start_stop" onClick={props.onClick}><PlayArrowRoundedIcon style={{fontSize: '2em'}} /></IconButton>
    );


export default PlayPauseButton;
