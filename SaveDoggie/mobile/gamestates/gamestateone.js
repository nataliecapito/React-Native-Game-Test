import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Dimensions,
  Text
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ScoreActions from '../core/actions/characteraction'
import Hero from '../assets/characteritems/hero.js'
import Enemy from '../assets/characteritems/enemy.js'
import MainBackground from '../assets/backgrounds/staticbg'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class GameStateOne extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      gameOver: false,
      moveCharacterVal: new Animated.Value(0),
      moveEnemyVal: new Animated.Value(0),
      enemyStartPosY: 50,
      enemySpeed: 4000,
    }

    this._onPress = this.onPress.bind(this)
  }

  componentDidMount() {
    this.mounted = true
    if (this.mounted) {
      this.moveEnemy()
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  onPress() {
    const { moveCharacterVal } = this.state
    let characterRefreshID

    characterRefreshID = setInterval(() => {
      Animated.spring(
        moveCharacterVal,
        {
          toValue: 0,
          tension: 120,
        }
      ).start()
    }, 500)

    Animated.spring(
      moveCharacterVal,
      {
        toValue: height - 850,
        tension: 120,
      }
    ).start(() => {
      clearInterval(characterRefreshID)
    })
  }

  moveEnemy() {
    const { moveEnemyVal, gameOver, moveCharacterVal } = this.state
    moveEnemyVal.setValue(100)
    let collisionRefreshID

    collisionRefreshID = setInterval(() => {
      if (moveEnemyVal._value > -width + 115
        && moveEnemyVal._value < -width + 215
        && moveCharacterVal._value > -1) {
          clearInterval(collisionRefreshID)
          this.setState({ gameOver: true, })
          this.gameOver()
      }
    }, 50)

    setInterval(() => {
      this.setState({ enemySpeed: this.state.enemySpeed - 50, })
    }, 2000)

    Animated.timing(
      moveEnemyVal,
      {
        toValue: -width,
        duration: this.state.enemySpeed,
      }
    ).start(() => {
      if (!gameOver) {
        clearInterval(collisionRefreshID)
        this.setState({ counter: this.state.counter + 1, })
        ScoreActions.setScore(this.state.counter)
        this.moveEnemy()
      }
    })
  }

  gameOver() {
    if (this.state.gameOver && this.mounted) {
      Actions.gamestateyoulost()
    }
  }

  render() {
    const { moveCharacterVal, moveEnemyVal, enemyStartPosY, enemySpeed } = this.state

    const styles = StyleSheet.create({
      oneContainerStyle: {
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'space-around',
        position: 'relative',
        alignItems: 'center',
      },

      chatacterStyle: {
        resizeMode: 'stretch',
        position: 'absolute',
        bottom: 50,
        left: 0,
        transform: [
          { translateY: moveCharacterVal }
        ],
      },
    })

    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={this._onPress}
        style={{ flex: 1 }}
      >
        <View style={styles.oneContainerStyle}>
          <MainBackground />

          <Animated.View style={styles.chatacterStyle}>
            <Hero
              movement={true}
              style={{ width: 200, height: 200 }}
            />
          </Animated.View>

          <Enemy
            moveEnemyVal={moveEnemyVal}
            enemyStartPosY={enemyStartPosY}
          />
        </View>
      </TouchableHighlight>
    )
  }
}
