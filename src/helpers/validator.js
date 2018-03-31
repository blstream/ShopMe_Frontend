class Error {
  constructor(message) {
    this.message = message;
  }
}

export default class Validator {
  validateName(required, value) {
    if (required && value.trim() === '') {
      const error = new Error('components.UI.firstNameInput.errorEmptyField');
      return error;
    }
    if (value.length < 3) {
      const error = new Error('components.UI.firstNameInput.errorMinLength');
      return error;
    }
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(value)) {
      const error = new Error('components.UI.firstNameInput.errorOnlyAlpha');
      return error;
    }
    return false;
  }
}
