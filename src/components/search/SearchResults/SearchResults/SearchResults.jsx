import React from 'react';
import { translate } from 'react-i18next';
import ServicesItem from 'components/Search/SearchResults/ServicesItem/ServicesItem';
import './SearchResults.css';

const SearchResults = (props) => {
  const { t } = props;
  return (
    <div className="search-results">
      <div className="search-results__results">
        <h3 className="search-results__results search-results__title">
          {t('components.searchResults.resultsTitle')}
        </h3>
        <ol className="search-results__list">
          {props.services.map((service, i) => (
            <ServicesItem key={service.id} value={service} index={i} />))}
        </ol>
      </div>
    </div>
  );
};

export { SearchResults };
export default translate()(SearchResults);
