import React from 'react';
import { Redirect } from 'react-router';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const searchQueryValue = new URLSearchParams(window.location.search);
    this.state = {
      category: searchQueryValue.get('category'),
      phrase: searchQueryValue.get('title'),
      isValidPhrase: false,
    };
    this.fireRedirect = false;

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
  }

  componentDidUpdate() {
    this.fireRedirect = false;
  }

  handleSearchInputChanged(phrase, isValidPhrase) {
    this.setState({
      phrase, isValidPhrase,
    }, () => {
      this.updateSearchPhrase(phrase, isValidPhrase);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.isValidPhrase && (this.props.isHomepage || this.props.isResults)) return;
    if (this.state.isValidPhrase) this.fireRedirect = true;
    this.setState({});
  }

  updateSearchPhrase(phrase, isValidPhrase) {
    this.setState({
      phrase,
      isValidPhrase,
    });
  }

  render() {
    let myClassWrapper = 'search__wrapper';
    let myClassForm = 'search__form';
    if (this.props.isHomepage) {
      myClassWrapper = 'search__wrapper-home';
      myClassForm = 'search__form-home';
    } else if (this.props.isResults) {
      myClassWrapper = 'search__wrapper-results';
      myClassForm = 'search__form-results';
    }

    const searchInput = (
      <SearchInput
        isHomepage={this.props.isHomepage}
        isResults={this.props.isResults}
        onSearchInputChanged={this.handleSearchInputChanged}
        handleSubmit={this.handleSubmit}
        phrase={this.state.phrase}
        enableValidation={this.props.isHomepage || this.props.isResults}
      />);
    const searchForm = (
      <div className={myClassWrapper}>
        {this.props.isHomepage ? <h1 className="search__header">{this.props.t('components.searchForm.header')}</h1> : null}
        <form className={myClassForm}>
          {searchInput}
        </form>
      </div>
    );

    const searchUrl = this.state.category
      ? `?category=${this.state.category}&title=${this.state.phrase}&page=1`
      : `?title=${this.state.phrase}&page=1`;

    if (this.fireRedirect) {
      return (
        <div>
          <Redirect
            to={{
              pathname: '/search',
              search: searchUrl,
            }}
          />
          {searchForm}
        </div>
      );
    }
    return searchForm;
  }
}

export { SearchForm };
export default translate()(SearchForm);
