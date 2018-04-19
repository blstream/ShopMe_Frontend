import React from 'react';
import { translate } from 'react-i18next';
import OfferRender from './OfferRender';

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
    return (<OfferRender
      service={this.props.service}
      maskedEmail={this.state.maskedEmail}
      maskedPhone={this.state.maskedPhone}
      phoneButton={this.state.phoneButton}
      emailButton={this.state.emailButton}
      handleUnmaskPhone={this.handleUnmaskPhone}
      handleUnmaskEmail={this.handleUnmaskEmail}
    />);
  }
}

export { OfferDetails };
export default translate()(OfferDetails);
