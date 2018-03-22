import React from 'react';
import { translate } from 'react-i18next';
import './ServicesItem.css';

const ServicesItem = props => (
  <li className="services-item">
    <span className="services-item services-item__title">
      {props.index + 1}. {props.value.title}
    </span>
    <span className="services-item services-item__price">{props.value.bundle.price} zł</span>
    <span className="services-item services-item__date">{props.value.date}</span>
  </li>
);

export { ServicesItem };
export default translate()(ServicesItem);
