import React from 'react';
import { translate } from 'react-i18next';
import './PartialScreenError.css';

const PartialScreenError = (props) => {
  let message;
  if (props.error) {
    const requestArray = props.error.response.url.split('/');
    message = requestArray[5]
      ? props.t(`endpointError.${requestArray[4]}.${props.error.method}.${requestArray[5]}.${props.error.message}`)
      : props.t(`endpointError.${requestArray[4]}.${props.error.method}.${props.error.message}`);
  } else message = props.t(props.message);

  return (
    <div className="non-fatal-error__container">
      <img
        className="non-fatal-error__img"
        src={`${process.env.PUBLIC_URL}/assets/images/errors/nonfatalError.png`}
        alt="Non fatal error"
      />
      <span className="non-fatal-error__response-message">
        {message}
      </span>
    </div>
  );
};
export { PartialScreenError };
export default translate()(PartialScreenError);
