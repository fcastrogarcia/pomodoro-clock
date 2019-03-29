import React from 'react';
import Typography from '@material-ui/core/Typography';


const styles = {
  time: {
    fontSize: '2.8em',
    width: '100%',
    textAlign: 'center',
    color: '#424242'
  },
  littleTime: {
    color: '#f44336'
  }
}


const TimeLeft = (props) => {
  let stylesMerger = () => (
   Object.assign({}, styles.time, styles.littleTime)
 )
  let timeStyling = () => (
    props.timeLeft < 60 ? stylesMerger() : styles.time)

  return(
  <Typography id="time-left" style={timeStyling()}>{props.converter()}</Typography>
)
}
export default TimeLeft;
