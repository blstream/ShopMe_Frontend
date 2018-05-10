import React from 'react';
import { translate } from 'react-i18next';
import MarkdownArticle from 'components/UI/MarkdownArticle/MarkdownArticle';

class ArticleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const name = this.props.match.params.article;
    http.get(`/assets/articles/pl/${name}.md`, null, { parse: 'text' })
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

export { ArticleScreen };
export default translate()(ArticleScreen);
