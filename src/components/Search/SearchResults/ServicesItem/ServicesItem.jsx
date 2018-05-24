import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ServicesItem.css';

const ServicesItem = (props) => {
  const myDate = new Date(props.value.date);
  const date = myDate.toLocaleDateString();
  return (
    <li className="services-item">
      <Link to={`/offer/${props.value.id}`}>
        <div className="services-item__name services-item__element">
          <h4 className="services-item__title">
            {props.value.title}
          </h4>
          <p>{props.t(`components.UI.voivodeship.list.${props.value.voivodeship}`)}, {props.value.city}</p>
        </div>
        <div className="services-item__element services-item__element--category">
          <span className="services-item__span services-item__category">{props.t(`components.UI.categorySelect.categoryOptions.${props.value.category}`)}</span>
        </div>
        <div className="services-item__element">
          {props.value.extendedDescription && <span className="services-item__price-prefix">{props.t('components.foundSearchResults.prefix')}</span>}
          <span className="services-item__span services-item__price">
            {props.value.basePrice} {props.t('components.foundSearchResults.currency')}
          </span>
          {props.value.extendedDescription && <p>{props.t('components.foundSearchResults.moreOptions')}</p>}
        </div>
        <div className="services-item__element">
          <span className="services-item__span services-item__date">{date}</span>
        </div>
      </Link>
    </li>
  );
};

export { ServicesItem };
export default translate()(ServicesItem);
