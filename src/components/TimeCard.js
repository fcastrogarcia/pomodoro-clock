import React from "react";
import { Card, CardContent, CardActions } from "@material-ui/core";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";
import Label from "./Label";
import TimeLeft from "./TimeLeft";

const styles = {
  card: {
    width: "auto",
    display: "inline-block"
  },
  cardActions: {
    display: "flex",
    justifyItems: "center",
    width: "100%",
    justifyContent: "center",
    padding: "1.5em",
    backgroundColor: "#e0e0e0"
  }
};

const TimeCard = ({
  breakLeft,
  converter,
  timeLeft,
  breakTime,
  workTime,
  pauseBreakTime,
  handleTimer,
  handleReset
}) => {
  const props = {
    breakTime,
    workTime,
    handleTimer,
    pauseBreakTime
  };
  return (
    <div>
      <Label
        innerText={breakLeft > 0 ? "Break" : "Session"}
        labelId="timer-label"
      />
      <Card style={styles.card}>
        <CardContent>
          <TimeLeft converter={converter} timeLeft={timeLeft} />
        </CardContent>
        <CardActions style={styles.cardActions}>
          <PlayPauseButton {...props} />
          <ResetButton onClick={handleReset} />
        </CardActions>
      </Card>
    </div>
  );
};

export default TimeCard;
