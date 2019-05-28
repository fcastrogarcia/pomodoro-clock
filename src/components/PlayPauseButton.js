import React from "react";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import { IconButton } from "@material-ui/core/";

const styles = {
  button: {
    marginRigth: "0.5em"
  }
};

const PlayPauseButton = ({
  workTime,
  breakTime,
  pauseBreakTime,
  handleTimer
}) => {
  if (workTime || breakTime) {
    return (
      <PauseButton
        style={styles.button}
        onClick={breakTime ? pauseBreakTime : handleTimer}
      />
    );
  } else {
    return (
      <PlayButton
        style={styles.button}
        onClick={breakTime ? pauseBreakTime : handleTimer}
      />
    );
  }
};
const PauseButton = ({ onClick }) => (
  <IconButton color="action" id="start_stop" onClick={onClick}>
    <PauseRoundedIcon style={{ fontSize: "2em" }} />
  </IconButton>
);

const PlayButton = ({ onClick }) => (
  <IconButton color="action" id="start_stop" onClick={onClick}>
    <PlayArrowRoundedIcon style={{ fontSize: "2em" }} />
  </IconButton>
);

export default PlayPauseButton;
