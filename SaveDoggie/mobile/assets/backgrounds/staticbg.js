import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import BackdropBackground from './backdropbg'
import GroundBackground from './groundbg'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  bgImageContainer: {
    flex: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },

  tilesImageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
})

export default class MainBackground extends PureComponent {
  render() {
    return (
      <View style={styles.bgImageContainer}>
        <BackdropBackground />

        <View style={styles.tilesImageContainer}>
          <GroundBackground />
        </View>
      </View>
    )
  }
}
