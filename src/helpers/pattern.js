export default class Pattern {
  checkNamePattern(value) {
    if (value.length > 30) {
      return false;
    }
    return true;
  }
}
