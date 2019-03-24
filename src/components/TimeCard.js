import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlayPauseButton from './PlayPauseButton';
import CardActions from '@material-ui/core/CardActions';
import ResetButton from './ResetButton';
import Label from './Label';
import TimeLeft from './TimeLeft';

const styles = {
  card: {
    width: 'auto',
    display: 'inline-block',
    backgroundColor: ''
  },
  cardActions: {
    display: 'flex',
    justifyItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: '1.5em',
    backgroundColor: 'rgba(192,232,232,0.7)'
  }
}

const TimeCard = (props) => (
  <div>
    <Label innerText={props.breakLeft > 0 ? 'Break' : 'Session'} labelId='timer-label'/>
    <Card style={styles.card}>
      <CardContent>
        <TimeLeft converter={props.converter} />
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
