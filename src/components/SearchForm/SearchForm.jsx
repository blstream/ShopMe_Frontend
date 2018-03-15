import React from 'react';
import SearchInput from 'components/SearchForm/SearchInput';

export default class SearchForm extends React.Component {
    render () {
        return (
          <form>
            <SearchInput />
          </form>
        );
    }
}