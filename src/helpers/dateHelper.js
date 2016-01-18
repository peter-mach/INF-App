export default class DateHelper {
	//See tests for desired format.
	static getFormattedDateTime(date) {
		return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${this.padLeadingZero(date.getMinutes())}:${this.padLeadingZero(date.getSeconds())}`;
	}

    static getFromattedDate(date) {
        return `${this.padLeadingZero(date.getDate())}.${this.padLeadingZero(date.getMonth() + 1)}`;
    }

	static padLeadingZero(value) {
		return value > 9 ? value : '0' + value;
	}
}
