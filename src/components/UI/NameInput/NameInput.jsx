import React from 'react';
import validator from 'helpers/validator';
import GenericInput from 'components/UI/GenericInput/GenericInput';

const NameInput = props => (
  <GenericInput
    type={props.type}
    name={props.name}
    label={props.label}
    disabled={props.disabled}
    required={props.required}
    size={props.size}
    color={props.color}
    maxLength={props.maxLength}
    validation={validator.validateNameInput}
  />
);

export default (NameInput);
