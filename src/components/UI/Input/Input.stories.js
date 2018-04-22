import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Input', module)
  .addDecorator(story => (
    <div style={{
        width: '50%',
        margin: '5rem 10rem',
      }}
    >
      {story()}
    </div>
  ))
  .add('inline', () => (
    <div>
      <Input
        name="example-input"
        label="Yellow M"
      />
      <br />
      <Input
        name="example-input"
        label="Yellow S"
        size="S"
      />
      <br />
      <Input
        name="example-input"
        label="Grey M"
        color="grey"
      />
      <br />
      <Input
        name="example-input"
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
        name="example-input"
        label="Yellow M"
        required
      />
      <br />
      <Input
        name="example-input"
        label="Yellow S"
        size="S"
        required
      />
      <br />
      <Input
        name="example-input"
        label="Grey M"
        color="grey"
        required
      />
      <br />
      <Input
        name="example-input"
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
        name="example-input"
        label="Yellow M"
        display="block"
      />
      <br />
      <Input
        name="example-input"
        label="Yellow S"
        size="S"
        display="block"
      />
      <br />
      <Input
        name="example-input"
        label="Grey M"
        color="grey"
        display="block"
      />
      <br />
      <Input
        name="example-input"
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
        name="example-input"
        label="Yellow M"
        placeholder="Placeholder"
      />
      <br />
      <Input
        name="example-input"
        label="Grey S"
        placeholder="Placeholder"
        color="grey"
        size="S"
      />
      <br />
      <Input
        name="example-input"
        label="Disabled M"
        placeholder="Placeholder"
        disabled
      />
      <br />
      <Input
        name="example-input"
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
        name="example-input"
        label="Disabled M"
        disabled
      />
      <br />
      <Input
        name="example-input"
        label="Disabled S"
        color="grey"
        size="S"
        disabled
      />
      <br />
      <Input
        name="example-input"
        label="Placeholder M"
        placeholder="Placeholder"
        disabled
      />
      <br />
      <Input
        name="example-input"
        label="Placeholder S"
        placeholder="Placeholder"
        color="grey"
        size="S"
        disabled
      />
    </div>
  ));
