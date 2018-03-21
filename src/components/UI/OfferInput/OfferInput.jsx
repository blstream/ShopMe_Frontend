import React, { Component } from 'react';
import { translate } from 'react-i18next';

import './OfferInput.css';

class OfferInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput() {
    const { required, t } = this.props;
    const empty = this.state.value.trim() === '';
    if (required && empty) this.setState({ errorMessage: t('components.UI.OfferInput.errorMessage') });
    else this.setState({ errorMessage: '' });
  }

  handleChange(e) {
    const { value } = e.target;
    if (value.length <= 500) this.setState({ value });
  }

  render() {
    return (
      <label htmlFor="this.props.name">
        <textarea
          className="input-offer"
          value={this.state.value}
          name={this.props.name}
          required={this.props.required}
          disabled={this.props.disabled}
          onChange={this.handleChange}
          onBlur={this.validateInput}
        />
        <div className="input__errorMessage">
          {this.state.errorMessage}
        </div>
      </label>
    );
  }
}

export default translate()(OfferInput);
