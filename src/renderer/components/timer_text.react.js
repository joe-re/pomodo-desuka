import { Component } from 'react';

const style = require('!style!css!sass!./timer_text.scss')['timer-text'];

export default class TimerText extends Component {
  get readableTime() {
    const { seconds } = this.props;
    const pad = (val) => `0${Math.floor(val)}`.slice(-2);
    return `${pad(seconds / 60)} : ${pad(seconds % 60)}`;
  }

  render() {
    let textClassName;
    switch (this.props.term) {
    case 'pomodoro':
      textClassName = 'text-danger';
      break;
    case 'short_break':
      textClassName = 'text-success';
      break;
    case 'long_break':
      textClassName = 'text-info';
      break;
    }

    return(
      <div className={`timer-text ${style} ${textClassName}`}>
        {this.readableTime}
      </div>
    );
  }
}
