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
      offerCategoryId: undefined,
      offerVoivodeshipId: undefined,
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
    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.gatherFormData = this.gatherFormData.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
    this.setCityEnable = this.setCityEnable.bind(this);
    this.setIsValid = this.setIsValid.bind(this);
    this.checkIsFormValid = this.checkIsFormValid.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isFormValid) {
      this.gatherFormData(this.state);
    }
  }

  setFieldStateValue(field, value) {
    if (this.state[field] !== value) {
      this.setState({ [field]: value });
    }
  }

  setCityEnable() {
    this.setState({ isCityDisabled: false });
  }

  setIsValid(inputName, inputValue, inputIsValid) {
    if (inputIsValid) {
      this.setState(prevState => ({
        ...prevState,
        doValidate: undefined,
        inputsValue: {
          ...prevState.inputsValue,
          [inputName]: inputValue,
        },
        inputsValidationResult: {
          ...prevState.inputsValidationResult,
          [inputName]: inputIsValid,
        },
      }), this.checkIsFormValid);
    } else {
      this.setState(prevState => ({
        ...prevState,
        doValidate: undefined,
        inputsValue: {
          ...prevState.inputsValue,
          [inputName]: false,
        },
        inputsValidationResult: {
          ...prevState.inputsValidationResult,
          [inputName]: false,
        },
      }));
    }
  }

  checkFormValidity(e) {
    e.preventDefault();
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const inputsValue = Object.assign({}, this.state.inputsValue);

    Object.keys(inputsValidationResult).forEach((key) => {
      inputsValidationResult[key] = undefined;
    });

    Object.keys(inputsValue).forEach((key) => {
      inputsValue[key] = undefined;
    });

    this.setState({
      doValidate: true, inputsValidationResult, inputsValue,
    });
  }

  checkIsFormValid() {
    const inputsValidationResult = Object.assign({}, this.state.inputsValidationResult);
    const isFormIncludesErrors = Object.values(inputsValidationResult).includes(false);

    this.setState({ errorMessage: isFormIncludesErrors, isFormValid: !isFormIncludesErrors });
  }


  gatherFormData(state) {
    this.setState({ isFormValid: undefined });

    const inputsValue = Object.assign({}, state.inputsValue);
    const formData = {
      category: {},
      user: {
        voivodeship: {},
      },
    };

    formData.title = inputsValue.offerTitle;
    formData.category.id = state.offerCategoryId;
    formData.category.name = inputsValue.offerCategory;
    formData.baseDescription = inputsValue.offerBaseDescription;
    formData.basicPrice = AddForm.getFormattedPrice(inputsValue.offerBasePrice);
    formData.user.name = inputsValue.offerUserName;
    formData.user.email = inputsValue.offerEmail;
    formData.user.phoneNumber = inputsValue.offerPhone;
    formData.user.voivodeship.id = state.offerVoivodeshipId;
    formData.user.voivodeship.name = inputsValue.offerVoivodeship;
    formData.user.city = inputsValue.offerCity;

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
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
    });

    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    };

    const url = `${process.env.REACT_APP_API}/offers`;

    this.props.fetchData(url, myInit);
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
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper--basic">
            <div className="add-form__fieldset-item add-form__fieldset-item--basic">
              <GenericSelect
                name="offerCategory"
                endpoint="categories"
                selectNamePath="components.UI.categorySelect.name"
                selectErrorPath="components.UI.categorySelect.errorEmptyField"
                selectOptionsPath="components.UI.categorySelect.categoryOptions"
                selectClassName="input-select input-select--gray"
                errorClassName="input-select__errorMessage"
                labelClassName="input__wrapper--relative"
                required
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
                getSelectedId={this.setFieldStateValue}
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
              />
            </div>
            <div className="add-form__fieldset-item">
              <PriceInput
                name="offerBasePrice"
                required
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
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
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item">
              <GenericSelect
                name="offerVoivodeship"
                label={t('components.UI.voivodeship.name')}
                endpoint="voivodeships"
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
                getSelectedId={this.setFieldStateValue}
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
                maxLength={30}
                required
                validation={validator.validateCity}
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
              />
            </div>
          </div>
          <div className="add-form__fieldset-wrapper">
            <div className="add-form__fieldset-item add-form__fieldset-item--textarea">
              <AboutMeTextarea
                name="offerUserAdditionalInfo"
                onValidate={this.state.doValidate}
                doValidate={this.setIsValid}
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
