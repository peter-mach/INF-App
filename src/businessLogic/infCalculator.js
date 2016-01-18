import mathHelper from '../helpers/mathHelper';
import NumberFormatter from '../helpers/numberFormatter';

export default function infCalculator() {
    //private
    function calculateCost (price, tax, vat) {
        let net = price / (1 + vat);
        let cost = net * (1 - tax);
        return cost;
    }

    //public
    return {
        calculateCost: calculateCost
    };
}
