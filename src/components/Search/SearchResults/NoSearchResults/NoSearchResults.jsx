import React from 'react';
import { translate } from 'react-i18next';
import './NoSearchResults.css';

const NoSearchResults = (props) => {
  const { t } = props;
  return (
    <div className="no-search-results">
      <p className="no-search-results__paragraph">{t('components.noSearchResults.noResultsTitle')}</p>
    </div>
  );
};

export { NoSearchResults };
export default translate()(NoSearchResults);
