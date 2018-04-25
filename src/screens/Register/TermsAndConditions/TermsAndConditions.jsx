import React from 'react';
import { translate } from 'react-i18next';
import TermsAndConditions from 'components/Register/TermsAndConditions/TermsAndConditions';

const ScreenTermsAndConditions = () => (
  <TermsAndConditions />
);

export { ScreenTermsAndConditions };
export default translate()(ScreenTermsAndConditions);
