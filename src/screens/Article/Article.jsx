import React from 'react';
import { translate } from 'react-i18next';
import Layout from 'core/Layout';
import MarkdownArticle from 'components/UI/MarkdownArticle/MarkdownArticle';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    fetch(`/assets/articles/pl/${props.match.params.article}.md`)
      .then(response => response.text())
      .then((article) => {
        this.setState({ content: article });
      });
  }

  render() {
    return (
      <Layout className="article">
        <MarkdownArticle
          source={this.state.content}
        />
      </Layout>
    );
  }
}


export { Article };
export default translate()(Article);
