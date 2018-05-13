import React from 'react';
import { Redirect } from 'react-router';
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
      fireRedirect: undefined,
    };
  }

  componentDidMount() {
    const { http } = this.props;
    const { offerId } = this.props.match.params;
    http.get(`/api/offers/${offerId}`)
      .then((service) => { this.setState({ service }); })
      .catch(() => this.setState({ fireRedirect: 'error' }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.fireRedirect === 'error' && <Redirect to={{ pathname: '/error' }} />}
        <OfferDetails service={this.state.service} />
      </React.Fragment>
    );
  }
}

export { OfferDetailsScreen };
export default OfferDetailsScreen;
