import React from 'react';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import CategoryList from 'components/Homepage/CategoryList/CategoryList';
import Terms from 'components/Homepage/Terms/Terms';

import { Redirect } from 'react-router';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      isSearchPhraseValid: false,
      fireRedirect: false,
    };
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.state.isSearchPhraseValid) this.setState({ fireRedirect: true });
  }

  updateSearchPhrase(searchPhrase, isSearchPhraseValid) {
    this.setState({
      searchPhrase,
      isSearchPhraseValid,
    });
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
        <Terms />
      </div>
    );
  }
}
