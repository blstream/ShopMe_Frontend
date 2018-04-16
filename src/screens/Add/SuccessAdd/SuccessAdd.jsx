import React from 'react';
import { translate } from 'react-i18next';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';

const ScreenSuccessAdd = () => (
  <SuccessMessage />
);

export { ScreenSuccessAdd };
export default translate()(ScreenSuccessAdd);
