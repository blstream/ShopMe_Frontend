import React from 'react';
<<<<<<< HEAD
import SearchInput from 'components/Search/SearchInput';
=======
import Layout from 'core/Layout';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import FoundSearchResults from 'components/Search/SearchResults/FoundSearchResults/FoundSearchResults';
import NoSearchResults from 'components/Search/SearchResults/NoSearchResults/NoSearchResults';

>>>>>>> Remove Search/SearchInput component and move methods to Screens/Search

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: undefined,
      foundServices: [],
      notFoundServices: null,
      searchPhrase: null,
      paginationData: {},
    };
    this.getData = this.getData.bind(this);
    this.updateFoundServices = this.updateFoundServices.bind(this);
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.updatePaginationData = this.updatePaginationData.bind(this);
    this.afterValidate = this.afterValidate.bind(this);
  }

  getData(args) {
    return fetch(`${process.env.REACT_APP_API}/offers?title=${args}`)
      .then(response => response.json())
      .then((services) => { this.setState({ services, foundServices: services.content, notFoundServices: false }); });
  }
  afterValidate(searchPhrase) {
    this.setState({
      searchPhrase,
    }, () => {
      this.getData(this.state.searchPhrase);
    });
  }
  updateFoundServices(foundServices) {
    if (foundServices.content) {
      this.setState({ foundServices: foundServices.content, notFoundServices: false });
    } else {
      this.setState({ notFoundServices: true });
    }
  }

  updatePaginationData(paginationData) {
    this.setState({ paginationData });
  }

  updateSearchPhrase(searchPhrase) {
    this.setState({ searchPhrase });
  }

  render() {
    const searchQueryValue = new URLSearchParams(document.location.search.substring(1));
    const searchQuery = searchQueryValue.get('title');
    let results;
    if (this.state.notFoundServices === false) {
      results = (<FoundSearchResults
        services={this.state.foundServices}
        updateFoundServices={this.updateFoundServices}
        searchPhrase={this.state.searchPhrase}
        paginationData={this.state.paginationData}
      />);
    } else if (this.state.notFoundServices === true) {
      results = (<NoSearchResults />);
    } else {
      results = ('');
    }
    return (
<<<<<<< HEAD
      <SearchInput onSubmit={this.getData} services={this.state.services} />
=======
      <Layout>
        <div className="search">
          <SearchForm
            updateFoundServices={this.updateFoundServices}
            updateSearchPhrase={this.updateSearchPhrase}
            updatePaginationData={this.updatePaginationData}
            onSubmit={this.getData}
            services={this.state.services}
            searchQuery={searchQuery}
            afterValidate={this.afterValidate}
          />
          {results}
        </div>
      </Layout>
>>>>>>> Pass values from url to SearchInput component
    );
  }
}
