import React from 'react';
import { translate } from 'react-i18next';
import './FatalError.css';

const FatalError = props =>
  (
    <section className="app-error__container">
      <img
        className="app-error__img"
        src={`${process.env.PUBLIC_URL}/assets/images/errors/${props.errorImg}.png`}
        alt=""
      />
      <h2 className="app-error__response-code">
        {props.errorStatus}
      </h2>
      <p className="app-error__response-message">
        {props.t(`${props.message}`)}
      </p>
    </section>
  );

FatalError.defaultProps = {
  message: 'components.errorMessage.text',
  errorImg: 'fatalError',
};
export { FatalError };
export default translate()(FatalError);
