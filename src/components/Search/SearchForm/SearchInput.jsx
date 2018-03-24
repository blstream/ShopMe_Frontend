import React from 'react';
import { translate } from 'react-i18next';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validPhrase: true,
      errorMessage: null,
    };
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleBlur(input) {
    const searchPhrase = input.target.value.trim();
    const cleanedSearchPhrase = searchPhrase.replace(/[!@#$%^&*()=+\-_;:'"<>,.?/{}|`~[\]\\]/g, '');
    const validPhrase = cleanedSearchPhrase.length > 1 && Number.isNaN(Number(cleanedSearchPhrase));
    this.setState({ validPhrase });
    if (validPhrase && Number.isNaN(Number(cleanedSearchPhrase))) {
      this.props.onSearchInputChanged(cleanedSearchPhrase);
      this.setState({ errorMessage: null });
    } else if (!Number.isNaN(Number(cleanedSearchPhrase))) {
      this.props.onSearchInputChanged(null);
      this.setState({ errorMessage: 'components.searchForm.numberError' });
    } else {
      this.props.onSearchInputChanged(null);
      this.setState({ errorMessage: 'components.searchForm.lengthError' });
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
        {!this.state.validPhrase && (<p className="search__message-error">{t(this.state.errorMessage)}</p>)}
      </div>
    );
  }
}

export { SearchInput };
export default translate()(SearchInput);

