// @flow
import React, { Component, PropTypes } from 'react';
import TimerText from './timer_text';
import style from '!style!css!sass!./counter.scss';
import { CounterActions } from './../actions/';

type Props = {
  count: number,
  term: string,
  onStartTimer: typeof CounterActions.startTimer,
  onStopTimer: typeof CounterActions.stopTimer
};

type State = {
  isStart: boolean
};
export default class Counter extends Component {
  props: Props;
  state: State;

  constructor(_props: Props) {
    super();
    this.state = { isStart: false };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.count === 0) {
      this.setState({ isStart: false });
    }
  }

  handleTimerStart() {
    this.props.onStartTimer();
    this.setState({ isStart: true });
  }

  handleTimerStop() {
    this.props.onStopTimer();
    this.setState({ isStart: false });
  }

  render(): React.Element {
    const { count, term } = this.props;
    return (
      <div className={`counter ${style.counter}`}>
        <TimerText seconds={count} term={term} />
        { this.state.isStart ?
          <a className="start-link" onClick={this.handleTimerStop.bind(this)} >
            <span className="glyphicon glyphicon-pause"></span>
          </a> :
          <a className="stop-link" onClick={this.handleTimerStart.bind(this)}>
            <span className="glyphicon glyphicon-play"></span>
          </a>
        }
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  term: PropTypes.string.isRequired
};
