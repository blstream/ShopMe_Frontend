import React from 'react';
import { translate } from 'react-i18next';
import './OfferContact.css';

class OfferContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneMasked: true,
      isEmailMasked: true,
      wasButtonClicked: false,
    };
    this.handleUnmaskPrivateData = this.handleUnmaskPrivateData.bind(this);
  }

  handleUnmaskPrivateData() {
    this.setState({
      isPhoneMasked: false,
      isEmailMasked: false,
      wasButtonClicked: true,
    });
  }

  render() {
    const { t } = this.props;
    const index = this.props.serviceUser.user.email.search('@');
    const email = `${this.props.serviceUser.user.email.slice(0, index + 1)}***`;
    const phone = `${this.props.serviceUser.user.phoneNumber.slice(0, 3)} *** ***`;
    return (
      <div className="contact__container">
        <div className="contact__section--category">
          <img
            className="contact__category--img"
            src={`${process.env.PUBLIC_URL}/assets/images/categories/category_${this.props.serviceUser.category.name}.png`}
            alt={t(`components.UI.categorySelect.categoryOptions.${this.props.serviceUser.category.name}`)}
          />
          <p className="contact__category--img-name">
            {t(`components.UI.categorySelect.categoryOptions.${this.props.serviceUser.category.name}`)}
          </p>
        </div>
        <div className="contact__section--data">
          <h2 className="contact__header--data">{t('components.offerDetails.contact')}</h2>
          <p className="contact__p--big">{this.props.serviceUser.user.name}</p>
          <p className="contact__p--big">{this.state.isEmailMasked ? email : this.props.serviceUser.user.email}</p>
          <p className="contact__p--big">
            tel. {this.state.isPhoneMasked ? phone : this.props.serviceUser.user.phoneNumber}
          </p>
          <p className="contact__p--big">{this.props.serviceUser.user.voivodeship.name}</p>
          <p className="contact__p--big">{this.props.serviceUser.user.city}</p>
          <p className="contact__p--big">
            {!this.state.wasButtonClicked &&
            <button className="contact__button--unhide" onClick={this.handleUnmaskPrivateData}>
              {t('components.offerDetails.show')}
            </button>
          }
          </p>
        </div>
        <div className="contact__section--aboutme">
          <h2 className="contact__header--aboutme">{t('components.offerDetails.aboutMe')}</h2>
          <p className="contact__p--small">{this.props.serviceUser.user.additionalInfo}</p>
        </div>
      </div>
    );
  }
}

export { OfferContact };
export default translate()(OfferContact);
