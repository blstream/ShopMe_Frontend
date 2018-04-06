const validator = {
  errorMessage: '',
  validateRequired(required, value) {
    if (required && value.trim() === '') {
      validator.errorMessage = 'components.UI.firstNameInput.errorEmptyField';
    }
    return false;
  },
  validateMinLength(minLength, value) {
    if (value.length < minLength) {
      validator.errorMessage = 'components.UI.firstNameInput.errorMinLength';
    }
    return false;
  },
  validatePattern(pattern, value) {
    if (!pattern.test(value)) {
      validator.errorMessage = 'components.UI.firstNameInput.errorOnlyAlpha';
    }
    return false;
  },

  validateNameInput(required, value) {
    validator.validatePattern(/^[a-zA-Z]+$/, value);
    validator.validateMinLength(3, value);
    validator.validateRequired(required, value);
    return validator.errorMessage;
  },

  validateTextInput(required, value) {
    validator.validateRequired(required, value);
    return validator.errorMessage;
  },

  validatePersonalDataConfirmCheckbox(checked) {
    if (checked === false) {
      this.errorMessage = 'components.UI.firstNameInput.errorEmptyField';
      return this.errorMessage;
    }
    return false;
  },
};

export default validator;
