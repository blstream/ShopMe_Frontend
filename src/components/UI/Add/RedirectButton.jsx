import React from 'react';
import { translate } from 'react-i18next';

const RedirectButton = props => (
  <button type="button" aria-label={props.t('components.UI.redirectButton.label')} className="add-offer__btn add-offer__btn--black">
    <i className="fa fa-plus-circle" aria-hidden="true" />
  </button>
);

export { RedirectButton };
export default translate()(RedirectButton);
