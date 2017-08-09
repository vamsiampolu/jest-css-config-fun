import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from './App.js'

const app = document.getElementById('root')

const renderWithHmr = Component => {
  render(<AppContainer><Component /></AppContainer>, app)
}

renderWithHmr(App)
if (module.hot) {
  module.hot.accept('./App', () => renderWithHmr(App))
}

render(<App />, document.getElementById('root'))
