
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ExampleTitle from 'components/UI/ExampleTitle/ExampleTitle';
import IPAddress from 'components/Examples/IPAddress/IPAddress';

class ScreensExamplesFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}/ip`)
      .then(response => response.json())
      .then(body => this.setState({ ip: body.origin }));
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <ExampleTitle size="4">{t('screens.examples.fetch.title')}</ExampleTitle>
        <IPAddress ip={this.state.ip} />
      </div>
    );
  }
}

// export { ScreensExamplesFetch };
export default translate()(ScreensExamplesFetch);
