import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import SaveDoggieAPP from './mobile/savedoggieapp'

export default class SaveDoggie extends Component {
  render() {
    return (
      <SaveDoggieAPP />
    )
  }
}

AppRegistry.registerComponent('SaveDoggie', () => SaveDoggie)
