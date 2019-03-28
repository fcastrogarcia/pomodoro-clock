import React, { Fragment } from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const styles = {
lengthCard: {
  display: 'inline-block',
  margin: '0 2em 2em 2em',
  textAlign: 'center',
  padding: '1em',
},
display: {
  display: 'inline-block',
  margin: '1em',
  fontSize: '1.5em',
  label: {
    marginTop: '.5em',
    color: 'grey'
  }
}
}

const Display = (props) => (
  <CardContent>
    <Typography variant='h4'>{props.length}</Typography>
    <Typography variant='subtitle1' style={styles.display.label}>minutes</Typography>
  </CardContent>
)

const BreakLength = (props) => (
  <Fragment>
      <Card style={styles.lengthCard}>
        <CardActions>
          <IconButton onClick={props.handleBreak(props.decrementValue)}><RemoveRoundedIcon  /></IconButton>
          <Display length={props.length}/>
          <IconButton onClick={props.handleBreak(props.incrementValue)}><AddRoundedIcon /></IconButton>
        </CardActions>
      </Card>
  </Fragment>
)

export default BreakLength;
