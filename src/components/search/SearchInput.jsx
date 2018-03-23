import React from 'react';
import SearchForm from 'components/search/SearchForm/SearchForm';
import FoundSearchResults from 'components/search/SearchResults/FoundSearchResults/FoundSearchResults';
import NoSearchResults from 'components/search/SearchResults/NoSearchResults/NoSearchResults';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundServices: [],
      notFoundServices: null,
    };
    this.updateFoundServices = this.updateFoundServices.bind(this);
  }

  updateFoundServices(foundServices) {
    if (foundServices.length > 0) {
      this.setState({ foundServices, notFoundServices: false });
    } else {
      this.setState({ notFoundServices: true });
    }
  }

  render() {
    let results;
    if (this.state.notFoundServices === false) {
      results = (<FoundSearchResults services={this.state.foundServices} />);
    } else if (this.state.notFoundServices === true) {
      results = (<NoSearchResults />);
    } else {
      results = ('');
    }

    return (
      <div className="search">
        <SearchForm
          updateFoundServices={this.updateFoundServices}
        />
        {results}
      </div>
    );
  }
}
