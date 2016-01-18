// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfApp from '../components/app';
import * as infActions from '../actions/infAppActions';

class App extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    infAppState: PropTypes.object.isRequired
  };

  render = () => {
    const { infAppState, actions } = this.props;

    return (
        <InfApp infState={infAppState} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    infAppState: state.infAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(infActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
