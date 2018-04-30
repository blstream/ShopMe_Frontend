import React from 'react';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import CategoryList from 'components/Search/CategoryList/CategoryList';
import { Redirect } from 'react-router';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.setState({ fireRedirect: true });
  }

  updateSearchPhrase(searchPhrase, isSearchPhraseValid) {
    let cb;
    let triggerFetchAfterValidate = this.state && this.state.triggerFetchAfterValidate;
    if (this.state.triggerFetchAfterValidate && this.state.isSearchPhraseValid) {
      cb = this.getData.bind(this);
      triggerFetchAfterValidate = false;
    }

    this.setState({
      searchPhrase,
      isSearchPhraseValid,
      triggerFetchAfterValidate,
    }, cb);
  }

  render() {
    if (this.state.fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/search',
            search: `?title=${this.state.searchPhrase}`,
          }}
        />
      );
    }
    return (
      <div className="search">
        <SearchForm
          searchQuery={this.state.searchPhrase}
          afterChange={this.updateSearchPhrase}
          onSubmit={this.onSubmit}
        />
        <CategoryList />
      </div>
    );
  }
}
