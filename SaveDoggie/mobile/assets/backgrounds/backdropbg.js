import React, { PureComponent } from 'react'
import { Image, View } from 'react-native'

export default class StaticBackground extends PureComponent {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../images/backgrounds/NormalBG/png/BG/BG.png')} />
      </View>
    )
  }
}
