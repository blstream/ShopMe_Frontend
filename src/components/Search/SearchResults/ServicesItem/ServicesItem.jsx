import React from 'react';
import { translate } from 'react-i18next';
import './ServicesItem.css';

const ServicesItem = (props) => {
  const myDate = new Date(props.value.date);
  const date = myDate.toLocaleDateString();
  return (
    <li className="services-item">
      <span className="services-item services-item__title">
        {props.index + 1}. {props.value.title}
      </span>
      <span className="services-item services-item__price">{props.value.basePrice} zł</span>
      <span className="services-item services-item__date">{date}</span>
    </li>
  );
};

export { ServicesItem };
export default translate()(ServicesItem);
