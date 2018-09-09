import React, { PureComponent } from 'react'
import {
  View,
  Text,
} from 'react-native'
import Hero from '../assets/characteritems/hero.js'
import CharacterTypes from './charactertypes'

const styles = {
  instructionsContainerStyle: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },

  fontLargerTitleStyle: {
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  fontTextStyle: {
    fontSize: 15,
    marginTop: 5,
    color: 'black',
    textAlign: 'center',
  },
}

export default class Instructions extends PureComponent {
  render() {
    const { character } = this.props
    let characterImage = require('../assets/images/sprites/dog/Idle(1).png')

    if (character === 'Cat') {
      characterImage = require('../assets/images/sprites/cat/Idle(1).png')
    }

    return (
      <View style={styles.instructionsContainerStyle}>
        <Hero
          movement={true}
          style={{ width: 100, height: 100, resizeMode: 'stretch' }}
        />

        <Text allowFontScaling={false} style={styles.fontLargerTitleStyle}>
          Fundamentals
        </Text>
        <Text allowFontScaling={false} style={styles.fontTextStyle}>
          Tap, tap, tap. Keep Luna or Chipper jumping to gain the highest score!
        </Text>

        <CharacterTypes />
      </View>
    )
  }
}
