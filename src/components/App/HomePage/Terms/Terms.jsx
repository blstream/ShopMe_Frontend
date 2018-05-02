import React from 'react';
import { translate } from 'react-i18next';

import './Terms.css';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div className="terms">
        <h2 className="terms__caption">{t('components.UI.terms.header')}</h2>
        <div className="term__columns-wrapper">
          <div className="terms__column">
            <h3 className="terms__column--title">{t('components.UI.terms.budgetary.title')}</h3>
            <p className="terms__column--content">{t('components.UI.terms.budgetary.content')}</p>
          </div>
          <div className="terms__column">
            <h3 className="terms__column--title">{t('components.UI.terms.time.title')}</h3>
            <p className="terms__column--content">{t('components.UI.terms.time.content')}</p>
          </div>
          <div className="terms__column">
            <h3 className="terms__column--title">{t('components.UI.terms.payment.title')}</h3>
            <p className="terms__column--content">{t('components.UI.terms.payment.content')}</p>
          </div>
        </div>
        <h2 className="terms__caption">{t('components.UI.terms.footer')}</h2>
      </div>
    );
  }
}

export { Terms };
export default translate()(Terms);

