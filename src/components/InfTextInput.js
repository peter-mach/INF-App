import React, { Component, PropTypes } from 'react';

export default class InfTextInput extends Component {
	static propTypes = {
		placeCaret: PropTypes.number,
		className: PropTypes.string,
		takeFocus: PropTypes.bool,
		autoSelect: PropTypes.bool,
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	}

	componentDidMount = () => {
		if (this.props.takeFocus) this._input.focus();
	}

	componentDidUpdate = () => {
		if (this.props.placeCaret && document.activeElement === this._input) {
			let placeCaret = this._input.value.length - this.props.placeCaret;
			this._input.setSelectionRange(placeCaret, placeCaret);
		}
	}

	onClick = (e) => {
		if (this.props.autoSelect) this._input.setSelectionRange(0, this._input.value.length);
	}

	handleChange = (e) => {
		this.props.onChange(this.props.name, e.target.value);
	}

	render() {
		return (
			<input
				ref={(c) => this._input = c}
				className={this.props.className || 'small'}
				type="text"
				placeholder={this.props.placeholder}
				onClick={this.onClick}
				value={this.props.value}
				onChange={this.handleChange} />
		);
	}
}
