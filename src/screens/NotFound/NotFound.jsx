import React from 'react';
import { translate } from 'react-i18next';
import FullScreenError from 'components/App/Errors/FullScreenError/FullScreenError';

const NotFoundScreen = () => (
  <FullScreenError message="components.errorMessage.404" errorImg="nonFatalError" />
);

export { NotFoundScreen };
export default translate()(NotFoundScreen);
