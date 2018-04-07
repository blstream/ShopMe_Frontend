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
      categories: [],
    };

    this.checkValidity = this.checkValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}/categories`)
      .then(response => (response.json()))
      .then(categories => this.setState({ categories }));
  }

  checkValidity() {
    const { t } = this.props;
    const isValid = true;

    if (
      this.state.value === '' &&
      this.state.isRequired
    ) {
      this.setState({ errorMessage: t('components.UI.categorySelect.errorEmptyField') });
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
    const className = 'input-select__item-option';

    return (
      <label
        htmlFor={this.props.name}
      >
        {t('components.UI.categorySelect.name')}
        <select
          className="input-select"
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required={this.props.required}
          onChange={this.handleChange}
        >
          <option disabled />

          {this.state.categories.map((category, index) => (
            <option
              key={index.toString()}
              value={category.name}
              className={className}
            >
              {(t(`components.UI.categorySelect.categoryOptions.${category.name}`))}
            </option>
          ))}
        </select>
        <div className="input-select__errorMessage">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate('translations', { withRef: true })(CategorySelect);
