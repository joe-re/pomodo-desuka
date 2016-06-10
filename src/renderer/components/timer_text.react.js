// @flow
import { Component } from 'react';

import style from '!style!css!sass!./timer_text.scss';

export default class TimerText extends Component {
  get readableTime(): string {
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
      <div className={`timer-text ${style['timer-text']} ${textClassName}`}>
        {this.readableTime}
      </div>
    );
  }
}
