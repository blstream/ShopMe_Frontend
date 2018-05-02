import React from 'react';
import { translate } from 'react-i18next';
import Category from './Category/Category';
import './CategoryList.css';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const { t } = this.props;
    const hidden = this.state.hidden ? 'hidden' : '';
    const seeMoreButton = hidden
      ? (
        <button className="category-list__arrow" onClick={this.toggleHidden}>
          <span className="category-list__see-more">{t('components.categoryList.seeMore')}</span>
        </button>
      ) : (
        <button className="category-list__arrow category-list__arrow--up" onClick={this.toggleHidden}>
          <span className="category-list__see-less">{t('components.categoryList.seeLess')}</span>
        </button>
      );
    return (
      <div className="category-list">
        <h3 className="category-list__title">
          <span>{t('components.categoryList.title')}</span>
          {t('components.categoryList.subtitle')}
        </h3>
        <div className={`category-list__grid category-list__grid--${hidden}`}>
          <Category category="building" />
          <Category category="companyAndOffice" />
          <Category category="photography" />
          <Category category="graphics" />
          <Category category="tutoring" />
          <Category category="bookkeeping" />
          <Category category="marketingAndAdvertising" />
          <Category category="repairAndService" />
          <Category category="garden" />
          <Category category="bandsAndMusic" />
          <Category category="building" />
          <Category category="housework" />
          <Category category="law" />
          <Category category="programming" />
          <Category category="translations" />
          <Category category="transport" />
        </div>
        <hr className="category-list__hr" />
        <div className="category-list__expand" >
          { seeMoreButton }
        </div>
      </div>
    );
  }
}

export { CategoryList };
export default translate()(CategoryList);
