import { Component } from 'react';

export default class TimerHeader extends Component {
  render() {
    return(
      <div className="btn-group btn-group-justified" role="group">
        <div className="btn-group" role="group">
          <button type="button"
            className="btn btn-danger"
            onClick={this.props.onChangeTerm.bind(this, 'pomodoro')}>Pomodoro</button>
        </div>
        <div className="btn-group active" role="group">
          <button type="button"
            className="btn btn-success"
            onClick={this.props.onChangeTerm.bind(this, 'short_break')}>Short Break</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button"
            className="btn btn-info"
            onClick={this.props.onChangeTerm.bind(this, 'long_break')}>Long Break</button>
        </div>
      </div>
    );
  }
}
