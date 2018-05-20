import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginButton from './LoginButton';

storiesOf('Button/LoginButton', module)
  .add('login button', () => (
    <LoginButton isLogged="true" />
  ));
