import React, { PureComponent } from 'react'
import {
  View,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native'
import CharacterActions from '../../core/actions/characteraction'

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },

  characterButtonStyle: {
    width: 85,
    height: 85,
    backgroundColor: '#b3d9ff',
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 10,
  },

  characterButtonStyleLocked: {
    width: 85,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#b3d9ff',
    position: 'relative',
  },
  lockTextStyle: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}

export default class CharacterChildren extends PureComponent {
  render() {
    const { characterContent } = this.props
    const content = []

    for (const characters of characterContent) {
      const { name, image, locked, value } = characters

      if (!locked) {
        content.push(
          <TouchableHighlight
            style={styles.characterButtonStyle}
            underlayColor='white'
            onPress={(event: Object) => {
              event.preventDefault()
              CharacterActions.setCharacter(name)
            }}
          >
            <View>
              <Image
                style={{ width: 100, height: 100 }}
                source={image}
              />
            </View>
          </TouchableHighlight>
        )
      } else {
        content.push(
          <View style={styles.characterButtonStyleLocked}>
            <Text allowFontScaling={false} style={styles.lockTextStyle}>
              {value}
            </Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={image}
            />
          </View>
        )
      }
    }

    return (
      <View style={styles.buttonContainerStyle}>
        {content}
      </View>
    )
  }
}
