import React from 'react';
import {Fab, IconButton} from '@material-ui/core/';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';

const styles = {
  resetButton: {
    marginLeft: '0.5em'
    }
}
const ResetButton = (props) => (
<IconButton
  color="action"
  id="reset"
  style={styles.resetButton}
  onClick={props.onClick} >
  <RestoreRoundedIcon
    style={{fontSize: '2em'}} />
</IconButton>
)

export default ResetButton;
