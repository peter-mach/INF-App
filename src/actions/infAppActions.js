import * as actionTypes from '../constants/actionTypes';

export function saveCalculation() {
  return { type: actionTypes.SAVE_CALCULATION };
}

export function deleteCalculation(key) {
  return { type: actionTypes.DELETE_CALCULATION, key };
}

export function changeCalculationName(key, name) {
  return { type: actionTypes.CHANGE_CALCULATION_NAME, key, name };
}

export function calculatePrice(key, value) {
  return { type: actionTypes.CALCULATE_PRICE, key, value };
}

export function filterCalculations(filter) {
  return { type: actionTypes.FILTER_CALCULATIONS, filter };
}
