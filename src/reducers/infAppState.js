import * as actionTypes from '../constants/actionTypes';
import calculator from '../businessLogic/infCalculator';
import dateHelper from '../helpers/dateHelper';


const initialState = {
    newCalculation: {
        price: null,
        newPrice: null,
        profit: null,
        date: null,
        name: '',
        tax: .19,
        vat: .23
    },
    filter: '',
    prevCalculations: () => {
        let prevCalcs = localStorage.inf_prevCalculations ? JSON.parse(localStorage.inf_prevCalculations) : [];
        prevCalcs.forEach((el) => el.date = new Date(el.date));
        return prevCalcs;
    }()
    // localStorage.inf_prevCalculations ? JSON.parse(localStorage.inf_prevCalculations).each(pc => pc.date = new Date(pc.date)) : []
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using  object literal "{}" and spread "..."" operator
//to create a copy of current state and update values on the copy.
export default function infAppState(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SAVE_CALCULATION:
                let scState = {...state};
                scState.prevCalculations = state.prevCalculations.concat({...state.newCalculation, date: new Date(), name:(state.newCalculation.name || 'Click to add a name')});

                // persist in localStorage
                localStorage.inf_prevCalculations = JSON.stringify(scState.prevCalculations);

                scState.newCalculation = {
                        tax:state.newCalculation.tax,
                        vat:state.newCalculation.vat,
                        price:null,
                        newPrice: null,
                        profit: null,
                        date: null,
                        name: ''
                    };

                return scState;

        case actionTypes.DELETE_CALCULATION:
            let dcState = {...state};

            dcState.prevCalculations = dcState.prevCalculations.filter(c => c !== action.key);

            // persist in localStorage
            localStorage.inf_prevCalculations = JSON.stringify(dcState.prevCalculations);

            return dcState;

        case actionTypes.FILTER_CALCULATIONS:
            let fcState = {
                ...state,
                filter: action.filter
            };
            return fcState;

        case actionTypes.CHANGE_CALCULATION_NAME:
            let ccnState = {...state};
            if (action.key) {
                let index = ccnState.prevCalculations.indexOf(action.key);
                ccnState.prevCalculations[index].name = action.name;

                // persist in localStorage
                localStorage.inf_prevCalculations = JSON.stringify(ccnState.prevCalculations);

            } else {
                ccnState.newCalculation.name = action.name;
            }
            return ccnState;

		case actionTypes.CALCULATE_PRICE:
            let calc = calculator();
            let cpState = {...state};
            cpState.newCalculation[action.key] = action.value;

            let cost = calc.calculateCost(cpState.newCalculation.price, cpState.newCalculation.tax, cpState.newCalculation.vat);
            cpState.newCalculation.newPrice = cost;

            cpState.newCalculation.profit = cpState.newCalculation.price - cost;
			return cpState;

		default:
			return state;
	}
}
