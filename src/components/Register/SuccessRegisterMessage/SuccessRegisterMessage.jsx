import React from 'react';
import { translate } from 'react-i18next';
import LoginButton from 'components/UI/LoginButton/LoginButton';

import './SuccessRegisterMessage.css';

const SuccessRegisterMessage = props => (
  <section className="success-register-message__main-wrapper">
    <div className="success-register-message__text-wrapper">
      <h1 className="success-register-message__text success-register-message__text--green">
        {props.t('components.register.successRegisterMessage')}
      </h1>
      <LoginButton />
    </div>
  </section>
);

export { SuccessRegisterMessage };
export default translate()(SuccessRegisterMessage);
