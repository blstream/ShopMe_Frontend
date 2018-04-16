import React from 'react';
import './FormButton.css';

const FormButton = props => (
  <input
    type="submit"
    className="form__button"
    id={props.id}
    value={props.value}
  />
);

export default FormButton;
