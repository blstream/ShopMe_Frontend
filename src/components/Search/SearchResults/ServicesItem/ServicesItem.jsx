import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ServicesItem.css';

const ServicesItem = (props) => {
  const myDate = new Date(props.value.date);
  const date = myDate.toLocaleDateString();
  return (
    <li className="services-item">
      <Link
        className="services-item__title"
        to={`/offer/${props.value.id}`}
      >
        {((props.page - 1) * 10) + props.index + 1}. {props.value.title}
      </Link>
      <span className="services-item__span">{props.t(`components.UI.categorySelect.categoryOptions.${props.value.category.name}`)}</span>
      <span className="services-item__span">{props.value.basePrice} {props.t('components.foundSearchResults.currency')}</span>
      <span className="services-item__span">{date}</span>
    </li>
  );
};

export { ServicesItem };
export default translate()(ServicesItem);
