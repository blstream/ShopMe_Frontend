import React from 'react';
import SearchForm from 'components/Search/SearchForm/SearchForm';
import FoundSearchResults from 'components/Search/SearchResults/FoundSearchResults/FoundSearchResults';
import NoSearchResults from 'components/Search/SearchResults/NoSearchResults/NoSearchResults';
import { Redirect } from 'react-router';


export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const searchQueryValue = new URLSearchParams(props.location.search);
    const phrase = searchQueryValue.get('title');

    this.state = {
      services: undefined,
      foundServices: [],
      notFoundServices: null,
      phrase,
      isValidPhrase: false,
      paginationData: {},
      triggerFetchAfterValidate: !!phrase,
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
    if (!this.state.isValidPhrase) return;

    this.setState({ fireRedirect: true }, () => {
      this.setState({ fireRedirect: false });
      this.getData();
    });
  }

  getData() {
<<<<<<< HEAD
    const { http } = this.props;
    const title = this.state.searchPhrase;
    return http.get('/api/offers', { title })
=======
    return fetch(`${process.env.REACT_APP_API}/offers?title=${this.state.phrase}`)
      .then(response => response.json())
>>>>>>> Clean up with searchPhrase and searchQuery variables/states/props
      .then((services) => {
        if (services.content) {
          this.setState({
            services,
            foundServices: services.content,
            notFoundServices: false,
            paginationData: {
              totalPages: services.totalPages,
              pageNumber: services.number + 1,
            },
          });
        } else {
          this.setState({ services: [], notFoundServices: true });
        }
      });
  }

  updateFoundServices(foundServices) {
    if (foundServices.content) {
      this.setState({
        foundServices: foundServices.content,
        notFoundServices: false,
        paginationData: {
          totalPages: foundServices.totalPages,
          pageNumber: foundServices.number + 1,
        },
      });
    } else {
      this.setState({ notFoundServices: true });
    }
  }

  updateSearchPhrase(phrase, isValidPhrase) {
    let cb;
    let triggerFetchAfterValidate = this.state && this.state.triggerFetchAfterValidate;
    if (this.state.triggerFetchAfterValidate && this.state.isValidPhrase) {
      cb = this.getData.bind(this);
      triggerFetchAfterValidate = false;
    }

    this.setState({
      phrase,
      isValidPhrase,
      triggerFetchAfterValidate,
    }, cb);
  }

  render() {
    if (this.state.fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/search',
            search: `?title=${this.state.phrase}`,
          }}
        />
      );
    }

    let results;
    if (this.state.notFoundServices === false) {
      results = (<FoundSearchResults
        services={this.state.foundServices}
        updateFoundServices={this.updateFoundServices}
        phrase={this.state.phrase}
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
          phrase={this.state.phrase}
          afterChange={this.updateSearchPhrase}
          onSubmit={this.onSubmit}
        />
        {results}
      </div>
    );
  }
}
