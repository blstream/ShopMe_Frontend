import React from 'react';
import SearchInput from 'components/Search/SearchInput';
import Logo from 'components/UI/Logo';
import OfferAdd from 'components/UI/Add/OfferAdd';
import LoginButton from 'components/UI/LoginButton/LoginButton';
import 'components/Search/Search.css';

const Search = () => (
  <div>
    <header>
      <Logo />
      <nav />
      <LoginButton />
    </header>
    <content>
      <OfferAdd />
      <SearchInput />
    </content>
    <footer />
  </div>
);

export default Search;
