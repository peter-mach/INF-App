import React, {PropTypes} from 'react';
import InfTextInput from '../InfTextInput';
import Header from '../header';
import Taxes from '../taxes';
import RecentCalculations from '../recentCalculations';
import Footer from '../footer';

export default class InfApp extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    infState: PropTypes.object.isRequired
  }

  save = () => {
    this.props.actions.saveCalculation(this.props.infState.newCalculation);
  }

  render = () => {
    return (
      <div>
        <Header actions={this.props.actions} newCalculation={this.props.infState.newCalculation} />

        <Taxes actions={this.props.actions} newCalculation={this.props.infState.newCalculation} />

        <RecentCalculations actions={this.props.actions} infState={this.props.infState} />

        <Footer />
      </div>
    );
  }
}
