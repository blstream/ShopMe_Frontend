import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: null,
      validPhrase: false,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChanged(searchPhrase, validPhrase) {
    this.setState({
      searchPhrase, validPhrase,
    }, () => {
      this.props.afterChange(searchPhrase, validPhrase);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.validPhrase === false) return;
    this.props.onSubmit(this.state.searchPhrase);
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <form className="search__form">
          <SearchInput
            onSearchInputChanged={this.handleSearchInputChanged}
            searchQuery={this.props.searchQuery}
          />
          <SubmitButton value={t('components.searchForm.button')} onClick={this.handleSubmit} searchPhrase={this.state.searchPhrase} />
        </form>
      </div>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
