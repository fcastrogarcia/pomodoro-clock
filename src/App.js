import React, { Component, Fragment } from 'react';
import BreakLength from './components/BreakLength';
import Timer from './components/Timer';
import Label from './components/Label';
import styles from './AppStyles';
import Header from './components/Header';
import SessionLength from './components/SessionLength';
import ScrollDialog from './components/ScrollDialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      breakLeft: 0,
      workTime: false,
      breakTime: false
    }
    this.handleBreak = this.handleBreak.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.converter = this.converter.bind(this);
    this.breakTimer = this.breakTimer.bind(this);
    this.pauseBreakTime = this.pauseBreakTime.bind(this)
  }

    handleBreak = (value) => () => {
      this.setState({
               breakLength: this.state.breakLength === 1 && value==='break-decrement' ? this.state.breakLength :
                            value==='break-decrement'? this.state.breakLength - 1 :
                            this.state.breakLength === 60 && value==='break-increment' ? this.state.breakLength :
                            this.state.breakLength + 1
      })
      }
    handleSession = (value) => () => {
      if(this.state.sessionLength === 1 && value==='session-decrement') {
          this.setState({
               sessionLength: this.state.sessionLength
          })
    } else if(value==='session-decrement') {
          this.setState({
               sessionLength:  this.state.sessionLength - 1,
               timeLeft: this.state.workTime ? this.state.timeLeft : this.state.timeLeft - 60
          })
    } else if(this.state.sessionLength === 60 && value==='session-increment') {
          this.setState({
               sessionLength: this.state.sessionLength
          })
    } else if (value==='session-increment'){
          this.setState({
               sessionLength:  this.state.sessionLength + 1,
               timeLeft: this.state.workTime ? this.state.timeLeft : this.state.timeLeft + 60
          })}
     }

    handleReset() {
      this.setState({
        breakLength: 5,
        sessionLength: 25,
        timeLeft: 1500,
        workTime: false,
        breakTime: false,
        breakLeft: 0
      });
      document.getElementById('beep').load();
    }

    handleTimer() {
       this.setState({
            workTime: this.state.breakTime ? this.state.workTime : !this.state.workTime,
       })
      var timerFunction = () => {
         if(this.state.workTime && this.state.timeLeft > 0) {
           this.setState({
                timeLeft: this.state.timeLeft-1,
            });
       } else if(this.state.timeLeft<1) {
            document.getElementById('beep').play();
            this.setState({
                 timeLeft: this.state.breakLength*60
            })
            this.breakTimer();
            clearInterval(timer);
            this.setState({workTime: !this.state.workTime})
       } else if(this.state.workTime==false) {
            clearInterval(timer);
       }
       };
      const timer = setInterval(timerFunction,1000);
    }

    breakTimer(){
      this.setState({
           breakTime: true,
           breakLeft: !this.state.breakTime ? this.state.breakLength*60 : this.state.breakLeft
      })
      let breakTimerFunction = () => {
        if(this.state.breakTime && this.state.timeLeft > 0) {
          this.setState({
               timeLeft: this.state.breakLeft-1,
               breakLeft: this.state.breakLeft-1
    })} else if(this.state.timeLeft<1) {
          this.setState({
               breakTime: false,
               timeLeft: this.state.sessionLength*60,
            })
          clearInterval(breakTime);
          document.getElementById('beep').play();
          this.handleTimer();
      } else {
          clearInterval(breakTime);
          }
      };
      const breakTime = setInterval(breakTimerFunction,1000);
    }

    pauseBreakTime(){
      this.setState({
        breakTime: !this.state.breakTime
      })
    }

    converter() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }
  render() {
  return(
  <Fragment>
    <Header />
    <div id="main" style={styles.main}>
        <div style={styles.upperContainer}>
          <div style={styles.lengthCardContainer}>
            <Label innerText='Break Length' labelId='break-label'/>
            <BreakLength length={this.state.breakLength} handleBreak={this.handleBreak}
              decrementValue='break-decrement' incrementValue='break-increment'
            />
          </div>
          <div style={styles.lengthCardContainer}>
            <Label innerText='Session Length' labelId='session-label'/>
            <SessionLength length={this.state.sessionLength} handleSession={this.handleSession}
            decrementValue='session-decrement' incrementValue='session-increment'
          />
          </div>
        </div>
     <div>
        <Timer timeLeft={this.state.timeLeft} handleReset={this.handleReset} handleTimer={this.handleTimer}
        converter={this.converter} breakTime={this.state.breakTime} pauseBreakTime={this.pauseBreakTime}
        breakLeft={this.state.breakLeft} workTime={this.state.workTime}/>
     </div>
     <ScrollDialog />

    </div>
  </Fragment>

  )
}
}

export default App;
