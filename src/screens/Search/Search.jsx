import React from 'react';
import SearchInput from 'components/Search/SearchInput';
import Header from 'components/UI/Header/Header';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: null,
    };
    this.getData = this.getData.bind(this);
  }

  getData(args) {
    return fetch(`${process.env.REACT_APP_API}/offers?title=${args}`)
      .then(response => response.json())
      .then((services) => { this.setState({ services }); });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <SearchInput onSubmit={this.getData} services={this.state.services} />
        </main>
        <footer />
      </div>
    );
  }
}
