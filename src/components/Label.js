import React from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
  timerLabel: {
    fontSize: '2.3em',
    textAlign: 'center',
    width: 'auto',
    marginBottom: '.5em'
  }
}

const Label = (props) => (
  <Typography id={props.labelId} variant='display4'style={styles.timerLabel}>{props.innerText}</Typography>
)

export default Label;
