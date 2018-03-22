import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './CategorySelect.css';

class CategorySelect extends Component {
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

  checkValidity(value) {
    const { t } = this.props;
    const isValid = true;

    if (value === '' && this.state.isRequired) {
      this.setState({ errorMessage: t('components.UI.categorySelect.errorEmptyField') });
      return false;
    }

    this.setState({ errorMessage: '' });
    return isValid;
  }

  handleChange(event) {
    const { value } = event.target;
    this.checkValidity(value);
    this.setState({ value });
  }

  render() {
    const { t } = this.props;
    return (
      <label
        htmlFor={this.props.name}
      >
        <select
          className="input-select"
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          onChange={this.handleChange}
        >
          <option
            value=""
            className="input-select__item-option"
          />
          <option
            value="architecture"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.architecture') }
          </option>
          <option
            value="garden"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.garden') }
          </option>
          <option
            value="workshop-services"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.workshop-services') }
          </option>
          <option
            value="transport"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.transport') }
          </option>
          <option
            value="photography"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.photography') }
          </option>
          <option
            value="graphics"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.graphics') }
          </option>
          <option
            value="marketing-and-advertising"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.marketing-and-advertising') }
          </option>
          <option
            value="programming"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.programming') }
          </option>
          <option
            value="bookkeeping"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.bookkeeping') }
          </option>
          <option
            value="law"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.law') }
          </option>
          <option
            value="translations"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.translations') }
          </option>
          <option
            value="company-and-office"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.company-and-office') }
          </option>
          <option
            value="repair-and-service"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.repair-and-service') }
          </option>
          <option
            value="housework"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.housework') }
          </option>
          <option
            value="tutoring"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.tutoring') }
          </option>
          <option
            value="bands-and-music"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.bands-and-music') }
          </option>
          <option
            value="others"
            className="input-select__item-option"
          >
            { t('components.UI.categorySelect.categoryOptions.others') }
          </option>
        </select>
        <div className="input-select__errorMessage">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate()(CategorySelect);
