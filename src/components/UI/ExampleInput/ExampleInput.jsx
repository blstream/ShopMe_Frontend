import React from 'react';
import { translate } from 'react-i18next';

import './ExampleInput.css';

const ExampleInput = (props) => {
  const { name } = props;
  return (
    props.disabled
      ? <input className="example-input" name={name} id={name} type="text" disabled />
      : <input className="example-input" name={name} id={name} type="text" />
  );
};

export { ExampleInput };
export default translate()(ExampleInput);
