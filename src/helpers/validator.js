const validator = {

  isRequired(required, value) {
    return (value.trim() === '' && required) ? 'components.UI.firstNameInput.errorEmptyField' : undefined;
  },

  hasMinLength(minLength, value) {
    return value.length < minLength ? 'components.UI.firstNameInput.errorMinLength' : undefined;
  },

  useOnlyAlpha(value) {
    const pattern = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/;
    return !pattern.test(value) ? 'components.UI.firstNameInput.errorOnlyAlpha' : undefined;
  },

  isChecked(checked) {
    return (!checked) ? 'components.UI.firstNameInput.errorEmptyField' : undefined;
  },

  validateNameInput(required, value) {
    return validator.isRequired(required, value) ||
      validator.hasMinLength(2, value) ||
      validator.useOnlyAlpha(value) ||
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
};

export default validator;
