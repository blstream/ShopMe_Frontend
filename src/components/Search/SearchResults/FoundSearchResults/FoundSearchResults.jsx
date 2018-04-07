import React from 'react';
import { translate } from 'react-i18next';
import ServicesItem from 'components/Search/SearchResults/ServicesItem/ServicesItem';
import Pagination from 'components/Search/SearchResults/Pagination/Pagination';
import './FoundSearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      foundServices: this.props.services,
      first: false,
      last: false,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    fetch(`${process.env.REACT_APP_API}/offers?title=${this.state.searchPhrase}&page=${page}`)
      .then(response => response.json())
      .then((servicesResponse) => {
        this.props.updateFoundServices(servicesResponse);
        const foundServices = servicesResponse.content;
        const { first, last } = servicesResponse;
        this.setState({
          page, foundServices, first, last,
        });
      });
  }

  render() {
    const { t } = this.props;
    const {
      page, foundServices, first, last,
    } = this.state;

    return (
      <div className="search-results">
        <div className="search-results__results">
          <h3 className="search-results__results search-results__title">
            {t('components.foundSearchResults.resultsTitle')}
          </h3>
          <ol className="search-results__list">
            {this.props.services.map((service, i) => (
              <ServicesItem key={service.id} value={service} index={i} />))}
          </ol>
        </div>
        <Pagination
          margin={1}
          page={page}
          first={first}
          last={last}
          count={Math.ceil(foundServices.length / 10)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export { SearchResults };
export default translate()(SearchResults);
