import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SubmitButton from './SubmitButton';

storiesOf('SubmitButton', module)
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
      <SubmitButton
      value = 'test value'
      searchPhrase = 'test'
      />
    )
  )
