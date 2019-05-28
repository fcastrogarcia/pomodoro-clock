import React from "react";
import TimeCard from "./TimeCard";

const styles = {
  container: {
    backgroundColor: "",
    textAlign: "center",
    display: "inline-block",
    width: "100%",
    height: ""
  }
};

const Timer = props => (
  <div style={styles.container}>
    <TimeCard {...props} />
    <div id="time-handler">
      <audio id="beep" src="https://goo.gl/65cBl1" preload="auto" />
    </div>
  </div> //eliminar time-handler div
);

export default Timer;
