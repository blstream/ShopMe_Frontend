import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import MarkdownArticle from 'components/UI/MarkdownArticle/MarkdownArticle';

class ArticleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      fireRedirect: undefined,
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const name = this.props.match.params.article;
    http.get(`/assets/articles/pl/${name}.md`, null, { parse: 'text' })
      .then((article) => {
        this.setState({ content: article });
      })
      .catch(() => this.setState({ fireRedirect: 'error' }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fireRedirect === 'error' && <Redirect to={{ pathname: '/error' }} />}
        <MarkdownArticle source={this.state.content} />
      </React.Fragment>
    );
  }
}

export { ArticleScreen };
export default translate()(ArticleScreen);
