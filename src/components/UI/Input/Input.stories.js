import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

storiesOf('Input', module)
  .addDecorator(story => (
    <div style={{ width: '50%', margin: '5rem 10rem' }}>
      {story()}
    </div>
  ))
  .add('inline', () => (
    <div>
      <Input
        label="Yellow M"
        color="yellow"
        size="M"
        position="inline"
      />
      <br />
      <Input
        label="Yellow S"
        color="yellow"
        size="S"
        position="inline"
      />
      <br />
      <Input
        label="Grey M"
        color="grey"
        size="M"
        position="inline"
      />
      <br />
      <Input
        label="Grey S"
        color="grey"
        size="S"
        position="inline"
      />
      <br />
    </div>
  ))
  .add('required', () => (
    <div>
      <Input
        label="Yellow M"
        color="yellow"
        size="M"
        position="inline"
        required
      />
      <br />
      <Input
        label="Yellow S"
        color="yellow"
        size="S"
        position="inline"
        required
      />
      <br />
      <Input
        label="Grey M"
        color="grey"
        size="M"
        position="inline"
        required
      />
      <br />
      <Input
        label="Grey S"
        color="grey"
        size="S"
        position="inline"
        required
      />
    </div>
  ))
  .add('block', () => (
    <div>
      <Input
        label="Yellow M"
        color="yellow"
        size="M"
        position="block"
      />
      <br />
      <Input
        label="Yellow S"
        color="yellow"
        size="S"
        position="block"
      />
      <br />
      <Input
        label="Grey M"
        color="grey"
        size="M"
        position="block"
      />
      <br />
      <Input
        label="Grey S"
        color="grey"
        size="S"
        position="block"
      />
      <br />
    </div>
  ))
  .add('with placeholder', () => (
    <div>
      <Input
        label="Yellow M"
        placeholder="Placeholder"
        color="yellow"
        size="M"
      />
      <br />
      <Input
        label="Grey S"
        placeholder="Placeholder"
        color="grey"
        size="S"
      />
      <br />
      <Input
        label="Disabled M"
        placeholder="Placeholder"
        color="yellow"
        size="M"
        disabled
      />
      <br />
      <Input
        label="Disabled S"
        placeholder="Placeholder"
        color="grey"
        size="S"
        disabled
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Input
        label="Disabled M"
        color="yellow"
        size="M"
        disabled
      />
      <br />
      <Input
        label="Disabled S"
        color="grey"
        size="S"
        disabled
      />
      <br />
      <Input
        label="Placeholder M"
        placeholder="Placeholder"
        color="yellow"
        size="M"
        disabled
      />
      <br />
      <Input
        label="Placeholder S"
        placeholder="Placeholder"
        color="grey"
        size="S"
        disabled
      />
    </div>
  ));
