import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CountActions from '../actions';
import Counter from '../components/counter';

class App extends Component {
  render() {
    const { count, actions } = this.props;
    console.log(actions);
    return (
      <div>
        <Counter count={count}
          onSetTimer={actions.setTimer}
          onStartTimer={actions.startTimer}
          onStopTimer={actions.stopTimer} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
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
