import React from 'react';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import FoundSearchResults from 'components/Search/SearchResults/FoundSearchResults/FoundSearchResults';
import NoSearchResults from 'components/Search/SearchResults/NoSearchResults/NoSearchResults';
import { Redirect } from 'react-router';


export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const searchQueryValue = new URLSearchParams(props.location.search);
    const searchQuery = searchQueryValue.get('title');

    this.state = {
      services: undefined,
      foundServices: [],
      notFoundServices: null,
      searchPhrase: searchQuery,
      isSearchPhraseValid: false,
      paginationData: {},
      triggerFetchAfterValidate: !!searchQuery,
      fireRedirect: false,
    };
    this.updateFoundServices = this.updateFoundServices.bind(this);
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onSubmit() {
    if (!this.state.isSearchPhraseValid) return;

    this.setState({ fireRedirect: true }, () => {
      this.setState({ fireRedirect: false });
      this.getData();
    });
  }

  getData() {
    return fetch(`${process.env.REACT_APP_API}/offers?title=${this.state.searchPhrase}`)
      .then(response => response.json())
      .then((services) => {
        if (services.content) {
          this.setState({ services, foundServices: services.content, notFoundServices: false });
        } else {
          this.setState({ services: [], notFoundServices: true });
        }
      });
  }

  updateFoundServices(foundServices) {
    if (foundServices.content) {
      this.setState({ foundServices: foundServices.content, notFoundServices: false });
    } else {
      this.setState({ notFoundServices: true });
    }
  }

  updateSearchPhrase(searchPhrase, isSearchPhraseValid) {
    let cb;
    let triggerFetchAfterValidate = this.state && this.state.triggerFetchAfterValidate;
    if (this.state.triggerFetchAfterValidate && this.state.isSearchPhraseValid) {
      cb = this.getData.bind(this);
      triggerFetchAfterValidate = false;
    }

    this.setState({
      searchPhrase,
      isSearchPhraseValid,
      triggerFetchAfterValidate,
    }, cb);
  }

  render() {
    if (this.state.fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/search',
            search: `?title=${this.state.searchPhrase}`,
          }}
        />
      );
    }

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
      <div>
        <SearchForm
          services={this.state.services}
          searchQuery={this.state.searchPhrase}
          afterChange={this.updateSearchPhrase}
          onSubmit={this.onSubmit}
        />
        {results}
      </div>
    );
  }
}
