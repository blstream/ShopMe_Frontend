import validator from './validator';

describe('validator', () => {
  describe('isRequired', () => {
    it('returns error message if value is empty and required is true', () => {
      const value = '';
      const required = true;
      expect(validator.isRequired(required, value)).not.toEqual(undefined);
    });

    it('returns undefined if value is empty and required is false', () => {
      const value = '';
      const required = false;
      expect(validator.isRequired(required, value)).toEqual(undefined);
    });

    it('returns undefined if value is not empty and required is true', () => {
      const value = 'test';
      const required = true;
      expect(validator.isRequired(required, value)).toEqual(undefined);
    });

    it('returns undefined if value is not empty and required is false', () => {
      const value = 'test';
      const required = false;
      expect(validator.isRequired(required, value)).toEqual(undefined);
    });
  });

  describe('hasMinLength', () => {
    it('returns error message if value length is smaller than minLength', () => {
      const value = '12';
      const minLength = 3;
      expect(validator.hasMinLength(minLength, value)).not.toEqual(undefined);
    });

    it('returns undefined if value length is equal minLength', () => {
      const value = '123';
      const minLength = 3;
      expect(validator.hasMinLength(minLength, value)).toEqual(undefined);
    });

    it('returns undefined if value length is bigger than minLength', () => {
      const value = '1234';
      const minLength = 3;
      expect(validator.hasMinLength(minLength, value)).toEqual(undefined);
    });
  });

  describe('useOnlyAlpha', () => {
    it('returns error message if value use special characters', () => {
      const value = 'test!';
      expect(validator.useOnlyAlpha(value)).not.toEqual(undefined);
    });

    it('returns undefined if value use no special characters', () => {
      const value = 'test';
      expect(validator.useOnlyAlpha(value)).toEqual(undefined);
    });
  });

  describe('useOnlyLegalCharacters', () => {
    it('returns error message if value use illegal characters', () => {
      const value = 'test!';
      const pattern = /^[A-Z]*$/i;
      expect(validator.useOnlyLegalCharacters(pattern, value)).not.toEqual(undefined);
    });

    it('returns undefined if value use no illegal characters', () => {
      const value = 'test';
      const pattern = /^[A-Z]*$/i;
      expect(validator.useOnlyLegalCharacters(pattern, value)).toEqual(undefined);
    });
  });

  describe('mustUseAlpha', () => {
    it('returns error message if value use no alphabetic characters', () => {
      const value = '!';
      expect(validator.mustUseAlpha(value)).not.toEqual(undefined);
    });

    it('returns undefined if value use any alphabetic characters', () => {
      const value = 'test!';
      expect(validator.mustUseAlpha(value)).toEqual(undefined);
    });
  });

  describe('isValidEmail', () => {
    it('returns error message if value is an incorrect email address', () => {
      const value = 'test';
      expect(validator.isValidEmail(value)).not.toEqual(undefined);
    });

    it('returns undefined if value is a correct email address', () => {
      const value = 'test@test.com';
      expect(validator.isValidEmail(value)).toEqual(undefined);
    });
  });

  describe('isChecked', () => {
    it('returns error message if checked is false', () => {
      const checked = false;
      expect(validator.isChecked(checked)).not.toEqual(undefined);
    });

    it('returns undefined if checked is true', () => {
      const checked = true;
      expect(validator.isChecked(checked)).toEqual(undefined);
    });
  });
});
