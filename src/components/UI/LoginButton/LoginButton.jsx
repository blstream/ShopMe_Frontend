import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './LoginButton.css';

const LoginButton = props => (
  <Link href="/login" to="/login" className="login-button">
    {props.isLogged ? props.t('components.UI.loginButton.labelLogged') : props.t('components.UI.loginButton.label')}
  </Link>
);

LoginButton.defaultProps = {
  isLogged: false,
};

LoginButton.propTypes = {
  isLogged: PropTypes.bool,
  // t: PropTypes.func,
};

export { LoginButton };
export default translate()(LoginButton);
