import React from 'react';
import { translate } from 'react-i18next';
import './SearchResults.css';
import ServicesItem from './ServicesItem';


const SearchResults = (props) => {
  const { t } = props;
  return (
    <div className="search-results">
      <div>
        <h1 className="search-results--title">{t('components.searchResults.header')}</h1>
      </div>
      <div className="search-results__results">
        <h3 className="search-results__results search-results__results--title">
          {t('components.searchResults.resultsTitle')}
        </h3>
        <ol className="search-results__results--list">
          {props.services.map((service, i) => (
            <ServicesItem key={service.id} value={service} index={i} />))}
        </ol>
      </div>
    </div>
  );
};

export { SearchResults };
export default translate()(SearchResults);
