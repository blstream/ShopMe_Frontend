import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import I18nextProvider from 'core/I18nextProvider';

addDecorator(story => (
  <MemoryRouter>
    <I18nextProvider>
      <div style={{ width: '50%', margin: '5rem 10rem' }}>
         {story()}
       </div>
     </I18nextProvider>
   </MemoryRouter>
 ));

const req = require.context('../src/components/', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
