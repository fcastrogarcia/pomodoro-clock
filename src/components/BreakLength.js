import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";

const styles = {
  lengthCard: {
    display: "inline-block",
    margin: "0 2em 2em 2em",
    textAlign: "center",
    padding: "1em"
  },
  display: {
    display: "inline-block",
    margin: "1em",
    fontSize: "1.5em",
    label: {
      marginTop: ".5em",
      color: "grey"
    }
  }
};

const Display = ({ length }) => (
  <CardContent>
    <Typography variant="h4" style={{ color: "#616161" }}>
      {length}
    </Typography>
    <Typography variant="subtitle1" style={styles.display.label}>
      minutes
    </Typography>
  </CardContent>
);

const BreakLength = ({
  handleBreak,
  decrementValue,
  incrementValue,
  length
}) => (
  <Fragment>
    <Card style={styles.lengthCard}>
      <CardActions>
        <IconButton onClick={handleBreak(decrementValue)}>
          <RemoveRoundedIcon />
        </IconButton>
        <Display length={length} />
        <IconButton onClick={handleBreak(incrementValue)}>
          <AddRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Fragment>
);

export default BreakLength;
