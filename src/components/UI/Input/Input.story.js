import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
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
  .add(
    'default',
    withInfo(`
      Input is a single line text field that enable users to input data.
      Input styles can be modified by changing its properties (color and size).
    `)(() => (
      <Input
        name="example-input"
        label="Yellow M"
      />
    ))
  )
  .add(
    'inline',
    withInfo(`
      By default Input labels are displayed in line with text field.
    `)(() => (
      <div>
        <Input
          name="example-input"
          label="Yellow M"
        />
        <Input
          name="example-input"
          label="Yellow S"
          size="S"
        />
        <Input
          name="example-input"
          label="Grey M"
          color="grey"
        />
        <Input
          name="example-input"
          label="Grey S"
          color="grey"
          size="S"
        />
      </div>
    ))
  )
  .add(
    'block',
    withInfo(`
      Labels of Inputs with property display="block" are displayed in a separate line.
    `)(() => (
      <div>
        <Input
          name="example-input"
          label="Yellow M"
          display="block"
        />
        <Input
          name="example-input"
          label="Yellow S"
          size="S"
          display="block"
        />
        <Input
          name="example-input"
          label="Grey M"
          color="grey"
          display="block"
        />
        <Input
          name="example-input"
          label="Grey S"
          color="grey"
          size="S"
          display="block"
        />
      </div>
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
      <div>
        <Input
          name="example-input"
          label="Yellow M"
          placeholder="Placeholder"
        />
        <Input
          name="example-input"
          label="Grey S"
          placeholder="Placeholder"
          color="grey"
          size="S"
        />
        <Input
          name="example-input"
          label="Disabled M"
          placeholder="Placeholder"
          disabled
        />
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
  )
  .add(
    'disabled',
    withInfo(`
      The examples below show disabled Input components.
    `)(() => (
      <div>
        <Input
          name="example-input"
          label="Disabled Yellow"
          disabled
        />
        <Input
          name="example-input"
          label="Disabled Yellow"
          placeholder="Placeholder"
          size="S"
          disabled
        />
        <Input
          name="example-input"
          label="Disabled Grey"
          color="grey"
          disabled
        />
        <Input
          name="example-input"
          label="Disabled Grey"
          placeholder="Placeholder"
          color="grey"
          size="S"
          disabled
        />
      </div>
    ))
  );
