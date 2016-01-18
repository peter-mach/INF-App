import React, {PropTypes} from 'react';
import InfTextInput from '../InfTextInput';
import Calculation from './calculation';

class RecentCalculations extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    infState: PropTypes.object.isRequired
  }

  filterKeypress = (name, value) => {
    this.props.actions.filterCalculations(value);
  }

  render = () => {
    let {prevCalculations, filter, newCalculation} = this.props.infState;
    let actions = this.props.actions;

    let list = prevCalculations
                    .filter(c => c.name.toLowerCase().includes(filter.trim().toLowerCase()))
                    .map(function (value, key) {
                      return (
                          <li key={value.date.getTime()}>
                            <Calculation actions={actions} calculationObject={value} />
                          </li>
                        );
                    })
                    .reverse();


    return (
      <div className="recentCalculations">

        <div className="newCalculationWrapper">
          <Calculation newCalc actions={actions} calculationObject={newCalculation} />
        </div>

        {list.length || filter ? (
        <div className="searchWrapper">
          <InfTextInput onChange={this.filterKeypress} name="filter" placeholder="type to filter the list" value={filter} />
        </div>) : null}

        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default RecentCalculations;
