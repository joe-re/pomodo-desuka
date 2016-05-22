import { Component } from 'react';
import Timer from './timer';

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
    const { count } = this.props;
    return (
      <div className="counter">
        <h1>Counter</h1>
        <Timer seconds={count} />
        { this.state.isStart ?
          <button onClick={this.handleTimerStop.bind(this)}>Stop</button> :
          <button onClick={this.handleTimerStart.bind(this)}>Start</button>
        }
      </div>
    );
  }
}
