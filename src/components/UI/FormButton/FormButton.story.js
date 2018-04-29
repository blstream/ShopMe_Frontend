import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormButton from './FormButton';

storiesOf('FormButton', module)
  .addDecorator(story => (
    <div style={{
        width: '50%',
        margin: '5rem 10rem',
      }}
    >
      {story()}
    </div>
  ))
  .add('form button',
    (() =>
      <FormButton
        id="some-id"
        value="test value"/>
    )
  )
