import React from 'react';
import { translate } from 'react-i18next';
import MarkdownArticle from 'components/UI/MarkdownArticle/MarkdownArticle';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    fetch(`/assets/articles/pl/${this.props.match.params.article}.md`)
      .then(response => response.text())
      .then((article) => {
        this.setState({ content: article });
      });
  }

  render() {
    return (
      <MarkdownArticle source={this.state.content} />
    );
  }
}

export { Article };
export default translate()(Article);
