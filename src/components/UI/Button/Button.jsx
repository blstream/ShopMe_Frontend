import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '1px solid red',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
