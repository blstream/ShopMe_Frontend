import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownArticle from './MarkdownArticle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = <MarkdownArticle />;
  ReactDOM.render(element, div);
});
