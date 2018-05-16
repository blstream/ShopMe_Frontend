import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Category.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { t } = this.props;
    return (
      <Link href="/" to={`/search?category=${this.props.category}`} className="category">
        <img
          className="category__img"
          src={`assets/images/categories/category_${this.props.category}.png`}
          alt={t(`components.UI.categorySelect.categoryOptions.${this.props.category}`)}
        />
        <p className="category__name">{t(`components.UI.categorySelect.categoryOptions.${this.props.category}`)}</p>
      </Link>
    );
  }
}

export { Category };
export default translate()(Category);
