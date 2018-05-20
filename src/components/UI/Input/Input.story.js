import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Input } from './Input';

storiesOf('Input', module)
  .add(
    'default',
    withInfo(`
      Input is a single line text field that enable users to input data.
    `)(() => (
      <Input
        name="example-input"
        label="Example Input"
      />
    ))
  )
  .add(
    'types',
    withInfo(`
      The default Input type is 'text' and its value can be either 'string' or 'number'.
    `)(() => (
      <div>
        <Input
          name="example-input"
          label="Text"
        />
        <Input
          name="example-input"
          type="email"
          label="Email"
        />
        <Input
          name="example-input"
          type="password"
          label="Password"
        />
        <Input
          name="example-input"
          type="number"
          label="Number"
        />
      </div>
    ))
  )
  .add(
    'with placeholder',
    withInfo(`
      The examples below show Input components with placeholders.
    `)(() => (
      <Input
        name="example-input"
        label="w/Placeholder"
        placeholder="Placeholder"
      />
    ))
  )
  .add(
    'disabled',
    withInfo(`
      The examples below show disabled Input components.
    `)(() => (
      <div>
        <Input
          name="example-input"
          label="Disabled"
          disabled
        />
        <Input
          name="example-input"
          label="w/Placeholder"
          placeholder="Placeholder"
          disabled
        />
      </div>
    ))
  );
