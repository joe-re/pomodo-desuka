import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CountActions from '../actions';
import Counter from '../components/counter';

class App extends Component {
  render() {
    const { count, actions } = this.props;
    return (
      <div>
        <Counter count={count} buttonClick={actions.buttonClick} />
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
