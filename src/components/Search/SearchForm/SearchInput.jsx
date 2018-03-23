import React from 'react';
import { translate } from 'react-i18next';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validPhrase: true,
    };
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleBlur(input) {
    const searchPhrase = input.target.value.trim();
    const cleanedSearchPhrase = searchPhrase.replace(/[!@#$%^&*()=+\-_;:'"<>,.?/{}|`~[\]\\]/g, '');
    const validPhrase = cleanedSearchPhrase.length > 1;
    this.setState({ validPhrase });
    this.props.onSearchInputChanged(cleanedSearchPhrase);
  }

  render() {
    const { t } = this.props;
    return (
      <div className="search__input-wrapper">
        <input
          type="text"
          id="search__input"
          placeholder={t('components.searchForm.input')}
          name="searchPhrase"
          onBlur={this.handleBlur}
          className="search__form-item"
        />
        <p className="search__message-error">{ this.state.validPhrase === false ? t('components.searchForm.lengthError') : '' } </p>
      </div>
    );
  }
}

export { SearchInput };
export default translate()(SearchInput);

