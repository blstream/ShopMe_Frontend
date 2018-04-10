import React from 'react';
import { translate } from 'react-i18next';

const RedirectButton = () => (
  <i className="fa fa-plus-circle add-offer__btn add-offer__btn--black" aria-hidden="true" />
);

export { RedirectButton };
export default translate()(RedirectButton);
