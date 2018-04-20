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
      selectData: [],
    };

    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}/${this.props.endpoint}`)
      .then(response => (response.json()))
      .then(selectData => this.setState({ selectData }));
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (
      this.state.value === '' &&
      this.state.isRequired
    ) {
      this.setState({ errorMessage: t(`${this.props.selectErrorPath}`) });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    const { t } = this.props;

    return (
      <label
        className={this.props.labelClassName}
        htmlFor={this.props.name}
      >
        <span className={this.props.spanClassName}>
          {t(`${this.props.selectNamePath}`)}
        </span>
        <select
          className={this.props.selectClassName}
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          onChange={this.handleChange}
        >
          <option disabled />

          {this.state.selectData.map((selectItem, index) => (
            <option
              key={index.toString()}
              value={selectItem.name}
              className={this.props.selectItemClassName}
            >
              {(t(`${this.props.selectOptionsPath}.${selectItem.name}`))}
            </option>
          ))}
        </select>
        <div className={this.props.errorClassName}>
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

GenericSelect.defaultProps = {
  labelClassName: 'input__wrapper',
  spanClassName: '',
  selectClassName: 'input-select',
  selectItemClassName: 'input-select__item-option',
  errorClassName: 'input-select__errorMessage',
};

export default translate('translations', { withRef: true })(GenericSelect);
