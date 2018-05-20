import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SubmitButton from './SubmitButton';

storiesOf('Button/SubmitButton', module)
  .add(
    'disabled',
    withInfo(`
      Default State of Submit Button is Disabled
    `)(() => (
      <SubmitButton className="form__button--submit" phrase="0">
        Disabled
      </SubmitButton>
    ))
  )
  .add(
    'active',
    withInfo(`
      Submit Button becomes active when it recieves in props phrase longer than 2 characters
    `)(() => (
      <SubmitButton className="form__button--submit" phrase="3">
        Active
      </SubmitButton>
    ))
  );
