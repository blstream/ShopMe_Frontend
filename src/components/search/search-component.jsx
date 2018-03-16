import React from 'react';
import SearchInput from './search-input';
import './search-component.css';

export default class Search extends React.Component {

  render() {
    return (
      <div>
        <p className="logo">ShopMe</p>
        <SearchInput/>
      </div>
    );
  }
}
