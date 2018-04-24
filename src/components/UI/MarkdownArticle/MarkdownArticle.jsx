import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

class MarkdownArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ReactMarkdown source={this.props.source} />
    );
  }
}

export { MarkdownArticle };
export default translate()(MarkdownArticle);
