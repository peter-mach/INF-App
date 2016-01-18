import React, {PropTypes} from 'react';
import InfTextInput from '../InfTextInput';
import NumberFormatter from '../../helpers/numberFormatter';

export default class Taxes extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    newCalculation: PropTypes.object.isRequired
  }

  taxKeypress = (name, value) => {
    if (!NumberFormatter.isNumeric(value)) return;
    value = Math.round(value);
    value = value > 99 ? 99 : value;
    value = value < 0 ? 0 : value;
    value = value * .01;
    this.props.actions.calculatePrice(name, value);
  }

  render = () => {
    let state = this.props.newCalculation;

    return (
      <div className="taxes">
        <div className="wrapper">
          <div className="tax">
            <span className="name">TAX:</span>
            <InfTextInput autoSelect className="inputPrice" onChange={this.taxKeypress} name="tax" value={NumberFormatter.getPercentFromFraction(state.tax)} />
            <span className="name">%</span>
          </div>
          <div className="separator"></div>
          <div className="tax">
            <span className="name">VAT:</span>
            <InfTextInput autoSelect className="inputPrice" onChange={this.taxKeypress} name="vat" value={NumberFormatter.getPercentFromFraction(state.vat)} />
            <span className="name">%</span>
          </div>
        </div>
      </div>
    );
  }
}
