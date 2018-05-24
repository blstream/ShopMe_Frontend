import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ServicesItem.css';

const ServicesItem = (props) => {
  const myDate = new Date(props.value.date);
  const date = myDate.toLocaleDateString();
  return (
    <li className="services-item">
<<<<<<< HEAD
      <Link
        className="services-item__title"
        to={`/offer/${props.value.id}`}
      >
        {((props.page - 1) * 10) + props.index + 1}. {props.value.title}
      </Link>
      <span className="services-item__span">{props.t(`components.UI.categorySelect.categoryOptions.${props.value.category}`)}</span>
      <span className="services-item__span">{props.value.basePrice} {props.t('components.foundSearchResults.currency')}</span>
      <span className="services-item__span">{date}</span>
=======
      <div className="services-item__name services-item__element">
        <Link
          className="services-item__title"
          to={`/offer/${props.value.id}`}
        >
          {props.value.title}
        </Link>
        <p>{props.value.user.city}</p>
      </div>
      <div className="services-item__element services-item__element--category">
        <span className="services-item__span services-item__category">{props.t(`components.UI.categorySelect.categoryOptions.${props.value.category.name}`)}</span>
      </div>
      <div className="services-item__element">
        <span className="services-item__price-prefix">{props.t('components.foundSearchResults.prefix')}</span>
        <span className="services-item__span services-item__price">
          {props.value.basePrice} {props.t('components.foundSearchResults.currency')}
        </span>
        <p>dostępne inne pakiety</p>
      </div>
      <div className="services-item__element">
        <span className="services-item__date">{date}</span>
      </div>
>>>>>>> Add search results styles
    </li>
  );
};

export { ServicesItem };
export default translate()(ServicesItem);
