import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './GenericSelect.css';

class GenericSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errorMessage: '',
      isRequired: this.props.required,
    };

    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onValidate) {
      const isValid = this.checkValidity();
      this.props.doValidate(this.props.name, isValid);
      if (isValid) {
        const selected = this.props.selectData.find(category => category.name === this.state.value);
        this.props.setValue(this.props.name, this.state.value);
        this.props.setValue(`${this.props.name}Id`, selected.id);
      }
    }
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (this.state.value === '' && this.state.isRequired) {
      this.setState({ errorMessage: t(`${this.props.selectErrorPath}`) });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(event) {
    if (this.props.disableChange) {
      this.props.disableChange();
    }
    this.setState({ value: event.target.value });
  }

  render() {
    const { t } = this.props;
    return (
      <div className={this.props.wrapperName}>
        <label
          className="input-select__label"
          htmlFor={this.props.name}
        >
          {t(`${this.props.selectNamePath}`)}
        </label>
        <select
          className={`input-select input-select--${this.props.selectStyle}`}
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          onChange={this.handleChange}
        >
          <option disabled />
          {this.props.selectData.map((selectItem, index) => (
            <option
              key={index.toString()}
              value={selectItem.name}
              className={this.props.optionClassName}
            >
              {(t(`${this.props.selectOptionsPath}.${selectItem.name}`))}
            </option>
          ))}
        </select>
        <div className={this.props.errorClassName}>
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

GenericSelect.defaultProps = {
  wrapperName: 'input-select__inline-label',
  selectStyle: 'custom',
  optionClassName: 'input-select__item-option',
  errorClassName: 'input-select__errorMessage',
};

export default translate('translations', { withRef: true })(GenericSelect);
