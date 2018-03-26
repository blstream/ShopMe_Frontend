import React, { Component } from 'react';
import { translate } from 'react-i18next';

import TitleInput from 'components/UI/TitleInput/TitleInput';
import CategorySelect from 'components/UI/CategorySelect/CategorySelect';
import OfferTextarea from 'components/UI/OfferTextarea/OfferTextarea';
import PriceInput from 'components/UI/PriceInput/PriceInput';
import FirstNameInput from 'components/UI/FirstNameInput/FirstNameInput';
import EmailInput from 'components/UI/EmailInput/EmailInput';
import PhoneInput from 'components/UI/PhoneInput/PhoneInput';
import AboutMeTextarea from 'components/UI/AboutMeTextarea/AboutMeTextarea';

import './Form.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerAdditionalDisabled: true,
      offerExtraDisabled: true,
    };

    this.activateOfferAdditional = this.activateOfferAdditional.bind(this);
    this.activateOfferExtra = this.activateOfferExtra.bind(this);
    this.checkFormValidity = this.checkFormValidity.bind(this);
  }

  getInputReferences() {
    const titleInput = this.titleInput;
    const categorySelect = this.categorySelect;

    const basicArea = this.basicArea;
    const basicPrice = this.basicPrice;

    const additionalArea = this.additionalArea;
    const additionalPrice = this.additionalPrice;

    const extraArea = this.extraArea;
    const extraPrice = this.extraPrice;

    const nameInput = this.nameInput;
    const emailInput = this.emailInput;
    const phoneInput = this.phoneInput;
    const aboutMeArea = this.aboutMeArea;

    return [
      titleInput,
      categorySelect,
      basicArea,
      basicPrice,
      additionalArea,
      additionalPrice,
      extraArea,
      extraPrice,
      nameInput,
      emailInput,
      phoneInput,
      aboutMeArea,
    ];
  }

  activateOfferAdditional() {
    if (this.state.offerAdditionalDisabled) {
      this.setState({ offerAdditionalDisabled: false });
    }
  }

  activateOfferExtra() {
    if (this.state.offerExtraDisabled) {
      this.setState({ offerExtraDisabled: false });
    }
  }

  checkFormValidity(submit) {
    submit.preventDefault();

    let isFormValid = true;
    const refs = this.getInputReferences();

    for (let i = 0; i < refs.length; i += 1) {
      if (!refs[i].getWrappedInstance().checkValidity()) {
        isFormValid = false;
      }
    }

    if (isFormValid) {
      const data = {
        title: `${refs[0].getWrappedInstance().state.value}`,
        category: {
          id: `${refs[1].getWrappedInstance().state.value.id}`,
          name: `${refs[1].getWrappedInstance().state.value.name}`,
        },
        baseDescription: `${refs[2].getWrappedInstance().state.value}`,
        basePrice: refs[3].getWrappedInstance().state.value,
        extendedDescription: `${refs[4].getWrappedInstance().state.value}`,
        extendedPrice: refs[5].getWrappedInstance().state.value,
        extraDescription: `${refs[6].getWrappedInstance().state.value}`,
        extraPrice: refs[7].getWrappedInstance().state.value,
        user: {
          name: `${refs[8].getWrappedInstance().state.value}`,
          email: `${refs[9].getWrappedInstance().state.value}`,
          phoneNumber: `${refs[10].getWrappedInstance().state.value}`,
          additionalInfo: `${refs[11].getWrappedInstance().state.value}`,
        },
      };

      const myHeaders = new Headers({
        'Content-Type': 'application/json',
      });

      const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
      };

      const url = 'https://patronage2018.intive-projects.com/api/offers';

      fetch(url, myInit)
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success', response));
    }
  }

  render() {
    const { t } = this.props;
    return (
      <form
        id="add-offer-form"
        className="add-form"
        onSubmit={this.checkFormValidity}
        noValidate
      >
        <fieldset className="add-form__fieldset add-form__fieldset--basic">
          <h1 className="add-form__title">{t('components.add.form.title')}</h1>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <TitleInput
                name="offer-title"
                ref={(v) => { this.titleInput = v; }}
                label={t('components.UI.TitleInput.name')}
                required
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <CategorySelect
                name="offer-category"
                ref={(v) => { this.categorySelect = v; }}
                label={t('components.UI.TitleInput.name')}
                required
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--offers">
          <h3 className="add-form__fieldset-title">{t('components.add.form.fieldsetTitle')}</h3>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offer-base-description"
                ref={(v) => { this.basicArea = v; }}
                label={t('components.add.form.offerBasicLabel')}
                placeholder={t('components.add.form.offerBasicPlaceholder')}
                onOfferBasicChange={this.activateOfferAdditional}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer-base-price"
                ref={(v) => { this.basicPrice = v; }}
                placeholder={t('components.add.form.currency')}
                required
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offer-extended-description"
                ref={(v) => { this.additionalArea = v; }}
                label={t('components.add.form.offerAdditionalLabel')}
                placeholder={t('components.add.form.offerAdditionalPlaceholder')}
                onOfferAdditionalChange={this.activateOfferExtra}
                disabled={this.state.offerAdditionalDisabled}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer-extended-price"
                ref={(v) => { this.additionalPrice = v; }}
                placeholder={t('components.add.form.currency')}
                disabled={this.state.offerAdditionalDisabled}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offer-extra-description"
                ref={(v) => { this.extraArea = v; }}
                label={t('components.add.form.offerExtraLabel')}
                placeholder={t('components.add.form.offerExtraPlaceholder')}
                disabled={this.state.offerExtraDisabled}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer-extra-price"
                ref={(v) => { this.extraPrice = v; }}
                placeholder={t('components.add.form.currency')}
                disabled={this.state.offerExtraDisabled}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--about">
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <FirstNameInput
                name="offer-user-name"
                ref={(v) => { this.nameInput = v; }}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <EmailInput
                name="offer-user-email"
                ref={(v) => { this.emailInput = v; }}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <PhoneInput
                name="offer-user-phone-number"
                ref={(v) => { this.phoneInput = v; }}
                required
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <AboutMeTextarea
                name="offer-user-additional-info"
                ref={(v) => { this.aboutMeArea = v; }}
              />
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
