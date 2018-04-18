import React from 'react';
import { translate } from 'react-i18next';
import './OfferDetails.css';

class OfferDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskedPhone: '',
      maskedEmail: '',
      phoneButton: true,
      emailButton: true,
    };
    this.handleUnmaskEmail = this.handleUnmaskEmail.bind(this);
    this.handleUnmaskPhone = this.handleUnmaskPhone.bind(this);
  }

  componentDidMount() {
    this.props.onSubmit(`/offers/${this.props.offerId}`)
      .then(() => this.maskEmail())
      .then(() => this.maskPhone());
  }

  maskEmail() {
    const index = this.props.service.user.email.search('@');
    const email = `${this.props.service.user.email.slice(0, index + 1)}XXX`;
    return this.setState({ maskedEmail: email });
  }

  maskPhone() {
    const phone = `${this.props.service.user.phoneNumber.slice(0, 3)}XXXXXX`;
    return this.setState({ maskedPhone: phone });
  }

  handleUnmaskPhone() {
    this.setState({ maskedPhone: this.props.service.user.phoneNumber, phoneButton: false });
  }

  handleUnmaskEmail() {
    this.setState({ maskedEmail: this.props.service.user.email, emailButton: false });
  }

  render() {
    const { t } = this.props;
    const baseHeader = t('components.offerDetails.baseOffer').split(' ');
    baseHeader.splice(1, 0, <br key={1} />);
    const extendedHeader = t('components.offerDetails.extendedOffer').split(' ');
    extendedHeader.splice(1, 0, <br key={2} />);
    const extraHeader = t('components.offerDetails.extraOffer').split(' ');
    extraHeader.splice(1, 0, <br key={3} />);
    return (
      <div className="offer-details">
        <h2 className="offer-details__header">{this.props.service.title}</h2>
        <p className="offer-details__category">{this.props.service.category.name}</p>
        <div className="offer-details__contact">
          <div className="offer-details__contact--container">
            <h3 className="offer-details__header-small">{t('components.offerDetails.contact')}</h3>
            <div className="offer-details__contact--container--name">{this.props.service.user.name}</div>
            <div className="offer-details__contact--container--email">{this.state.maskedEmail}
              {this.state.emailButton && <button className="offer-details__contact--button" onClick={this.handleUnmaskEmail}>{t('components.offerDetails.show')}</button>}
            </div>
            <div className="offer-details__contact--container--phone">{this.state.maskedPhone}
              {this.state.phoneButton && <button className="offer-details__contact--button" onClick={this.handleUnmaskPhone}>{t('components.offerDetails.show')}</button>}
            </div>
          </div>
          {this.props.service.user.additionalInfo &&
            <div className="offer-details__contact--additional-info">
              <h3 className="offer-details__contact--additional-info--header">{t('components.offerDetails.aboutMe')}</h3>
              <p>
                {this.props.service.user.additionalInfo}
              </p>
            </div>}
        </div>
        <div className="offer-details__offers">
          <div className="offer-details__offers--base">
            <h3 className="offer-details__offers--base--header">{baseHeader}</h3>
            <p className="offer-details__offers--base--description">{this.props.service.baseDescription}</p>
            <p className="offer-details__offers--base--price">{t('components.offerDetails.price')}: {this.props.service.basePrice}zł</p>
          </div>
          {this.props.service.extendedDescription &&
            <div className="offer-details__offers--extended">
              <h3 className="offer-details__offers--extended--header">{extendedHeader}</h3>
              <p className="offer-details__offers--extended--description">{this.props.service.extendedDescription}</p>
              <p className="offer-details__offers--extended--price">{t('components.offerDetails.price')}: {this.props.service.extendedPrice}zł</p>
            </div>}
          {this.props.service.extraDescription &&
            <div className="offer-details__offers--extra">
              <h3 className="offer-details__offers--extra--header">{extraHeader}</h3>
              <p className="offer-details__offers--extra--description">{this.props.service.extraDescription}</p>
              <p className="offer-details__offers--extra--price">{t('components.offerDetails.price')}: {this.props.service.extraPrice}zł</p>
            </div>}
        </div>
      </div>
    );
  }
}

export { OfferDetails };
export default translate()(OfferDetails);
