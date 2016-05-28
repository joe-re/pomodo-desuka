import { Component } from 'react';
import TimerText from './timer_text';
const style = require('!style!css!sass!./counter.scss').counter;

export default class Counter extends Component {
  constructor(_props) {
    super();
    this.state = { isStart: false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.count === 0) {
      this.setState({ isStart: false });
    }
  }

  handleTimerStart() {
    this.props.onStartTimer({ seconds: 5 });
    this.setState({ isStart: true });
  }

  handleTimerStop() {
    this.props.onStopTimer();
    this.setState({ isStart: false });
  }

  render() {
    const { count, term } = this.props;
    return (
      <div className={`counter ${style}`}>
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
