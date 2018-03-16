import React from 'react';
import SearchInput from './search-input';
import './search-component.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <p className="logo">ShopMe</p>
        <SearchInput />
      </div>
    );
  }
}
