import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './LoginButton.css';

const LoginButton = props => (
  <Link href="/login" to="/login">
    <button type="button" className="login-button">
      {props.t('components.UI.loginButton.label')}
    </button>
  </Link>
);

export { LoginButton };
export default translate()(LoginButton);
