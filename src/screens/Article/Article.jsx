import React from 'react';
import { translate } from 'react-i18next';
import MarkdownArticle from 'components/UI/MarkdownArticle/MarkdownArticle';
import ErrorMessage from 'components/UI/ErrorMessage/ErrorMessage';

class ArticleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      error: false,
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const name = this.props.match.params.article;
    http.get(`/assets/articles/pl/${name}.md`, null, { parse: 'text' })
      .then((article) => {
        this.setState({ content: article });
      })
      .catch(() => this.setState({ error: 'true' }));
  }

  render() {
    if (this.state.error) return <ErrorMessage />;
    return <MarkdownArticle source={this.state.content} />;
  }
}

export { ArticleScreen };
export default translate()(ArticleScreen);
