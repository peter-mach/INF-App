import MathHelper from './mathHelper';

class NumberFormatter {
    static getPercentFromFraction(value) {
        if (value === null) return '';
        if (value >= 1) return value;
        return ~~(value * 100);
    }

    static getCurrencyFormattedNumber(value) {
        if (value === null) return '';

        value = this.getFormattedNumber(value);
        // return '$' + value;
        return value + 'zł';
    }

    static getFormattedNumber(value) {
        if (value === 0) return 0;

        if (!value) return '';

        if (!this.isInt(this.scrubFormatting(value)))
            return ''; //if it's not a number after scrubbing formatting, just return empty.


        var roundedValue = MathHelper.roundNumber(value, 2); //round if more than 2 decimal points
        roundedValue = roundedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //add commas for 1,000's. RegEx from http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var roundedValueContainsDecimalPlace = (roundedValue.indexOf('.') !== -1);

        if (roundedValueContainsDecimalPlace) {
            var numbersToTheRightOfDecimal = roundedValue.split('.')[1];

            switch (numbersToTheRightOfDecimal.length) {
                case 0:
                    return roundedValue.replace('.', ''); //no decimal necessary since no numbers after decimal
                case 1:
                    return roundedValue + '0';
                default:
                    return roundedValue;
            }
        }
        return roundedValue;
    }

    static isInt(n) {
        if (n === '' || n === null) {
            return false;
        }

        return n % 1 === 0;
    }

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static scrubFormatting(value) {
        return value.toString().replace(/\D/g,'');
    }
}

export default NumberFormatter;
