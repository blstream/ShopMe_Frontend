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
      first: this.props.paginationData.first,
      last: this.props.paginationData.last,
      totalPages: this.props.paginationData.totalPages,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    fetch(`${process.env.REACT_APP_API}/offers?title=${this.props.searchPhrase}&page=${page}`)
      .then(response => response.json())
      .then((servicesResponse) => {
        const { first, last, totalPages } = servicesResponse;
        this.setState({
          page, totalPages, first, last,
        });
        this.props.updateFoundServices(servicesResponse);
      });
  }

  render() {
    const { t } = this.props;
    const {
      page, first, last, totalPages,
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
          margin={2}
          page={page}
          first={first}
          last={last}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export { SearchResults };
export default translate()(SearchResults);
