import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Image,
  Animated,
} from 'react-native'

export default class Enemy extends PureComponent {
  render() {
    const { moveEnemyVal, enemyStartPosY } = this.props

    const styles = StyleSheet.create({
      EnemyStyle: {
        height: 75,
        width: 100,
        position: 'absolute',
        bottom: this.props.enemyStartPosY,
        right: 0,
        resizeMode: 'stretch',
        transform: [
          { translateX: moveEnemyVal }
        ],
      },
    })

    return (
      <Animated.Image
        source={require('../images/backgrounds/NormalBG/png/Object/Mushroom_1.png')}
        style={styles.EnemyStyle}
      />
    )
  }
}
