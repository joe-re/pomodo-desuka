import { Component } from 'react';

class Counter extends Component {
  handleCountUp() {
    this.props.countUp();
  }

  render() {
    const { count } = this.props;
    return (
      <div className="counter">
        <h1>Counter</h1>
        {count} <button onClick={this.handleCountUp.bind(this)}>Count Up!</button>
      </div>
    );
  }
}

export default Counter;
