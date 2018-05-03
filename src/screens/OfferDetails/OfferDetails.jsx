import React from 'react';
import OfferDetails from 'components/OfferDetails/OfferDetails';

class OfferDetailsScreen extends React.Component {
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
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const { offerId } = this.props.match.params;
    http.get(`/api/offers/${offerId}`)
      .then((service) => { this.setState({ service }); });
  }

  render() {
    return (
      <OfferDetails service={this.state.service} />
    );
  }
}

export { OfferDetailsScreen };
export default OfferDetailsScreen;
