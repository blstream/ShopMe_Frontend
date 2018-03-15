import React from 'react';
import './search-input.css';

export default class SearchInput extends React.Component {

  render() {
    return (
      <div className="search">
        <form className="search__form">
          <input
            type="text"
            id="search-input"
            placeholder="Wpisz szukaną usługę"
            name="search"
            ref={search => this.search = search}
            className="search__form--input"/>
          <button id="search-btn" className="search__form--button">Szukaj</button>
        </form>
      </div>
    )
  }
}
