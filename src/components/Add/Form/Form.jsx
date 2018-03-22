import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ExampleInput from 'components/UI/ExampleInput/ExampleInput';
import ExampleButton from 'components/UI/ExampleButton/ExampleButton';
import PriceInput from 'components/UI/PriceInput/PriceInput';
import OfferInput from 'components/UI/OfferInput/OfferInput';
import CategorySelect from 'components/UI/CategorySelect/CategorySelect';

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
        <h1 className="add-form__title">{t('Dodaj Ofertę')}</h1>
        <fieldset className="add-form__fieldset add-form__fieldset-basic">
          <div className="add-form__fieldset-basic-item">
            <label htmlFor="add-form__offer-title" className="add-form__label">{t('Tytuł Oferty *')}</label>
            <div className="add-form__input add-form__input--M">
              <ExampleInput name="add-form__offer-title" required />
            </div>
          </div>
          <div className="add-form__fieldset-basic-item">
            <label htmlFor="add-form__category" className="add-form__label">{t('components.UI.categorySelect.name')}</label>
            <div className="add-form__input add-form__input--M">
              <CategorySelect name="add-form__category" required />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset-offers">
          <h3 className="add-form__fieldset-title">{t('Zdefiniuj Oferowane Pakiety Usług')}</h3>
          <label htmlFor="add-form__offer-basic" className="add-form__label">{t('Podstawowy *')}</label>
          <div className="add-form__fieldset-item">
            <div className="add-form__input add-form__input--XL">
              <OfferInput name="add-form__offer-basic" required />
            </div>
            <label htmlFor="add-form__price-basic" className="add-form__label add-form__label--hidden">{t('Cena')}</label>
            <div className="add-form__input add-form__input--XS">
              <PriceInput name="add-form__price-basic" placeholder="zł" required />
            </div>
          </div>
          <label htmlFor="add-form__offer-additional" className="add-form__label">{t('Rozszerzony')}</label>
          <div className="add-form__fieldset-item">
            <div className="add-form__input add-form__input--XL">
              <OfferInput name="add-form__offer-additional" />
            </div>
            <label htmlFor="add-form__price-additional" className="add-form__label add-form__label--hidden">{t('Cena')}</label>
            <div className="add-form__input add-form__input--XS">
              <PriceInput name="add-form__price-additional" placeholder="zł" />
            </div>
          </div>
          <label htmlFor="add-form__offer-extra" className="add-form__label add-form__label--inactive">{t('Ekstra')}</label>
          <div className="add-form__fieldset-item">
            <div className="add-form__input add-form__input--XL add-form__input--inactive">
              <OfferInput name="add-form__offer-extra" disabled="disabled" />
            </div>
            <label htmlFor="add-form__price-extra" className="add-form__label add-form__label--hidden">{t('Cena')}</label>
            <div className="add-form__input add-form__input--XS add-form__input--inactive">
              <PriceInput name="add-form__price-extra" placeholder="zł" disabled="disabled" />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset-about">
          <div className="add-form__fieldset-item add-form__fieldset-about-item">
            <div>
              <label htmlFor="add-form__user-name" className="add-form__label add-form__label--yellow">{t('Imię *')}</label>
              <div className="add-form__input add-form__input--S add-form__input--yellow">
                <ExampleInput name="add-from__user-name" required />
              </div>
            </div>
            <div>
              <label htmlFor="add-form__user-email" className="add-form__label add-form__label--yellow">{t('Email *')}</label>
              <div className="add-form__input add-form__input--S add-form__input--yellow">
                <ExampleInput name="add-form__user-email" required />
              </div>
            </div>
            <div>
              <label htmlFor="add-form__user-telephone" className="add-form__label add-form__label--yellow">{t('Telefon *')}</label>
              <div className="add-form__input add-form__input--S add-form__input--yellow">
                <ExampleInput name="add-form__user-telephone" required />
              </div>
            </div>
          </div>
          <label htmlFor="add-form__user-about" className="add-form__label add-form__label--yellow">{t('O mnie')}</label>
          <div className="add-form__fieldset-item">
            <div className="add-form__input add-form__input--yellow add-form__input--L">
              <ExampleInput name="add-form__user-about" />
            </div>
            <div className="add-form__submit">
              <ExampleButton type="submit">{t('Dodaj Ofertę')}</ExampleButton>
            </div>
          </div>
          <p className="add-form__caption">{t('*Pola wymagane')}</p>
        </fieldset>
      </form>
    );
  }
}

// export { SreensAddForm };
export default translate()(AddForm);
