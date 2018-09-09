import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import CharacterTypeWrapper from '../core/wrappers/charactertypewrapper'
import MainBackground from '../assets/backgrounds/staticbg'

const styles = StyleSheet.create({
  deadContainerStyle: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  imageStyle: {
    width: 250,
    height: 250,
  },

  fontTextStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 10,
  },
})

class GameStateDeadComponent extends PureComponent {
  render() {
    const { character } = this.props
    let deadImage = require('../assets/images/sprites/dog/Dead(10).png')

    if (character === 'Cat') {
      deadImage = require('../assets/images/sprites/cat/Dead(10).png')
    }

    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={(event: Object) => {
          event.preventDefault()
          Actions.home()
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.deadContainerStyle}>
          <MainBackground />

          <Text allowFontScaling={false} style={styles.fontTextStyle}>
            GAME OVER
          </Text>
          <Text allowFontScaling={false} style={styles.fontTextStyle}>
            Whoops, looks like you died. (TAP) anywhere to begin again!
          </Text>

          <Image
            style={styles.imageStyle}
            source={deadImage}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

const GameStateDead = CharacterTypeWrapper(GameStateDeadComponent)
export default GameStateDead
