import React from 'react';
import { translate } from 'react-i18next';
import './OfferRender.css';

const OfferRender = (props) => {
  const { t } = props;
  const baseHeader = t('components.offerDetails.baseOffer').split(' ');
  baseHeader.splice(1, 0, <br key={1} />);
  const extendedHeader = t('components.offerDetails.extendedOffer').split(' ');
  extendedHeader.splice(1, 0, <br key={2} />);
  const extraHeader = t('components.offerDetails.extraOffer').split(' ');
  extraHeader.splice(1, 0, <br key={3} />);
  return (
    <div className="offer-details">
      <h2 className="offer-details__header">{props.service.title}</h2>
      <p className="offer-details__category">{props.service.category.name}</p>
      <div className="offer-details__contact">
        <div className="offer-details__contact--container">
          <h3 className="offer-details__header-small">{t('components.offerDetails.contact')}</h3>
          <div className="offer-details__contact--container--name">{props.service.user.name}</div>
          <div className="offer-details__contact--container--email">{props.maskedEmail}
            {props.emailButton && <button className="offer-details__contact--button" onClick={props.handleUnmaskEmail}>{t('components.offerDetails.show')}</button>}
          </div>
          <div className="offer-details__contact--container--phone">{props.maskedPhone}
            {props.phoneButton && <button className="offer-details__contact--button" onClick={props.handleUnmaskPhone}>{t('components.offerDetails.show')}</button>}
          </div>
        </div>
        {props.service.user.additionalInfo &&
        <div className="offer-details__contact--additional-info">
          <h3 className="offer-details__contact--additional-info--header">{t('components.offerDetails.aboutMe')}</h3>
          <p>
            {props.service.user.additionalInfo}
          </p>
        </div>}
      </div>
      <div className="offer-details__offers">
        <div className="offer-details__offers--base">
          <h3 className="offer-details__offers--base--header">{baseHeader}</h3>
          <p className="offer-details__offers--base--description">{props.service.baseDescription}</p>
          <p className="offer-details__offers--base--price">{t('components.offerDetails.price')}: {props.service.basePrice}zł</p>
        </div>
        {props.service.extendedDescription &&
        <div className="offer-details__offers--extended">
          <h3 className="offer-details__offers--extended--header">{extendedHeader}</h3>
          <p className="offer-details__offers--extended--description">{props.service.extendedDescription}</p>
          <p className="offer-details__offers--extended--price">{t('components.offerDetails.price')}: {props.service.extendedPrice}zł</p>
        </div>}
        {props.service.extraDescription &&
        <div className="offer-details__offers--extra">
          <h3 className="offer-details__offers--extra--header">{extraHeader}</h3>
          <p className="offer-details__offers--extra--description">{props.service.extraDescription}</p>
          <p className="offer-details__offers--extra--price">{t('components.offerDetails.price')}: {props.service.extraPrice}zł</p>
        </div>}
      </div>
    </div>
  );
};

export { OfferRender };
export default translate()(OfferRender);
