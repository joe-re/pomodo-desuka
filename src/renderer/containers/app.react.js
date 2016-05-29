// @flow
declare module 'redux' {};

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CounterActions } from '../actions';
import CounterComponent from '../components/counter';
import TimerHeader from '../components/timer_header';
import type { Counter } from '../reducers/counter';

type State = {
 counter: Counter
};

type Props = {
  actions: typeof CounterActions,
  counter: Counter
}

class App extends Component {
  props: Props;

  render(): React.Element {
    const { actions, counter } = this.props;
    return (
      <div>
        <TimerHeader onChangeTerm={actions.changeTerm} />
        <CounterComponent
          {...counter}
          onStartTimer={actions.startTimer}
          onStopTimer={actions.stopTimer} />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.object.isRequired
};

function mapStateToProps(state: State) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
