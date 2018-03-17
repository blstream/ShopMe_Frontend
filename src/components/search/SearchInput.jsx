import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="search">
        <SearchForm />
      </div>
    );
  }
}
