export default class Validator {
  constructor() {
    this.errorMessage = '';
    this.validateName = this.validateName.bind(this);
  }

  validateName(required, value) {
    if (required && value.trim() === '') {
      this.errorMessage = 'components.UI.firstNameInput.errorEmptyField';
      return this.errorMessage;
    }
    if (value.length < 3) {
      this.errorMessage = 'components.UI.firstNameInput.errorMinLength';
      return this.errorMessage;
    }
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(value)) {
      this.errorMessage = 'components.UI.firstNameInput.errorOnlyAlpha';
      return this.errorMessage;
    }
    return false;
  }
}
