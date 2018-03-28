import React from 'react';
import 'components/OfferProfile/OfferProfile.css';

export default class OfferProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        title: '',
        category: {
          name: '',
        },
        baseDescription: '',
        basePrice: null,
        extendedDescription: '',
        extendedPrice: null,
        extraDescription: '',
        extraPrice: null,
        user: {
          name: '',
          email: '',
          phoneNumber: null,
          additionalInfo: '',
        },
      },
    };
  }

  render() {
    return (
      <div className="offer-profile">
        <h2 className="offer-profile__header">{this.state.service.title}</h2>
        <p className="offer-profile__category">{this.state.service.category.name}</p>
        <h3 className="offer-profile__header-small">Kontakt</h3>
        <div className="offer-profile__contact">
          <span className="offer-profile__contact--name">{this.state.service.user.name}</span>
          <span className="offer-profile__contact--email">{this.state.service.user.email}</span>
          <span className="offer-profile__contact--phone">{this.state.service.user.phoneNumber}</span>
          {this.state.service.user.additionalInfo && <span className="offer-profile__contact--additional-info">{this.state.service.user.additionalInfo}</span>}
        </div>
        <div className="offer-profile__offers">
          <div className="offer-profile__offers--base">
            <h3 className="offer-profile__offers--base--header">Oferta podstawowa</h3>
            <p className="offer-profile__offers--base--description">{this.state.service.baseDescription}</p>
            <p className="offer-profile__offers--base--price">Cena: {this.state.service.basePrice}zł</p>
          </div>
          {this.state.service.extendedDescription &&
            <div className="offer-profile__offers--extended">
              <h3 className="offer-profile__offers--extended--header">Oferta rozszerzona</h3>
              <p className="offer-profile__offers--extended--description">{this.state.service.extendedDescription}</p>
              <p className="offer-profile__offers--extended--price">Cena: {this.state.service.extendedPrice}zł</p>
            </div>}
          {this.state.service.extraDescription &&
            <div className="offer-profile__offers--extra">
              <h3 className="offer-profile__offers--extra--header">Oferta ekstra</h3>
              <p className="offer-profile__offers--extra--description">{this.state.service.extraDescription}</p>
              <p className="offer-profile__offers--extra--price">Cena: {this.state.service.extraPrice}zł</p>
            </div>}
        </div>
      </div>
    );
  }
}
