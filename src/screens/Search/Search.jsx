import React from 'react';
import SearchInput from 'components/Search/SearchInput';
import Layout from 'core/Layout';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: undefined,
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
      <Layout>
        <SearchInput onSubmit={this.getData} services={this.state.services} />
      </Layout>
    );
  }
}
