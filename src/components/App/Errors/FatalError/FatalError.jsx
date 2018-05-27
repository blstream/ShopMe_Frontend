import React from 'react';
import { translate } from 'react-i18next';
import './FatalError.css';

const FatalError = props =>
  (
    <section className="app-error__container">
      <img
        className="app-error__img"
        src={`${process.env.PUBLIC_URL}/assets/images/errors/fatalError.png`}
        alt=""
      />
      <h2 className="app-error__response-code">
        {props.errorStatus}
      </h2>
      <p className="app-error__response-message">
        {props.t('components.errorMessage.text')}
      </p>
    </section>
  );
export { FatalError };
export default translate()(FatalError);
