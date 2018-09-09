import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Image,
} from 'react-native'

const styles = StyleSheet.create({
  BGContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
})

export default class GroundBackground extends PureComponent {
  render() {
    const groundArray = [
      <Image source={require('../images/backgrounds/NormalBG/png/Tiles/2.png')} />,
      <Image source={require('../images/backgrounds/NormalBG/png/Tiles/2.png')} />,
      <Image source={require('../images/backgrounds/NormalBG/png/Tiles/2.png')} />,
      <Image source={require('../images/backgrounds/NormalBG/png/Tiles/2.png')} />,
      <Image source={require('../images/backgrounds/NormalBG/png/Tiles/2.png')} />,
    ]

    return (
      <View style={styles.BGContainerStyle}>
        {groundArray}
      </View>
    )
  }
}
