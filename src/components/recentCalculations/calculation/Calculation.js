import React, {PropTypes} from 'react';
import InfTextInput from '../../InfTextInput';
import DateHelper from '../../../helpers/dateHelper';
import NumberFormatter from '../../../helpers/numberFormatter';

export default class Calculation extends React.Component {
  static propTypes = {
    newCalc: PropTypes.bool,
    actions: PropTypes.object.isRequired,
    calculationObject: PropTypes.object.isRequired
  }

  saveCalculation = (e) => {
    // debugger;
    if (this.props.calculationObject.price) this.props.actions.saveCalculation();
  }

  nameKeypress = (name, value) => {
    let calcObj = this.props.newCalc ? undefined : this.props.calculationObject;
    this.props.actions.changeCalculationName(calcObj, value);
  }

  deleteCalculation = () => {
    this.props.actions.deleteCalculation(this.props.calculationObject);
  }

  render = () => {
    let newCalc = this.props.newCalc;
    let state = this.props.calculationObject;
    let cn = this.props.calculationObject.price ? 'calculation' : 'calculation disabled';

    return (
      <div className={cn}>
        {newCalc ? (// new calc
        <div className="dateAndTime">
          <span onClick={this.saveCalculation} className="addNew">+</span>
        </div>
        ) : (
        <div className="dateAndTime">
          <span className="date">{DateHelper.getFromattedDate(state.date)}<br />{state.date.getFullYear()}</span>
        </div>
        )}

        <div className="productName">
          <InfTextInput onChange={this.nameKeypress} name="name" placeholder="type the name" value={state.name} />
        </div>

        {state.price ?(
        <div className="calculations">
          <span className="price">{NumberFormatter.getCurrencyFormattedNumber(state.price)}</span><span className="equals"> = </span><span className="price">{NumberFormatter.getCurrencyFormattedNumber(state.newPrice)}</span>
          <hr />
          <span className="profit">profit: </span><span className="price">{NumberFormatter.getCurrencyFormattedNumber(state.profit)}</span>
        </div>) : null}

        <div className="taxes">
          <div className="tax">
            <span className="name">TAX:</span>
            <span className="price">{NumberFormatter.getPercentFromFraction(state.tax)}</span>
            <span className="name">%</span>
          </div>
          <hr />
          <div className="tax">
            <span className="name">VAT:</span>
            <span className="price">{NumberFormatter.getPercentFromFraction(state.vat)}</span>
            <span className="name">%</span>
          </div>
        </div>

        {!newCalc ?
        (<div className="remove">
          <span onClick={this.deleteCalculation}>x</span>
        </div>) : null}
      </div>
    );
  }
}
