import React, { Component } from 'react'
import { translate } from 'react-i18next'
import ExampleTitle from 'components/UI/ExampleTitle/ExampleTitle'
import Offers from 'components/Examples/Offers/Offers'

class ScreensExamplesFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offers: [{ date: 'myDate' }],
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}/offers`)
      .then(response => response.json())
      .then(body => this.setState({ offers: body }))
  }

  render() {
    const { t } = this.props

    return (
      <div>
        <ExampleTitle size="4">
          {t('screens.examples.fetch.title')}
        </ExampleTitle>
        <Offers offers={this.state.offers} />
      </div>
    )
  }
}

// export { ScreensExamplesFetch };
export default translate()(ScreensExamplesFetch)
