import React from 'react';
import { translate } from 'react-i18next';
import './OfferDetails.css';

class OfferDetails extends React.Component {
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
          phoneNumber: '',
          additionalInfo: '',
        },
      },
      maskedPhone: '',
      maskedEmail: '',
      phoneButton: true,
      emailButton: true,
    };
    this.handleUnmaskEmail = this.handleUnmaskEmail.bind(this);
    this.handleUnmaskPhone = this.handleUnmaskPhone.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}/offers/${this.props.offerId}`)
      .then(response => response.json())
      .then((service) => {
        this.setState({ service });
        this.maskEmail();
        this.maskPhone();
      });
  }

  maskEmail() {
    const index = this.state.service.user.email.search('@');
    const email = `${this.state.service.user.email.slice(0, index + 1)}XXX`;
    return this.setState({ maskedEmail: email });
  }

  maskPhone() {
    const phone = `${this.state.service.user.phoneNumber.slice(0, 3)}XXXXXX`;
    return this.setState({ maskedPhone: phone });
  }

  handleUnmaskPhone() {
    this.setState({ maskedPhone: this.state.service.user.phoneNumber, phoneButton: false });
  }

  handleUnmaskEmail() {
    this.setState({ maskedEmail: this.state.service.user.email, emailButton: false });
  }

  render() {
    const { t } = this.props;
    return (
      <div className="offer-details">
        <h2 className="offer-details__header">{this.state.service.title}</h2>
        <p className="offer-details__category">{this.state.service.category.name}</p>
        <div className="offer-details__contact">
          <div className="offer-details__contact--container">
            <h3 className="offer-details__header-small">{t('components.offerDetails.contact')}</h3>
            <div className="offer-details__contact--container--name">{this.state.service.user.name}</div>
            <div className="offer-details__contact--container--email">{this.state.maskedEmail}
              {this.state.emailButton && <button className="offer-details__contact--button" onClick={this.handleUnmaskEmail}>{t('components.offerDetails.show')}</button>}
            </div>
            <div className="offer-details__contact--container--phone">{this.state.maskedPhone}
              {this.state.phoneButton && <button className="offer-details__contact--button" onClick={this.handleUnmaskPhone}>{t('components.offerDetails.show')}</button>}
            </div>
          </div>
          {this.state.service.user.additionalInfo &&
            <div className="offer-details__contact--additional-info">
              <h3 className="offer-details__contact--additional-info--header">{t('components.offerDetails.aboutMe')}</h3>
              <p>
                {this.state.service.user.additionalInfo}
              </p>
            </div>}
        </div>
        <div className="offer-details__offers">
          <div className="offer-details__offers--base">
            <h3 className="offer-details__offers--base--header">{t('components.offerDetails.baseOffer')}</h3>
            <p className="offer-details__offers--base--description">{this.state.service.baseDescription}</p>
            <p className="offer-details__offers--base--price">{t('components.offerDetails.price')}: {this.state.service.basePrice}zł</p>
          </div>
          {this.state.service.extendedDescription &&
            <div className="offer-details__offers--extended">
              <h3 className="offer-details__offers--extended--header">{t('components.offerDetails.extendedOffer')}</h3>
              <p className="offer-details__offers--extended--description">{this.state.service.extendedDescription}</p>
              <p className="offer-details__offers--extended--price">{t('components.offerDetails.price')}: {this.state.service.extendedPrice}zł</p>
            </div>}
          {this.state.service.extraDescription &&
            <div className="offer-details__offers--extra">
              <h3 className="offer-details__offers--extra--header">{t('components.offerDetails.extraOffer')}</h3>
              <p className="offer-details__offers--extra--description">{this.state.service.extraDescription}</p>
              <p className="offer-details__offers--extra--price">{t('components.offerDetails.price')}: {this.state.service.extraPrice}zł</p>
            </div>}
        </div>
      </div>
    );
  }
}

export { OfferDetails };
export default translate()(OfferDetails);
