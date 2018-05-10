import React from 'react';
import { translate } from 'react-i18next';
import TermsAndConditions from 'components/Register/TermsAndConditions/TermsAndConditions';

const TermsAndConditionsScreen = () => (
  <TermsAndConditions />
);

export { TermsAndConditionsScreen };
export default translate()(TermsAndConditionsScreen);
