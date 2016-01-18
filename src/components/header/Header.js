import React, {PropTypes} from 'react';
import InfTextInput from '../InfTextInput';
import Footer from '../footer';
import NumberFormatter from '../../helpers/numberFormatter';

export default class Header extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    newCalculation: PropTypes.object.isRequired
  }

  priceKeypress = (name, value) => {
    value = NumberFormatter.scrubFormatting(value);
    this.props.actions.calculatePrice(name, value);
  }

  save = () => {
    this.props.actions.saveCalculation(this.props.newCalculation);
  }

  render = () => {
    let state = this.props.newCalculation;
    let message = state.profit ? 'profit: '+NumberFormatter.getCurrencyFormattedNumber(state.profit) : 'type the price & see the real cost';

    return (
      <header>
        <InfTextInput takeFocus placeCaret={2} className="inputPrice" onChange={this.priceKeypress} name="price" placeholder="0,00" value={NumberFormatter.getCurrencyFormattedNumber(state.price)} />
        <span className="equals"> = </span>
        <span className="resultPrice">{state.newPrice ? NumberFormatter.getCurrencyFormattedNumber(state.newPrice) : '0,00zł'}</span>
        <p className="description">{message}</p>
      </header>
    );
  }
}
