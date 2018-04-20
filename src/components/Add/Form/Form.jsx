import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';

import OfferTextarea from 'components/UI/OfferTextarea/OfferTextarea';
import PriceInput from 'components/UI/PriceInput/PriceInput';
import AboutMeTextarea from 'components/UI/AboutMeTextarea/AboutMeTextarea';
import FormButton from 'components/UI/FormButton/FormButton';
import GenericInput from 'components/UI/GenericInput/GenericInput';
import GenericSelect from 'components/UI/GenericSelect/GenericSelect';

import './Form.css';

class AddForm extends Component {
  static getFormattedPrice(price) {
    let formattedPrice = price;
    if (formattedPrice !== '') {
      formattedPrice = parseFloat(formattedPrice.replace(',', '.'));
    }
    return formattedPrice;
  }

  constructor(props) {
    super(props);
    this.state = {
      offerExtendedDisabled: true,
      offerExtraDisabled: true,
      offerExtendedRequired: false,
      offerExtraRequired: false,
      offerExtraFilled: false,
      priceExtendedRequired: false,
      priceExtraRequired: false,
      errorMessage: false,
    };

    this.setFieldStateValue = this.setFieldStateValue.bind(this);
    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.getInputReferences = this.getInputReferences.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
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
      this.voivodeshipSelect,
      this.cityInput,
      this.aboutMeArea,
    ];
  }

  setFieldStateValue(field, value) {
    if (this.state[field] !== value) {
      this.setState({ [field]: value });
    }
  }

  gatherFormData() {
    const allCategories = this.categorySelect.getWrappedInstance().state.selectData;
    const categoryName = this.categorySelect.getWrappedInstance().state.value;
    const targetCategory = allCategories.find(category => category.name === categoryName);

    const allVoivodeships = this.voivodeshipSelect.getWrappedInstance().state.selectData;
    const voivodeshipName = this.voivodeshipSelect.getWrappedInstance().state.value;
    const targetVoivodeship = allVoivodeships.find(category => category.name === categoryName);

    const basePrice = AddForm.getFormattedPrice(this.basicPrice.getWrappedInstance().state.value);
    const extendedPrice =
      AddForm.getFormattedPrice(this.extendedPrice.getWrappedInstance().state.value);
    const extraPrice = AddForm.getFormattedPrice(this.extraPrice.getWrappedInstance().state.value);

    const data =
    {
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
        voivodeship: {
          id: targetVoivodeship.id,
          name: voivodeshipName,
        },
        city: this.cityInput.getWrappedInstance().state.value,
        additionalInfo: this.aboutMeArea.getWrappedInstance().state.value,
      },
    };

    return data;
  }

  sendFormData(data) {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
    });

    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    };

    console.log(JSON.stringify(data));

    const url = `${process.env.REACT_APP_API}/offers`;

    this.props.fetchData(url, myInit);
  }

  checkFormValidity(e) {
    e.preventDefault();
    const refs = this.getInputReferences();
    const isRefsValid = refs.map(ref => ref.getWrappedInstance().checkValidity());
    const isFormValid = isRefsValid.includes(false);

    this.setState({ errorMessage: isFormValid });

    if (!isRefsValid.includes(false)) {
      // this.sendFormData(this.gatherFormData());
      // AddForm.resetFormInputs(refs);

      const postData = this.gatherFormData();
      this.sendFormData(postData);
    }
  }

  render() {
    const { t } = this.props;
    const { errorMessage } = this.state;
    return (
      <form
        className="add-form"
        onSubmit={this.checkFormValidity}
        noValidate
      >
        <fieldset className="add-form__fieldset add-form__fieldset--basic">
          <h1 className="add-form__title">{t('components.add.form.title')}</h1>
          {errorMessage && <p className="add-form__error">{t('components.add.form.errorMessage')}</p>}
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic add-form__fieldset-item--margin-top">
              <GenericInput
                type="text"
                name="offer__title"
                label={t('components.UI.titleInput.name')}
                labelClassName="add-form_label"
                spanClassName="add-form_span--inline"
                inputClassName="input-title"
                errorClassName="input-title__errorMessage"
                maxLength="30"
                required
                validation={validator.validateAddOfferTitle}
                ref={(v) => { this.titleInput = v; }}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <GenericSelect
                name="offer__category"
                ref={(v) => { this.categorySelect = v; }}
                label={t('components.UI.TitleInput.name')}
                endpoint="categories"
                selectNamePath="components.UI.categorySelect.name"
                selectErrorPath="components.UI.categorySelect.errorEmptyField"
                selectOptionsPath="components.UI.categorySelect.categoryOptions"
                errorClassName="input-select__errorMessage input-select__errorMessage2"
                labelClassName="input__wrapper2"
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
                offerExtraFilled={this.state.offerExtraFilled}
                onChange={this.setFieldStateValue}
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer__base-price"
                ref={(v) => { this.basicPrice = v; }}
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
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtendedDisabled}
                required={this.state.offerExtendedRequired}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer__extended-price"
                ref={(v) => { this.extendedPrice = v; }}
                onChange={this.setFieldStateValue}
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
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtraDisabled}
                required={this.state.offerExtraRequired}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offer__extra-price"
                ref={(v) => { this.extraPrice = v; }}
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtraDisabled}
                required={this.state.priceExtraRequired}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--about">
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offer__user-name"
                label={t('components.UI.firstNameInput.name')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                maxLength="20"
                required
                validation={validator.validateNameInput}
                ref={(v) => { this.nameInput = v; }}
              />
            </div>
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offer__email"
                label={t('components.UI.emailInput.name')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                required
                validation={validator.validateEmailInput}
                ref={(v) => { this.emailInput = v; }}
              />
            </div>
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offer__phone"
                label={t('components.UI.phoneInput.name')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                maxLength="10"
                required
                validation={validator.validatePhoneNumber}
                ref={(v) => { this.phoneInput = v; }}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <GenericSelect
                name="offer__voivodeship"
                ref={(v) => { this.voivodeshipSelect = v; }}
                label={t('components.UI.voivodeship.name')}
                endpoint="categories"
                selectNamePath="components.UI.voivodeship.name"
                selectErrorPath="components.UI.categorySelect.errorEmptyField"
                selectOptionsPath="components.UI.voivodeship.list"
                spanClassName="select_span--block"
                labelClassName="select_span--block2"
                selectClassName="input-select--yellow"
                selectItemClassName="input-select__item-option--yellow"
                errorClassName="input-select__errorMessage input-select__errorMessage2"
                required
              />
            </div>
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offer__city"
                label={t('components.add.form.city')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                maxLength="30"
                required
                validation={validator.validateCity}
                ref={(v) => { this.cityInput = v; }}
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
export default translate('translations', { withRef: true })(AddForm);
