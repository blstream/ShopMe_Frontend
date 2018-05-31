const validator = {

  isRequired(required, value) {
    return (value.trim() === '' && required) ? 'helpers.validator.errorEmptyField' : undefined;
  },

  hasMinLength(minLength, value) {
    return value.trim().length < minLength ? 'helpers.validator.errorMinLength' : undefined;
  },

  useOnlyAlpha(value) {
    const pattern = /^[A-ZĄĘĆŁŃÓŚŹŻ]*$/i;
    return !pattern.test(value) ? 'helpers.validator.errorOnlyAlpha' : undefined;
  },

  useOnlyLegalCharacters(pattern, value) {
    return !pattern.test(value) ? 'helpers.validator.errorIllegalCharacters' : undefined;
  },

  useOnlyLegalCharactersForNipCode(value) {
    const pattern = /^\d+(-\d+)*$/;
    return !pattern.test(value) ? 'helpers.validator.errorIllegalCharacters' : undefined;
  },

  useOnlyLegalCharactersForZipCode(value) {
    const pattern = /^(?:(?=\S{6}$)\d*[-*]\d*)$/;
    return !pattern.test(value) ? 'helpers.validator.errorIllegalCharacters' : undefined;
  },

  checkFormatNipCode(value) {
    const pattern = /^\d{3}-(\d{3}-\d{2}|\d{2}-\d{3})-\d{2}$/;
    return !pattern.test(value) ? 'helpers.validator.errorFormatNipCode' : undefined;
  },

  checkFormatZipCode(value) {
    const pattern = /^\S{2}-\S{3}$/;
    return !pattern.test(value) ? 'helpers.validator.errorFormatZipCode' : undefined;
  },

  checkHouseNumberFormat(value) {
    const pattern = /^\d+([a-zA-z]?)?(\/?\d+([a-zA-z]?)?)?$/;
    return !pattern.test(value) ? 'helpers.validator.errorFormatHouseNumber' : undefined;
  },

  mustUseAlpha(value) {
    const pattern = /^[^A-ZĄĘĆŁŃÓŚŹŻ]*$/i;
    return pattern.test(value) ? 'helpers.validator.errorIllegalCharacters' : undefined;
  },

  useOnlyNumeric(value) {
    const pattern = /^[0-9]+$/i;
    return !pattern.test(value) ? 'helpers.validator.errorOnlyNumeric' : undefined;
  },

  isValidEmail(value) {
    const pattern = /^\S+@\S+\.\S+$/;
    return !pattern.test(value) ? 'helpers.validator.errorEmailRegex' : undefined;
  },

  isChecked(checked) {
    return !checked ? 'helpers.validator.errorEmptyField' : undefined;
  },

  mustUse(pattern, value) {
    return !pattern.test(value) ? 'helpers.validator.errorPasswordRequirements' : undefined;
  },

  validateNameInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(3, value) ||
      validator.useOnlyAlpha(value) ||
      undefined;
  },

  validateSurnameInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(2, value) ||
      validator.useOnlyLegalCharacters(/^[A-ZĄĘĆŁŃÓŚŹŻ-\s]*$/i, value) ||
      validator.mustUseAlpha(value) ||
      undefined;
  },

  validateEmailInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.isValidEmail(value) ||
      undefined;
  },

  validateTextInput(required, value) {
    return validator.isRequired(required, value) ||
      undefined;
  },

  validateCheckbox(checked) {
    return validator.isChecked(checked) ||
      undefined;
  },

  validateAddOfferTitle(required, value) {
    return validator.isRequired(required, value) ||
    validator.hasMinLength(2, value) ||
    validator.useOnlyLegalCharacters(/^[A-ZĄĘĆŁŃÓŚŹŻ0-9\s]*$/i, value) ||
    undefined;
  },

  validatePhoneNumber(required, value) {
    return validator.isRequired(required, value) ||
    validator.useOnlyNumeric(value) ||
    validator.hasMinLength(9, value) ||
    undefined;
  },

  validateCity(required, value) {
    return validator.isRequired(required, value) ||
    validator.useOnlyLegalCharacters(/^[A-ZĄĘĆŁŃÓŚŹŻ-\s]+$/i, value) ||
    validator.mustUseAlpha(value) ||
    undefined;
  },

  validatePassword(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(8, value) ||
      validator.mustUse(/[A-Z]+/, value) ||
      validator.mustUse(/[0-9]+/, value) ||
    undefined;
  },

  validateBankAccount(required, value) {
    return validator.isRequired(required, value) ||
      validator.useOnlyNumeric(value) ||
      validator.hasMinLength(26, value) ||
      undefined;
  },

  validateStreet(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(3, value) ||
      validator.mustUseAlpha(value) ||
      undefined;
  },

  validateCompanyName(required, value) {
    return validator.isRequired(required, value) ||
      validator.mustUseAlpha(value) ||
      undefined;
  },

  validateNip(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(13, value) ||
      validator.checkFormatNipCode(value) ||
      validator.useOnlyLegalCharactersForNipCode(value) ||
      undefined;
  },

  validateZipCode(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(6, value) ||
      validator.checkFormatZipCode(value) ||
      validator.useOnlyLegalCharactersForZipCode(value) ||
      undefined;
  },

  validateHouseNumber(required, value) {
    return validator.isRequired(required, value) ||
      validator.checkHouseNumberFormat(value) ||
      undefined;
  },
};

export default validator;
