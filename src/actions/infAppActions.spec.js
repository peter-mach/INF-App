import * as actions from './infAppActions';
import * as actionTypes from '../constants/actionTypes';

import chai from 'chai';
chai.should();

describe('Actions', () => {
  it('should create an action to save calculation', () => {
    const expectedAction = {
      type: actionTypes.SAVE_CALCULATION
    };

    //assert
    actions.saveCalculation().should.deep.equal(expectedAction);
  });

  it('should create an action to delete calculation', () => {
    const key = 'key';
    const expectedAction = {
      type: actionTypes.DELETE_CALCULATION,
      key
    };

    //assert
    actions.deleteCalculation(key).should.deep.equal(expectedAction);
  });

  it('should create an action to change calculation name', () => {
    const key = 'key';
    const name = 'name';
    const expectedAction = {
      type: actionTypes.CHANGE_CALCULATION_NAME,
      key,
      name
    };

    //assert
    actions.changeCalculationName(key, name).should.deep.equal(expectedAction);
  });

  it('should create an action to calculate the price', () => {
    const key = 'key';
    const value = 12;
    const expectedAction = {
      type: actionTypes.CALCULATE_PRICE,
      key,
      value
    };

    //assert
    actions.calculatePrice(key, value).should.deep.equal(expectedAction);
  });

  it('should create an action to filter calculation list', () => {
    const filter = 'filter';
    const expectedAction = {
      type: actionTypes.FILTER_CALCULATIONS,
      filter
    };

    //assert
    actions.filterCalculations(filter).should.deep.equal(expectedAction);
  });
});
