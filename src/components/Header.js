import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


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
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar style={{justifyContent: 'center'}}>
          <Typography variant="h6" color="inherit">
            Pomodoro Clock
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
