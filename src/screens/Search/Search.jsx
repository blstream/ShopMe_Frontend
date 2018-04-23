import React from 'react';
import SearchInput from 'components/Search/SearchInput';

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
    const searchQueryValue = new URLSearchParams(document.location.search.substring(1));
    const searchQuery = searchQueryValue.get('title');
    return (
<<<<<<< HEAD
      <SearchInput onSubmit={this.getData} services={this.state.services} />
=======
      <Layout>
        <SearchInput
          onSubmit={this.getData}
          services={this.state.services}
          searchQuery={searchQuery}
        />
      </Layout>
>>>>>>> Pass values from url to SearchInput component
    );
  }
}
