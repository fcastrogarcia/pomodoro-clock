import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

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
  fontSize: '1.5em'
}
}


const LengthCard = (props) => (
    <span>
      <Card style={styles.lengthCard}>
        <span>
          <button id={props.decrementId} value={props.decrementValue} onClick={props.handleLength}>-</button>
        </span>
        <span>
          <Typography style={styles.display} id={props.lengthId}>{props.length}</Typography>
        </span>
        <span>
          <button id={props.incrementId} value={props.incrementValue} onClick={props.handleLength}>+</button>
        </span>
      </Card>
    </span>
    )

export default LengthCard;
