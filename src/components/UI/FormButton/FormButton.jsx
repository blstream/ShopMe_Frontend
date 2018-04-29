import React from 'react';
import PropTypes from 'prop-types';

import './FormButton.css';

const FormButton = props => (
  <input
    type="submit"
    className="form__button"
    id={props.id}
    value={props.value}
  />
);

FormButton.defaultProps = {
  id: '',
  value: '',
};

FormButton.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

export default FormButton;
