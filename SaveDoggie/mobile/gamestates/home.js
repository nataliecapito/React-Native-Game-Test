import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Hero from '../assets/characteritems/hero.js'
import MainBackground from '../assets/backgrounds/staticbg'

const styles = StyleSheet.create({
  homeContainerStyle: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'space-around',
    position: 'relative',
    alignItems: 'center',
  },

  playButtonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#b3d9ff',
    borderRadius: 5,
    width: 200,
    maxWidth: 200,
    opacity: 0.7,
  },

  fontLargerTitleStyle: {
    fontSize: 50,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  fontTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
})

export default class Home extends PureComponent {
  render() {
    return (
      <TouchableHighlight
        style={{ flex: 1 }}
        underlayColor='transparent'
        onPress={(event: Object) => {
          event.preventDefault()
          Actions.gamestate1()
        }}
      >
        <View style={styles.homeContainerStyle}>
          <MainBackground />
          <Text allowFontScaling={false} style={styles.fontLargerTitleStyle}>
            SAVE DOGGIE
          </Text>
          <View style={styles.playButtonStyle}>
            <Text allowFontScaling={false} style={styles.fontTextStyle}>
              Go!
            </Text>
          </View>

          <Hero
            movement={true}
            style={{ width: 200, height: 200, resizeMode: 'stretch' }}
          />
        </View>
      </TouchableHighlight>
    )
  }
}
