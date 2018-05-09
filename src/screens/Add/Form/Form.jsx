import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import AddForm from 'components/Add/Form/Form';

class ScreensAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    const { http } = this.props;
    return http.post('/api/offers', data)
      .then(() => this.setState({ fireRedirect: true }));
  }

  render() {
    return (
      <div>
        {this.state.fireRedirect && <Redirect to="/add/form/success" />}
        <AddForm fetchData={this.sendData} />
      </div>
    );
  }
}

export { ScreensAddForm };
export default translate()(ScreensAddForm);
