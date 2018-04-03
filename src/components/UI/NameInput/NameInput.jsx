import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.validator = new Validator();
  }
  render() {
    return (
      <GenericInput
        type="text"
        name={this.props.name}
        label={this.props.label}
        disabled={this.props.disabled}
        required={this.props.required}
        size={this.props.size}
        color={this.props.color}
        maxLength={this.props.maxLength}
        validation={this.validator.validateName}
      />
    );
  }
}

export { NameInput };
export default translate('translations', { withRef: true })(NameInput);
