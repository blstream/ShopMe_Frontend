import React from 'react';
import SearchInput from 'components/SearchForm/SearchInput';
import SubmitButton from 'components/SearchForm/SubmitButton';

const SearchForm = () => (
  <form className="search__form">
    <SearchInput />
    <SubmitButton />
  </form>
);

export default SearchForm;
