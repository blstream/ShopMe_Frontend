import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import Logo from 'components/UI/Logo';
import 'components/search/Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <header>
          <nav />
          <Logo />
        </header>
        <content>
          <SearchForm />
        </content>
        <footer />
      </div>
    );
  }
}
