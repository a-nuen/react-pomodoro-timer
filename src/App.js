import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer';
import Break from './components/break';
import Display from './components/display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 300,
      timer: 1500,
      display: 1500,
      pauseResume: 'Pause',
      startClicked: false,
      workBreak: 'Work'
    }
    this.count;
  }

  start = () => {
    this.countDown(this.state.timer);
    this.setState({
      pauseResume: 'Pause',
      startClicked: true,
      workBreak: 'Work'
    })
  }

  countDown = (seconds) => {
    let then = Date.now() + seconds * 1000;
    this.count = setInterval(() => {
      let secsLeft = Math.round((then - Date.now()) /1000);
      this.setState({display: secsLeft});

      if ( secsLeft <= 0 ) {
        clearInterval(this.count);
        let audio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
        audio.play();
        if ( this.state.workBreak === 'Work') {
          this.countDown(this.state.break);
          this.setState({workBreak: 'Break'});
        } else {
          this.countDown(this.state.timer);
          this.setState({workBreak: 'Work'});
        }
      }
      console.log(secsLeft);
    }, 1000)
  }

  reset = () => {
    clearInterval(this.count);
    this.setState({display: this.state.timer})
    this.setState({startClicked: false})
  }

  pause = () => {
    clearInterval(this.count);
    this.setState({pauseResume: 'Resume'})
  }

  resume = () => {
    this.countDown(this.state.display);
    this.setState({pauseResume: 'Pause'})
  }

  breakAddMinute = () => {
    this.setState({
      break: this.state.break + 60
    })
  }

  breakMinusMinute = () => {
    if(this.state.break > 60) {
      this.setState({
        break: this.state.break - 60
      })
    }
  }

  timerAddMinute = () => { 
    this.setState({
      timer: this.state.timer + 60
    })
  }

  timerMinusMinute = () => {
    if(this.state.timer > 60) {
      this.setState({
      timer: this.state.timer - 60
      })
    }
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Pomodoro Timer</h1>
        <div className='flex'>
        <Timer 
          timer={this.state.timer}
          timerAddMinute={this.timerAddMinute}
          timerMinusMinute={this.timerMinusMinute} />
        <Break 
          startClicked={this.state.startClicked}
          break={this.state.break}
          breakAddMinute={this.breakAddMinute} 
          breakMinusMinute={this.breakMinusMinute} />
        </div>
        <Display 
          display={this.state.display}
          reset={this.reset}
          pause={this.pause}
          resume={this.resume}
          pauseResume={this.state.pauseResume} 
          start={this.start}
          startClicked={this.state.startClicked} />
      </div>
    );
  }
}

export default App;
