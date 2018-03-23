import React, { Component } from 'react';
import { translate } from 'react-i18next';
import OfferInput from 'components/UI/OfferInput/OfferInput';
import PriceInput from 'components/UI/PriceInput/PriceInput';
import FirstNameInput from 'components/UI/FirstNameInput/FirstNameInput';
import EmailInput from 'components/UI/EmailInput/EmailInput';
import PhoneInput from 'components/UI/PhoneInput/PhoneInput';
import AboutMeTextarea from 'components/UI/AboutMeTextarea/AboutMeTextarea';

import './Form.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { t } = this.props;
    return (
      <form className="add-form">
        <h1 className="add-form__title">{t('components.add.form.title')}</h1>
        <fieldset className="add-form__fieldset add-form__fieldset--basic">
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <label htmlFor="add-form__offer-title" className="add-form__label">
                {t('Tytuł Oferty *')}
                <input className="add-form__input add-form__input--M" name="add-form__offer-title" required />
                <div className="add-form__error-message">Example Error</div>
              </label>
            </div>
          </div>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <label htmlFor="add-form__category" className="add-form__label">
                {t('Kategoria *')}
                <select className="add-form__input add-form__input--M" name="add-form__category" required />
                <div className="add-form__error-message">Example Error</div>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--offers">
          <h3 className="add-form__fieldset-title">{t('components.add.form.fieldsetTitle')}</h3>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferInput name="add-form__offer-basic" label={t('components.add.form.offerBasicLabel')} placeholder={t('components.add.form.offerBasicPlaceholder')} required />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput name="add-form__price-basic" placeholder={t('components.add.form.currency')} required />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferInput name="add-form__offer-additional" label={t('components.add.form.offerAdditionalLabel')} placeholder={t('components.add.form.offerAdditionalPlaceholder')} disabled />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput name="add-form__price-additional" placeholder={t('components.add.form.currency')} disabled />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferInput name="add-form__offer-extra" label={t('components.add.form.offerExtraLabel')} placeholder={t('components.add.form.offerExtraPlaceholder')} disabled />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput name="add-form__price-extra" placeholder={t('components.add.form.currency')} disabled />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--about">
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <FirstNameInput name="add-form__user-name" isRequired="true" />
            </div>
            <div className="add-form__fieldset-item">
              <EmailInput name="add-form__user-email" isRequired="true" />
            </div>
            <div className="add-form__fieldset-item">
              <PhoneInput name="add-form__user-telephone" isRequired="true" />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <AboutMeTextarea name="add-form__user-about" isRequired="true" />
            </div>
            <div className="add-form__fieldset-item add-form__fieldset-item--button">
              <button className="add-form__submit" type="submit">{t('Dodaj Ofertę')}</button>
            </div>
          </div>
          <p className="add-form__caption">{t('components.add.form.caption')}</p>
        </fieldset>
      </form>
    );
  }
}

export { AddForm };
export default translate()(AddForm);
