import { Component } from 'react';

const style = require('!style!css!sass!./timer.scss').timer;

export default class Timer extends Component {
  get readableTime() {
    const { seconds } = this.props;
    const pad = (val) => `0${Math.floor(val)}`.slice(-2);
    return `${pad(seconds / 60)} : ${pad(seconds % 60)}`;
  }

  render() {
    return(
      <div className={`timer ${style}`}>
        <div className="timer-text">{this.readableTime}</div>
      </div>
    );
  }
}
