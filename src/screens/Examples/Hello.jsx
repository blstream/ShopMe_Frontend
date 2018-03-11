import React from 'react';
import { translate } from 'react-i18next';
import ExampleTitle from 'components/UI/ExampleTitle/ExampleTitle';

const SreensExamplesHello = (props) => {
  const { t } = props;
  return <ExampleTitle>{t('screens.examples.hello.title')}</ExampleTitle>;
};

export { SreensExamplesHello };
export default translate()(SreensExamplesHello);
