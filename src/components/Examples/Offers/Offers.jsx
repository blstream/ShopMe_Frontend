import React from 'react';
import { translate } from 'react-i18next';

const Offer = props => <li>{props.value.id}, {props.value.date}, {props.value.title}</li>;


const ExampleOffers = (props) => {
  const { offers } = props;
  const offerItems = offers.map(offer => <Offer key={offer.id} value={offer} />);
  return (
    <ul>
      {offerItems}
    </ul>
  );
};

export { ExampleOffers };
export default translate()(ExampleOffers);
