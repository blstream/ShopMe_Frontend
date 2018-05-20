import React, { Component } from 'react';
import { translate } from 'react-i18next';
import validator from 'helpers/validator';

import OfferTextarea from 'components/Add/Form/OfferTextarea/OfferTextarea';
import PriceInput from 'components/Add/Form/PriceInput/PriceInput';
import AboutMeTextarea from 'components/Add/Form/AboutMeTextarea/AboutMeTextarea';
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
      isCityDisabled: true,
      errorMessage: false,
      doValidate: undefined,
      isFormValid: undefined,
      inputsValue: {
        offerTitle: undefined,
        offerCategory: undefined,
        offerBaseDescription: undefined,
        offerBasePrice: undefined,
        offerExtendedDescription: undefined,
        offerExtendedPrice: undefined,
        offerExtraDescription: undefined,
        offerExtraPrice: undefined,
        offerUserName: undefined,
        offerEmail: undefined,
        offerPhone: undefined,
        offerVoivodeship: undefined,
        offerVoivodeshipId: undefined,
        offerCity: undefined,
        offerUserAdditionalInfo: undefined,
      },
      inputsValidationResult: {
        offerTitle: undefined,
        offerCategory: undefined,
        offerBaseDescription: undefined,
        offerBasePrice: undefined,
        offerExtendedDescription: undefined,
        offerExtendedPrice: undefined,
        offerExtraDescription: undefined,
        offerExtraPrice: undefined,
        offerUserName: undefined,
        offerEmail: undefined,
        offerPhone: undefined,
        offerVoivodeship: undefined,
        offerCity: undefined,
        offerUserAdditionalInfo: undefined,
      },
    };

    this.setFieldStateValue = this.setFieldStateValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
    this.setCityEnable = this.setCityEnable.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.checkIsFormValid = this.checkIsFormValid.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setFormState = this.setFormState.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isFormValid) {
      this.gatherFormData();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ doValidate: true });
  }

  setFieldStateValue(field, value) {
    if (this.state[field] !== value) {
      this.setState({ [field]: value });
    }
  }

  setCityEnable() {
    this.setState({ isCityDisabled: false });
  }

  setFormState(obj, key, val, callback) {
    this.setState(prevState => ({
      ...prevState,
      doValidate: undefined,
      [obj]: {
        ...prevState[obj],
        [key]: val,
      },
    }), callback);
  }

  setIsValid(name, val) {
    this.setFormState('inputsValidationResult', name, val, this.checkIsFormValid);
  }

  setValue(name, val) {
    this.setFormState('inputsValue', name, val);
  }

  checkIsFormValid() {
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const isFormIncludesErrors = Object.values(inputsValidationResult).includes(false);

    this.setState({ errorMessage: isFormIncludesErrors, isFormValid: !isFormIncludesErrors });
  }

  gatherFormData() {
    this.setState({ isFormValid: undefined });

    const inputsValue = Object.assign({}, this.state.inputsValue);
    const formData = {
      title: inputsValue.offerTitle,
      category: {
        name: inputsValue.offerCategory,
      },
      baseDescription: inputsValue.offerBaseDescription,
      basePrice: AddForm.getFormattedPrice(inputsValue.offerBasePrice),
      user: {
        name: inputsValue.offerUserName,
        email: inputsValue.offerEmail,
        phoneNumber: inputsValue.offerPhone,
        voivodeship: {
          id: inputsValue.offerVoivodeshipId,
          name: inputsValue.offerVoivodeship,
        },
        city: inputsValue.offerCity,
      },
    };

    if (inputsValue.offerUserAdditionalInfo) {
      formData.user.additionalInfo = inputsValue.offerUserAdditionalInfo;
    }

    if (inputsValue.offerExtendedDescription) {
      formData.extendedDescription = inputsValue.offerExtendedDescription;
      formData.extendedPrice = AddForm.getFormattedPrice(inputsValue.offerExtendedPrice);
    }

    if (inputsValue.offerExtraDescription) {
      formData.extraDescription = inputsValue.offerExtraDescription;
      formData.extraPrice = AddForm.getFormattedPrice(inputsValue.offerExtraPrice);
    }

    this.sendFormData(formData);
  }

  sendFormData(data) {
    this.props.fetchData(data);
  }

  render() {
    const { t } = this.props;
    const { errorMessage } = this.state;
    return (
      <form
        className="add-form"
        onSubmit={this.onSubmit}
        noValidate
      >
        <fieldset className="add-form__fieldset add-form__fieldset--basic">
          <h1 className="add-form__title">{t('components.add.form.title')}</h1>
          {errorMessage && <p className="add-form__error">{t('components.add.form.errorMessage')}</p>}
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic add-form__fieldset-item--margin-top">
              <GenericInput
                type="text"
                name="offerTitle"
                label={t('components.add.form.name')}
                labelClassName="add-form_label"
                spanClassName="add-form_span--inline"
                inputClassName="input-title"
                errorClassName="input-title__errorMessage"
                maxLength={30}
                required
                validation={validator.validateAddOfferTitle}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__item add-form__item--input">
              <GenericSelect
                name="offerCategory"
                selectData={this.props.categories}
                selectNamePath="components.UI.categorySelect.name"
                selectErrorPath="components.UI.categorySelect.errorEmptyField"
                selectOptionsPath="components.UI.categorySelect.categoryOptions"
                selectClassName="input-select input-select--gray"
                errorClassName="input-select__errorMessage"
                labelClassName="input__wrapper--relative"
                required
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--offers">
          <h3 className="add-form__fieldset-title">{t('components.add.form.fieldsetTitle')}</h3>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offerBaseDescription"
                label={t('components.add.form.offerBaseLabel')}
                placeholder={t('components.add.form.offerBasePlaceholder')}
                offerExtraFilled={this.state.offerExtraFilled}
                onChange={this.setFieldStateValue}
                required
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offerBasePrice"
                required
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offerExtendedDescription"
                label={t('components.add.form.offerExtendedLabel')}
                placeholder={t('components.add.form.offerExtendedPlaceholder')}
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtendedDisabled}
                required={this.state.offerExtendedRequired}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offerExtendedPrice"
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtendedDisabled}
                required={this.state.priceExtendedRequired}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <OfferTextarea
                name="offerExtraDescription"
                label={t('components.add.form.offerExtraLabel')}
                placeholder={t('components.add.form.offerExtraPlaceholder')}
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtraDisabled}
                required={this.state.offerExtraRequired}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offerExtraPrice"
                onChange={this.setFieldStateValue}
                disabled={this.state.offerExtraDisabled}
                required={this.state.priceExtraRequired}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="add-form__fieldset add-form__fieldset--about">
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offerUserName"
                label={t('components.add.form.firstName')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                errorClassName="input__error-message--yellow"
                maxLength={20}
                required
                validation={validator.validateNameInput}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offerEmail"
                label={t('components.add.form.email')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                errorClassName="input__error-message--yellow"
                required
                validation={validator.validateEmailInput}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offerPhone"
                label={t('components.add.form.phone')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                errorClassName="input__error-message--yellow"
                maxLength={10}
                required
                validation={validator.validatePhoneNumber}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__item add-form__item--input">
              <GenericSelect
                name="offerVoivodeship"
                label={t('components.UI.voivodeship.name')}
                selectData={this.props.voivodeships}
                selectNamePath="components.UI.voivodeship.name"
                selectErrorPath="components.UI.categorySelect.errorEmptyField"
                selectOptionsPath="components.UI.voivodeship.list"
                spanClassName="select_span--block"
                labelClassName=".select_span--yellow"
                selectClassName="input-select input-select--yellow"
                selectItemClassName="input-select__item-option--yellow"
                errorClassName="input-select__errorMessage input-select__errorMessage2"
                disableChange={this.setCityEnable}
                required
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__fieldset-item">
              <GenericInput
                type="text"
                name="offerCity"
                label={t('components.add.form.city')}
                labelClassName="add-form__label add-form__label--yellow"
                spanClassName="add-form_span--block"
                inputClassName="add-form__input add-form__input--S add-form__input--yellow"
                inputClassNameDisabled="input--yellow-disabled"
                errorClassName="input__error-message--yellow"
                disabled={this.state.isCityDisabled}
                maxLength={50}
                required
                validation={validator.validateCity}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <AboutMeTextarea
                name="offerUserAdditionalInfo"
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                setValue={this.setValue}
              />
            </div>
            <div className="add-form__item add-form__item--button">
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
