import React from 'react';
import { translate } from 'react-i18next';

const ExamplesIPAddress = props => <pre>{props.ip}</pre>;

export { ExamplesIPAddress };
export default translate()(ExamplesIPAddress);
