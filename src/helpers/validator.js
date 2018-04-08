const validator = {
  isRequired(required, value) {
    return (value.trim() === '' && required) ? 'components.UI.firstNameInput.errorEmptyField' : undefined;
  },
  hasMinLength(minLength, value) {
    return value.length < minLength ? 'components.UI.firstNameInput.errorMinLength' : undefined;
  },
  useOnlyAlpha(value) {
    const pattern = /^[a-zA-Z]+$/;
    return !pattern.test(value) ? 'components.UI.firstNameInput.errorOnlyAlpha' : undefined;
  },
  validateNameInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(3, value) ||
      validator.useOnlyAlpha(value) ||
      undefined;
  },
  validateTextInput(required, value) {
    return validator.isRequired(required, value) ||
      undefined;
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
