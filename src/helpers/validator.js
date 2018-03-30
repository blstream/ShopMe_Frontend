class Error {
  constructor(message) {
    this.message = message;
  }
}

export default class Validator {
  validateName (required, value) {
    if (required && value.trim() === '') {
      let error = new Error('components.UI.firstNameInput.errorEmptyField');
      return error.message;
    }
    if (value.length < 3) {
      let error = new Error('components.UI.firstNameInput.errorMinLength');
      return error.message;
    }
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(value)) {
      let error = new Error('components.UI.firstNameInput.errorOnlyAlpha');
      return error.message;
    }
  }
}
