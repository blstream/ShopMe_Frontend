import React from 'react';
import SearchInput from 'components/SearchForm/SearchInput';
import SubmitButton from 'components/SearchForm/SubmitButton';

export default class SearchForm extends React.Component {
    render () {
        return (
          <form>
            <SearchInput />
            <SubmitButton />
          </form>
        );
    }
}