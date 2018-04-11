import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.validator = new Validator();
  }
  render() {
    return (
      <GenericInput
        type={this.props.type}
        name={this.props.name}
        label={this.props.label}
        disabled={this.props.disabled}
        required={this.props.required}
        size={this.props.size}
        color={this.props.color}
        maxLength={this.props.maxLength}
        validation={this.validator.validateTextInput}
      />
    );
  }
}

export { TextInput };
export default translate('translations', { withRef: true })(TextInput);
