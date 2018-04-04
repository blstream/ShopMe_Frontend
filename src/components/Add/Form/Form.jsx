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
    this.getInputReferences = this.getInputReferences.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
  }

  static resetFormInputs(refs) {
    refs.forEach((ref) => {
      ref.getWrappedInstance().resetInput();
    });
  }

  static sendFormData(data) {
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
      .then(response => console.log('Success', response.status));
  }

  static removeEmpty(obj) {
    const clearedFormData = obj;
    Object.keys(clearedFormData).forEach((key) => {
      if (obj[key] === null || obj[key] === '' || obj[key] === undefined) {
        delete clearedFormData[key];
      }
    });

    return clearedFormData;
  }

  getInputReferences() {
    return [
      this.titleInput,
      this.categorySelect,
      this.basicArea,
      this.basicPrice,
      this.extendedArea,
      this.extendedPrice,
      this.extraArea,
      this.extraPrice,
      this.nameInput,
      this.emailInput,
      this.phoneInput,
      this.aboutMeArea,
    ];
  }

  gatherFormData() {
    let basePrice = this.basicPrice.getWrappedInstance().state.value;
    let extendedPrice = this.extendedPrice.getWrappedInstance().state.value;
    let extraPrice = this.extraPrice.getWrappedInstance().state.value;

    if (basePrice !== '') {
      basePrice = basePrice.substring(0, basePrice.length - 3);
      basePrice = parseFloat(basePrice.replace(',', '.')).toFixed(2);
    }

    if (extendedPrice !== '') {
      extendedPrice = extendedPrice.substring(0, extendedPrice.length - 3);
      extendedPrice = parseFloat(extendedPrice.replace(',', '.')).toFixed(2);
    }

    if (extraPrice !== '') {
      extraPrice = extraPrice.substring(0, extraPrice.length - 3);
      extraPrice = parseFloat(extraPrice.replace(',', '.')).toFixed(2);
    }

    const allCategories = this.categorySelect.getWrappedInstance().state.categories;
    const categoryName = this.categorySelect.getWrappedInstance().state.value;
    const targetCategory = allCategories.find(category => category.name === categoryName);

    const data = {
      title: this.titleInput.getWrappedInstance().state.value,
      category: {
        id: targetCategory.id,
        name: categoryName,
      },
      baseDescription: this.basicArea.getWrappedInstance().state.value,
      basePrice,
      extendedDescription: this.extendedArea.getWrappedInstance().state.value,
      extendedPrice,
      extraDescription: this.extraArea.getWrappedInstance().state.value,
      extraPrice,
      user: {
        name: this.nameInput.getWrappedInstance().state.value,
        email: this.emailInput.getWrappedInstance().state.value,
        phoneNumber: this.phoneInput.getWrappedInstance().state.value,
        additionalInfo: this.aboutMeArea.getWrappedInstance().state.value,
      },
    };

    const formattedData = AddForm.removeEmpty(data);
    return formattedData;
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
    const refs = this.getInputReferences();
    const isRefsValid = refs.map(ref => ref.getWrappedInstance().checkValidity());

    if (!isRefsValid.includes(false)) {
      AddForm.sendFormData(this.gatherFormData());
      AddForm.resetFormInputs(refs);
    }
  }

  render() {
    const { t } = this.props;
    return (
      <form
        className="add-form"
        onSubmit={this.checkFormValidity}
        noValidate
      >
        <fieldset className="add-form__fieldset add-form__fieldset--basic">
          <h1 className="add-form__title">{t('components.add.form.title')}</h1>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic add-form__fieldset-item--margin-top">
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
                ref={(v) => { this.extendedArea = v; }}
                label={t('components.add.form.offerAdditionalLabel')}
                placeholder={t('components.add.form.offerAdditionalPlaceholder')}
                onOfferAdditionalChange={this.activateOfferExtra}
                disabled={this.state.offerAdditionalDisabled}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer-extended-price"
                ref={(v) => { this.extendedPrice = v; }}
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
