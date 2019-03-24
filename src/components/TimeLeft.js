import React from 'react';
import Typography from '@material-ui/core/Typography';


const styles = {
  time: {
    fontSize: '2.8em',
    width: '100%',
    textAlign: 'center',
  }
}

const TimeLeft = (props) => (
  <Typography id="time-left" style={styles.time}>{props.converter()}</Typography>
)

export default TimeLeft;
