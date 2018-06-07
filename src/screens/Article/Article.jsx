import React from 'react';
import { translate } from 'react-i18next';
import MarkdownArticle from 'components/UI/MarkdownArticle/MarkdownArticle';
import FullScreenError from 'components/App/Errors/FullScreenError/FullScreenError';

class ArticleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: undefined,
      hasError: undefined,
    };
  }

  componentDidMount() {
    const name = this.props.match.params.article;
    this.fetchContent(name);
  }

  componentWillReceiveProps(nextProps) {
    const name = nextProps.match.params.article;
    this.fetchContent(name);
  }

  fetchContent(name) {
    const { http } = this.props;
    http.get(`/assets/articles/pl/${name}.md`, null, { parse: 'text' })
      .then((article) => {
        if (article.includes('<!DOCTYPE html>')) {
          this.setState({ hasError: true });
          return;
        }
        this.setState({ content: article });
      });
  }

  render() {
    return this.state.hasError
      ? <FullScreenError error={this.props.error} />
      : <MarkdownArticle source={this.state.content} />;
  }
}

export { ArticleScreen };
export default translate()(ArticleScreen);
