import React from 'react';
import SearchInput from 'components/Search/SearchInput';
import Logo from 'components/UI/Logo';
import OfferAdd from 'components/UI/Add/OfferAdd';
import 'components/Search/Search.css';

const Search = () => (
  <div>
    <header>
      <Logo />
      <nav />
      <OfferAdd />
    </header>
    <content>
      <SearchInput />
    </content>
    <footer />
  </div>
);

export default Search;
