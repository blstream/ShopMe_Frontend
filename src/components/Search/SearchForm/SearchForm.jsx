import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: null,
      isValidPhrase: false,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChanged(searchPhrase, isValidPhrase) {
    this.setState({
      searchPhrase, isValidPhrase,
    }, () => {
      this.props.afterChange(searchPhrase, isValidPhrase);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isValidPhrase === false) return;
    this.props.onSubmit(this.state.searchPhrase);
  }

  render() {
    return (
      <div className="search__wrapper">
        <h1 className="search__header">{this.props.t('components.searchForm.header')}</h1>
        <form className="search__form">
          <SearchInput
            onSearchInputChanged={this.handleSearchInputChanged}
            searchQuery={this.props.searchQuery}
            handleSubmit={this.handleSubmit}
            searchPhrase={this.state.searchPhrase}
          />
        </form>
      </div>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
