import React from 'react';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import FoundSearchResults from 'components/Search/SearchResults/FoundSearchResults/FoundSearchResults';
import NoSearchResults from 'components/Search/SearchResults/NoSearchResults/NoSearchResults';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundServices: [],
      notFoundServices: null,
      searchPhrase: null,
      paginationData: {},
    };
    this.updateFoundServices = this.updateFoundServices.bind(this);
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.updatePaginationData = this.updatePaginationData.bind(this);
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
      <div className="search">
        <SearchForm
          updateFoundServices={this.updateFoundServices}
          updateSearchPhrase={this.updateSearchPhrase}
          updatePaginationData={this.updatePaginationData}
          onSubmit={this.props.onSubmit}
          services={this.props.services}
        />
        {results}
      </div>
    );
  }
}
