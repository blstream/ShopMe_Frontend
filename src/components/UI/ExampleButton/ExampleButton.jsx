import React from 'react';
import { translate } from 'react-i18next';

import './ExampleButton.css';

const ExampleButton = (props) => {
  const { type, children } = props;
  return <button className="example-button" type={type}>{children}</button>;
};

export { ExampleButton };
export default translate()(ExampleButton);
