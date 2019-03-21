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

function PauseButton(props) {
  return (
    <Fab color="primary" id="start_stop" onClick={props.onClick}><PauseRoundedIcon /></Fab>
  )
};
function PlayButton(props) {
  return (
    <Fab color="primary" id="start_stop" onClick={props.onClick}><PlayArrowRoundedIcon /></Fab>
  )
}

export default Buttons;
