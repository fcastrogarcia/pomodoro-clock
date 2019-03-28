import React from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core';
import PlayPauseButton from './PlayPauseButton';
import ResetButton from './ResetButton';
import Label from './Label';
import TimeLeft from './TimeLeft';

const styles = {
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
    backgroundColor: '#e0e0e0'
  }
}

const TimeCard = (props) => (
  <div>
    <Label innerText={props.breakLeft > 0 ? 'Break' : 'Session'} labelId='timer-label'/>
    <Card style={styles.card}>
      <CardContent>
        <TimeLeft converter={props.converter} timeLeft={props.timeLeft} />
      </CardContent>
      <CardActions style={styles.cardActions}>
          <PlayPauseButton breakTime={props.breakTime} workTime={props.workTime}
          handleTimer={props.handleTimer} pauseBreakTime={props.pauseBreakTime}/>
          <ResetButton onClick={props.handleReset}/>
      </CardActions>
    </Card>
  </div>
)

export default TimeCard;
