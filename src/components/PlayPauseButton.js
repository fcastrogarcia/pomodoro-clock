import React from 'react';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import Fab from '@material-ui/core/Fab';


const PlayPauseButton = (props) => {
  if(props.workTime || props.breakTime) {
  return (
    <PauseButton onClick={props.breakTime ? props.pauseBreakTime : props.handleTimer} />
  )
  } else {
    return (
    <PlayButton onClick={props.breakTime ? props.pauseBreakTime : props.handleTimer}/>
)
  }
}
const PauseButton = (props) => (
    <Fab color="action" id="start_stop" onClick={props.onClick}><PauseRoundedIcon /></Fab>
  );

const PlayButton = (props) => (
      <Fab color="action" id="start_stop" onClick={props.onClick}><PlayArrowRoundedIcon /></Fab>
    );


export default PlayPauseButton;
