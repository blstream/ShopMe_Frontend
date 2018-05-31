import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './AllScreenError.css';

const AllScreenError = props =>
  (
    <section className="app-error__container">
      <img
        className="app-error__img"
        src={`${process.env.PUBLIC_URL}/assets/images/errors/${props.errorImg}.png`}
        alt=""
      />
      { props.errorStatus &&
        <h2 className="app-error__response-code">
          {props.errorStatus}
        </h2>
      }
      <p className="app-error__response-message">
        {props.t(`${props.message}`)}
      </p>
      { props.forbidden &&
        <p className="app-error__response-message">
          <Link href="/login" to="/login" className="forbidden__login-link">{props.t('components.forbidden.link')}</Link>
        </p>
      }
    </section>
  );

AllScreenError.defaultProps = {
  message: 'components.errorMessage.text',
  errorImg: 'fatalError',
};
export { AllScreenError };
export default translate()(AllScreenError);
