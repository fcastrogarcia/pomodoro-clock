import React from 'react';
import Fab from '@material-ui/core/Fab';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';

const styles = {
  resetButton: {
    marginLeft: '0.5em'
  }
}
const ResetButton = (props) => (
<Fab color="secondary" id="reset" style={styles.resetButton} onClick={props.onClick}><RestoreRoundedIcon fontSize="large" /></Fab>
)

export default ResetButton;
