import React from 'react'
import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'

import './add-new-offer.css'

const RedirectButton = withRouter(({ history }) => (
  <button
    type="button"
    className="btn"
    onClick={() => {
      history.push(/*'/add-new-offer/form'*/ '/examples/fetch')
    }}
  >
    <i className="fas fa-plus-circle" />
  </button>
))

const AddNewOffer = () => {
  return (
    <div className="container">
      <div className="logo">
        <span>Shop Me</span>
      </div>
      <div className="row">
        <div className="wrapper">
          <div className="wrapper__btn">
            <RedirectButton />
          </div>
          <div className="wrapper__text">
            <span className="wrapper__text--letter-spacing">Dodaj ofertę</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AddNewOffer }
export default translate()(AddNewOffer)
