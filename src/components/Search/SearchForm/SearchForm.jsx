import React from 'react';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: this.props.phrase,
      isValidPhrase: false,
    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChanged(phrase, isValidPhrase) {
    this.setState({
      phrase, isValidPhrase,
    }, () => {
      this.props.afterChange(phrase, isValidPhrase);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isValidPhrase === false) return;
    this.props.onSubmit(this.state.phrase);
  }

  render() {
    return (
      <div className="search__wrapper">
        <h1 className="search__header">{this.props.t('components.searchForm.header')}</h1>
        <form className="search__form">
          <SearchInput
            onSearchInputChanged={this.handleSearchInputChanged}
            handleSubmit={this.handleSubmit}
            phrase={this.state.phrase}
          />
        </form>
      </div>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);
