import React from 'react'
import ReactDOM from 'react-dom'
import { ExampleOffers as Offers } from './Offers'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Offers offers={[]} />, div)
})
