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
    fetch(`${process.env.REACT_APP_API}/offers/${this.props.match.params.offerId}`)
      .then(response => response.json())
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
