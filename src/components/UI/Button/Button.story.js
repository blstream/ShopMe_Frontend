import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from './Button';

storiesOf('Button', module)
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
    withInfo(`
      Button used in the first step registration with text: Sing up
    `)(() =>
      <Button
        name="example-button"
      />
    )
  )
