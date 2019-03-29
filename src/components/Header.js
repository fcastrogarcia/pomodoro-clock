import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';

const styles = {
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: '#f44336'
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar style={{justifyContent: 'center'}}>
          <Typography variant="h6" color="inherit">
            Pomodoro Clock
          </Typography>
          <TimerRoundedIcon  style={{marginLeft: '.2em'}}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
