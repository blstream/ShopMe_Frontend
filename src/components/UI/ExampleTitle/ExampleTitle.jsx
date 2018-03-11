import React from 'react';
import { translate } from 'react-i18next';

const ExampleTitle = (props) => {
  const Hx = `h${props.size || 1}`;
  return <Hx>{props.children}</Hx>;
};

export { ExampleTitle };
export default translate()(ExampleTitle);
