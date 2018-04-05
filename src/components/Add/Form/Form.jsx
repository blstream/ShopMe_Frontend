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
import FormButton from 'components/UI/FormButton/FormButton';

import './Form.css';

class AddForm extends Component {
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

    const url = `${process.env.REACT_APP_API}/offers/`;

    fetch(url, myInit)
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success', response.status));
  }

  static removeEmpty(object) {
    const clearedFormData = Object.assign({}, object);
    Object.keys(clearedFormData).forEach((key) => {
      if (clearedFormData[key] && typeof clearedFormData[key] === 'object') {
        clearedFormData[key] = AddForm.removeEmpty(clearedFormData[key]);
      } else if (!clearedFormData[key]) delete clearedFormData[key];
    });

    return clearedFormData;
  }

  static getFormattedPrice(price) {
    let formattedPrice = price;
    if (formattedPrice !== '') {
      formattedPrice = formattedPrice.substring(0, formattedPrice.length - 3);
      formattedPrice = parseFloat(formattedPrice.replace(',', '.'));
    }
    return formattedPrice;
  }

  constructor(props) {
    super(props);
    this.state = {
      offerExtendedDisabled: true,
      offerExtraDisabled: true,
      priceExtendedRequired: false,
      priceExtraRequired: false,
    };

    this.activateOfferExtended = this.activateOfferExtended.bind(this);
    this.deactivateOfferExtended = this.deactivateOfferExtended.bind(this);

    this.activateOfferExtra = this.activateOfferExtra.bind(this);
    this.deactivateOfferExtra = this.deactivateOfferExtra.bind(this);

    this.requirePriceExtra = this.requirePriceExtra.bind(this);
    this.disrequirePriceExtra = this.disrequirePriceExtra.bind(this);

    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.getInputReferences = this.getInputReferences.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
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
    const allCategories = this.categorySelect.getWrappedInstance().state.categories;
    const categoryName = this.categorySelect.getWrappedInstance().state.value;
    const targetCategory = allCategories.find(category => category.name === categoryName);

    const basePrice = AddForm.getFormattedPrice(this.basicPrice.getWrappedInstance().state.value);
    const extendedPrice =
      AddForm.getFormattedPrice(this.extendedPrice.getWrappedInstance().state.value);
    const extraPrice = AddForm.getFormattedPrice(this.extraPrice.getWrappedInstance().state.value);

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

    return AddForm.removeEmpty(data);
  }

  activateOfferExtended() {
    if (this.state.offerExtendedDisabled) {
      this.setState({ offerExtendedDisabled: false });
    }
  }

  deactivateOfferExtended() {
    if (!this.state.offerExtendedDisabled) {
      this.setState({ offerExtendedDisabled: true });
    }
    if (!this.state.offerExtraDisabled) {
      this.setState({ offerExtraDisabled: true });
    }
  }

  activateOfferExtra() {
    if (this.state.offerExtraDisabled) {
      this.setState({ offerExtraDisabled: false });
      this.requirePriceExtended();
    }
  }

  deactivateOfferExtra() {
    if (!this.state.offerExtraDisabled) {
      this.setState({ offerExtraDisabled: true });
    }
    this.disrequirePriceExtended();
  }

  requirePriceExtended() {
    if (!this.state.priceExtendedRequired) {
      this.setState({ priceExtendedRequired: true });
    }
  }

  requirePriceExtra() {
    if (!this.state.priceExtraRequired) {
      this.setState({ priceExtraRequired: true });
    }
  }

  disrequirePriceExtended() {
    if (this.state.priceExtendedRequired) {
      this.setState({ priceExtendedRequired: false });
    }
  }

  disrequirePriceExtra() {
    if (this.state.priceExtraRequired) {
      this.setState({ priceExtraRequired: false });
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
                name="offer__title"
                ref={(v) => { this.titleInput = v; }}
                label={t('components.UI.TitleInput.name')}
                required
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <CategorySelect
                name="offer__category"
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
                name="offer__base-description"
                ref={(v) => { this.basicArea = v; }}
                label={t('components.add.form.offerBaseLabel')}
                placeholder={t('components.add.form.offerBasePlaceholder')}
                onOfferBaseChange={this.activateOfferExtended}
                onOfferBaseReset={this.deactivateOfferExtended}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer__base-price"
                ref={(v) => { this.basicPrice = v; }}
                placeholder={t('components.add.form.currency')}
                required
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offer__extended-description"
                ref={(v) => { this.extendedArea = v; }}
                label={t('components.add.form.offerExtendedLabel')}
                placeholder={t('components.add.form.offerExtendedPlaceholder')}
                onOfferExtendedChange={this.activateOfferExtra}
                onOfferExtendedReset={this.deactivateOfferExtra}
                disabled={this.state.offerExtendedDisabled}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer__extended-price"
                ref={(v) => { this.extendedPrice = v; }}
                placeholder={t('components.add.form.currency')}
                disabled={this.state.offerExtendedDisabled}
                required={this.state.priceExtendedRequired}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offer__extra-description"
                ref={(v) => { this.extraArea = v; }}
                label={t('components.add.form.offerExtraLabel')}
                placeholder={t('components.add.form.offerExtraPlaceholder')}
                onOfferExtraChange={this.requirePriceExtra}
                onOfferExtraReset={this.disrequirePriceExtra}
                disabled={this.state.offerExtraDisabled}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer__extra-price"
                ref={(v) => { this.extraPrice = v; }}
                placeholder={t('components.add.form.currency')}
                disabled={this.state.offerExtraDisabled}
                required={this.state.priceExtraRequired}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--about">
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <FirstNameInput
                name="offer__user-name"
                ref={(v) => { this.nameInput = v; }}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <EmailInput
                name="offer__user-email"
                ref={(v) => { this.emailInput = v; }}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <PhoneInput
                name="offer__user-phone-number"
                ref={(v) => { this.phoneInput = v; }}
                required
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <AboutMeTextarea
                name="offer__user-additional-info"
                ref={(v) => { this.aboutMeArea = v; }}
              />
            </div>
            <div className="add-form__fieldset-item add-form__fieldset-item--button">
              <FormButton
                id="add-form__submit"
                type="submit"
                value={t('components.add.form.submitButton')}
              />
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
