import React from 'react';
import OfferDetails from 'components/OfferDetails/OfferDetails';
import FatalError from 'components/App/Errors/FatalError/FatalError';

class OfferDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        title: '',
        category: '',
        baseDescription: '',
        basePrice: null,
        extendedDescription: '',
        extendedPrice: null,
        extraDescription: '',
        extraPrice: null,
        name: '',
        email: '',
        phoneNumber: '',
        additionalInfo: '',
        city: '',
        voivodeship: '',
      },
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const { offerId } = this.props.match.params;
    http.get(`/api/offers/${offerId}`)
      .then((service) => {
        if (service) this.setState({ service });
      });
  }

  render() {
    return (
      <div>
        {this.props.hasError ? <FatalError message="endpointError.offers.get.404" errorImg="NonFatalError" /> : <OfferDetails service={this.state.service} /> }
      </div>
    );
  }
}

export { OfferDetailsScreen };
export default OfferDetailsScreen;
