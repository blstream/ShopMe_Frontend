import React from 'react';
import { translate } from 'react-i18next';
import './SearchInput.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validPhrase: true,
      errorMessage: null,
    };
    this.validatePhrase = this.validatePhrase.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillMount() {
    if (this.props.searchQuery) {
      this.validatePhrase(this.props.searchQuery);
    }
  }
  validatePhrase(input) {
    const searchPhrase =
      this.props.searchQuery ? this.props.searchQuery
        : input.target.value.trim();
    const cleanedSearchPhrase = searchPhrase.replace(/[!@#$%^&*()=+\-_;:'"<>,.?/{}|`~[\]\\]/g, '');
    const validPhrase = cleanedSearchPhrase.length > 1 && Number.isNaN(Number(cleanedSearchPhrase));
    this.setState({ validPhrase });
    if (validPhrase && Number.isNaN(Number(cleanedSearchPhrase)) && cleanedSearchPhrase !== '') {
      this.props.onSearchInputChanged(cleanedSearchPhrase, validPhrase);
      this.setState({ errorMessage: null });
    } else if (!Number.isNaN(Number(cleanedSearchPhrase)) && cleanedSearchPhrase !== '') {
      this.props.onSearchInputChanged(null, validPhrase);
      this.setState({ errorMessage: 'components.searchForm.numberError' });
    } else {
      this.props.onSearchInputChanged(null, validPhrase);
      this.setState({ errorMessage: 'components.searchForm.lengthError' });
    }
  }
  handleEnter(event) {
    if (event.keyCode === 13) {
      this.validatePhrase(event);
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
          onChange={this.validatePhrase}
          onKeyDown={this.handleEnter}
          className="search__form-item"
          maxLength="30"
          aria-label={t('components.searchForm.label')}
        />
        {!this.state.validPhrase && (<p className="search__message-error">{t(this.state.errorMessage)}</p>)}
      </div>
    );
  }
}

export { SearchInput };
export default translate()(SearchInput);

