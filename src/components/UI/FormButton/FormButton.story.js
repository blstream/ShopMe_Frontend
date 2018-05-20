import React from 'react';
import { storiesOf } from '@storybook/react';
import FormButton from './FormButton';

storiesOf('Button/FormButton', module)
  .add('form button', () => (
    <FormButton
      id="some-id"
      value="Form Button"
    />
  ));
