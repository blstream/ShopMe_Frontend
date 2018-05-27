import React from 'react';
import { translate } from 'react-i18next';
import './NonFatalError.css';

const NonFatalError = props =>
  (
    <div className="non-fatal-error__container">
      <img
        className="non-fatal-error__img"
        src={`${process.env.PUBLIC_URL}/assets/images/errors/nonfatalError.png`}
        alt="Non fatal error"
      />
      <span className="non-fatal-error__response-message">
        {props.t(`endpointError.${props.endpoint}.${props.errorStatus}`)}
      </span>
    </div>
  );
export { NonFatalError };
export default translate()(NonFatalError);
