import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

storiesOf('Input', module)
  .addDecorator(story => (
    <div style={{
        width: '50%',
        margin: '5rem 10rem' }}>
      {story()}
    </div>
  ))
  .add('inline', () => (
    <div>
      <Input
        label="Yellow M"
      />
      <br />
      <Input
        label="Yellow S"
        size="S"
      />
      <br />
      <Input
        label="Grey M"
        color="grey"
      />
      <br />
      <Input
        label="Grey S"
        color="grey"
        size="S"
      />
      <br />
    </div>
  ))
  .add('required', () => (
    <div>
      <Input
        label="Yellow M"
        required
      />
      <br />
      <Input
        label="Yellow S"
        size="S"
        required
      />
      <br />
      <Input
        label="Grey M"
        color="grey"
        required
      />
      <br />
      <Input
        label="Grey S"
        color="grey"
        size="S"
        required
      />
    </div>
  ))
  .add('block', () => (
    <div>
      <Input
        label="Yellow M"
        display="block"
      />
      <br />
      <Input
        label="Yellow S"
        size="S"
        display="block"
      />
      <br />
      <Input
        label="Grey M"
        color="grey"
        display="block"
      />
      <br />
      <Input
        label="Grey S"
        color="grey"
        size="S"
        display="block"
      />
      <br />
    </div>
  ))
  .add('with placeholder', () => (
    <div>
      <Input
        label="Yellow M"
        placeholder="Placeholder"
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
