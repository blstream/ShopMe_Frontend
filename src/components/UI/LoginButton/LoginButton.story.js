import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { MemoryRouter } from 'react-router-dom';
import { t } from 'react-i18next';
import { LoginButton } from './LoginButton';

storiesOf('LoginButton', module)
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
    <MemoryRouter>
      <LoginButton
        isLogged="true"
        t="t('components.UI.loginButton.labelLogged')"
      />
    </MemoryRouter>
    )
  )
