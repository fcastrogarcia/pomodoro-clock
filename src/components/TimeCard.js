import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PlayPauseButton from './PlayPauseButton';
import Fab from '@material-ui/core/Fab';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import CardActions from '@material-ui/core/CardActions';


const styles = {
  time: {
    fontSize: '2.8em',
    width: '100%',
    textAlign: 'center'
  },
  timerLabel: {
    fontSize: '2em',
    textAlign: 'center',
    padding: '10%',
    width: 'auto'
  },
  card: {
    width: 'auto',
    display: 'inline-block',
  },
  cardActions: {
    display: 'flex',
    justifyItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: '1.5em',
    backgroundColor: '#DFF7F7'
  }
}

const TimeCard = (props) => (
  <div>
    <Typography id="timer-label" style={styles.timerLabel}>{props.breakLeft > 0 ? 'Break' : 'Session'}</Typography>
    <Card style={styles.card}>
      <CardContent>
        <Typography id="time-left" style={styles.time}>
        {props.converter()}
        </Typography>
      </CardContent>
      <CardActions style={styles.cardActions}>
          <PlayPauseButton breakTime={props.breakTime} workTime={props.workTime}
          handleTimer={props.handleTimer} pauseBreakTime={props.pauseBreakTime}/>
          <Fab color="secondary" id="reset" onClick={props.handleReset}><RestoreRoundedIcon fontSize="large" /></Fab>
      </CardActions>
    </Card>
  </div>
)

export default TimeCard;
