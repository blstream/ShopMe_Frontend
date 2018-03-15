import React from 'react';
import SearchInput from './search-input';
import './search-component.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          name: 'Pranie i sprzątanie',
          price: '10zł',
          date: '10.10.2010'
        }, {
          name: 'Sprzątanie',
          price: '20zł',
          date: '20.10.2015'
        }, {
          name: 'Pranie',
          price: '30zł',
          date: '05.10.2010'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p className="logo">ShopMe</p>
        <SearchInput services={this.state.services}/>
      </div>
    );
  }
}
