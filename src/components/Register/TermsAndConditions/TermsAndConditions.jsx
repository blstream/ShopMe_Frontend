import React from 'react';
import { translate } from 'react-i18next';

const TermsAndConditions = () => (
  <div className="terms-and-conditions">
    <h1 className="terms-and-conditions__title">
      Regulamin Shop me
    </h1>
  </div>
);

export { TermsAndConditions };
export default translate()(TermsAndConditions);
