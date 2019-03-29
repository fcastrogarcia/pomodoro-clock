import React from 'react';
import {Button, IconButton, Fab, Dialog,
DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';


class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{position: 'fixed'}}>
        <IconButton onClick={this.handleClickOpen('paper')}><HelpRoundedIcon fontSize='large'/></IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">About Pomodoro Clock</DialogTitle>
          <DialogContent>
            <DialogContentText>
            The Pomodoro Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. The technique uses a timer
            to break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for 'tomato', after the tomato-shaped kitchen
            timer that Cirillo used as a university student.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="action">
              GOT IT
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ScrollDialog;
