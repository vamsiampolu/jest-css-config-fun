import React from 'react'

import './non-existant.css'
import './really-bad.css'
import './why-do-you-even-need-this.css'

export default class App extends React.Component {
  onClick = e => {
    console.log('You have clicked on the div')
  }

  render () {
    const {props, onClick} = this
    const {recipe} = props
    return <div onClick={onClick}>To make {recipe} Just add water</div>
  }
}

App.defaultProps = {
  recipe: 'Instant Noodles'
}
