import React from 'react';
import { translate } from 'react-i18next';
import './AdditionalInfo.css';

const AdditionalInfo = props => (
  <div className="offer-details__additional-info">
    <h3 className="offer-details__additional-info--header">{props.t('components.offerDetails.aboutMe')}</h3>
    <p className="offer-details__additional-info--text">
      {props.additionalInfo}
    </p>
  </div>
);

export { AdditionalInfo };
export default translate()(AdditionalInfo);
