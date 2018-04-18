import React from 'react';
import OfferDetails from 'components/OfferDetails/OfferDetails';
import Layout from 'core/Layout';

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
    this.getData = this.getData.bind(this);
  }

  getData(args) {
    return fetch(`${process.env.REACT_APP_API}${args}`)
      .then(response => response.json())
      .then((service) => { this.setState({ service }); });
  }

  render() {
    return (
      <Layout>
        <OfferDetails
          offerId={this.props.match.params.offerId}
          onSubmit={this.getData}
          service={this.state.service}
        />
      </Layout>
    );
  }
}

export { OfferDetailsScreen };
export default OfferDetailsScreen;
