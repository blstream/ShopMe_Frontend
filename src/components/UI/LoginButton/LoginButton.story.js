import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import I18nextProvider from 'core/I18nextProvider';
import LoginButton from './LoginButton';

storiesOf('LoginButton', module)
  .addDecorator(story => (
    <MemoryRouter>
      <I18nextProvider>
        <div style={{
            width: '50%',
            margin: '5rem 10rem',
          }}
        >
          {story()}
        </div>
      </I18nextProvider>
    </MemoryRouter>
  ))
  .add('form button', (() =>
    <LoginButton isLogged="true" />
  ));
