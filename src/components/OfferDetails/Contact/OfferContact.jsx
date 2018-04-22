import React from 'react';
import { translate } from 'react-i18next';
import AdditionalInfo from './AdditionalInfo';
import './OfferContact.css';

class OfferContact extends React.Component {
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

  handleUnmaskPhone() {
    this.setState({ maskedPhone: this.props.serviceUser.phoneNumber, phoneButton: false });
  }

  handleUnmaskEmail() {
    this.setState({ maskedEmail: this.props.serviceUser.email, emailButton: false });
  }

  render() {
    const { t } = this.props;
    const index = this.props.serviceUser.email.search('@');
    const email = `${this.props.serviceUser.email.slice(0, index + 1)}XXX`;
    const phone = `${this.props.serviceUser.phoneNumber.slice(0, 3)}XXXXXX`;
    return (
      <div className="offer-details__contact">
        <div className="offer-details__contact--container">
          <h3 className="offer-details__header--small">{t('components.offerDetails.contact')}</h3>
          <div className="offer-details__contact--data">{this.props.serviceUser.name}</div>
          <div className="offer-details__contact--data">{this.state.maskedEmail ? this.state.maskedEmail : email}
            {this.state.emailButton && <button className="offer-details__contact--button" onClick={this.handleUnmaskEmail}>{t('components.offerDetails.show')}</button>}
          </div>
          <div className="offer-details__contact--data">{this.state.maskedPhone ? this.state.maskedPhone : phone}
            {this.state.phoneButton && <button className="offer-details__contact--button" onClick={this.handleUnmaskPhone}>{t('components.offerDetails.show')}</button>}
          </div>
        </div>
        {this.props.serviceUser.additionalInfo &&
        <AdditionalInfo additionalInfo={this.props.serviceUser.additionalInfo} />}
      </div>
    );
  }
}

export { OfferContact };
export default translate()(OfferContact);
