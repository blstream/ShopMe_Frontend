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
    if (validPhrase && cleanedSearchPhrase !== '') {
      this.props.onSearchInputChanged(cleanedSearchPhrase);
    } else {
      this.props.onSearchInputChanged(null);
    }
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
        {!this.state.validPhrase && (<p className="search__message-error">{t('components.searchForm.lengthError')}</p>)}
      </div>
    );
  }
}

export { SearchInput };
export default translate()(SearchInput);

