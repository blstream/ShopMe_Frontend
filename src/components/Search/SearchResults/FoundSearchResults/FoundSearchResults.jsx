import React from 'react';
import { translate } from 'react-i18next';
import ServicesItem from 'components/Search/SearchResults/ServicesItem/ServicesItem';
import Pagination from 'components/Search/SearchResults/Pagination/Pagination';
import './FoundSearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.paginationData.pageNumber,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const isDifferentPhrase = this.props.phrase !== prevProps.phrase;
    const hasTotalPagesChangend =
      this.props.paginationData.totalPages !== prevProps.paginationData.totalPages;

    if (isDifferentPhrase || hasTotalPagesChangend) {
      this.updatePagination(
        this.props.paginationData.pageNumber,
        this.props.paginationData.totalPages
      );
    }
  }

  updatePagination(page) {
    this.setState({
      page,
    });
  }

  handlePageChange(page) {
    this.props.updatePage(page);
    this.updatePagination(page);
  }

  render() {
    const { t } = this.props;
    const { page } = this.state;

    return (
      <div className="search-results">
        <div>
          <h3 className="search-results__title">
            {t('components.foundSearchResults.resultsTitle')}
          </h3>
          <div className="search-results__heading">
            <span className="search-results__heading-item search-results__heading-wide">{t('components.foundSearchResults.offerTitle')}</span>
            <span className="search-results__heading-item search-results__heading-narrow">{t('components.foundSearchResults.category')}</span>
            <span className="search-results__heading-item search-results__heading-narrow">{t('components.foundSearchResults.price')}</span>
            <span className="search-results__heading-item search-results__heading-narrow">{t('components.foundSearchResults.date')}</span>
          </div>
          <ol className="search-results__list">
            {this.props.services.map((service, i) => (
              <ServicesItem key={service.id} value={service} index={i} page={page} />))}
          </ol>
        </div>
        <Pagination
          margin={2}
          page={page}
          totalPages={this.props.paginationData.totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export { SearchResults };
export default translate()(SearchResults);
