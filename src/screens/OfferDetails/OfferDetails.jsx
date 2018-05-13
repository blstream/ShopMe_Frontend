import React from 'react';
import OfferDetails from 'components/OfferDetails/OfferDetails';
import ErrorMessage from 'components/UI/ErrorMessage/ErrorMessage';

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
      error: false,
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const { offerId } = this.props.match.params;
    http.get(`/api/offers/${offerId}`)
      .then((service) => { this.setState({ service }); })
      .catch(() => this.setState({ error: 'true' }));
  }

  render() {
    if (this.state.error) return <ErrorMessage />;
    return <OfferDetails service={this.state.service} />;
  }
}

export { OfferDetailsScreen };
export default OfferDetailsScreen;
