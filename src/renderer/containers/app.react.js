import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CountActions from '../actions';
import Counter from '../components/counter';
import TimerHeader from '../components/timer_header';

class App extends Component {
  render() {
    const { actions, counter } = this.props;
    return (
      <div>
        <TimerHeader onChangeTerm={actions.changeTerm} />
        <Counter
          {...counter}
          onStartTimer={actions.startTimer}
          onStopTimer={actions.stopTimer} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CountActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
