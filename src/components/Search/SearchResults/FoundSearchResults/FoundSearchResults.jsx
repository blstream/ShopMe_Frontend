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
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    const foundServices = this.state.offers.slice((page - 1) * 10, ((page - 1) * 10) + 2);
    this.setState({ page, foundServices });
  }

  render() {
    const { t } = this.props;
    const { page, foundServices } = this.state;

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
          count={Math.ceil(foundServices.length / 10)}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export { SearchResults };
export default translate()(SearchResults);
