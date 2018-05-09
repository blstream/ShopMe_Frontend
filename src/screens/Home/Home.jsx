import React from 'react';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import CategoryList from 'components/Homepage/CategoryList/CategoryList';
import Terms from 'components/Homepage/Terms/Terms';

import { Redirect } from 'react-router';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: '',
      isValidPhrase: false,
      fireRedirect: false,
    };
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.state.isValidPhrase) this.setState({ fireRedirect: true });
  }

  updateSearchPhrase(phrase, isValidPhrase) {
    this.setState({
      phrase,
      isValidPhrase,
    });
  }

  render() {
    if (this.state.fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/search',
            search: `?title=${this.state.phrase}&page=1`,
          }}
        />
      );
    }
    return (
      <div className="search">
        <SearchForm
          phrase={this.state.phrase}
          afterChange={this.updateSearchPhrase}
          onSubmit={this.onSubmit}
        />
        <CategoryList />
        <Terms />
      </div>
    );
  }
}
