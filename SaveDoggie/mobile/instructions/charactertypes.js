import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'
import Store from 'react-native-simple-store'
import CharacterTypeWrapper from '../core/wrappers/charactertypewrapper'
import CharacterChildren from './children/characterchildren'

const styles = {
  fontSmallerTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  characterContainerStyle: {
    flex: 1,
  },
}

class CharacterTypesComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lockedDog: true,
      lockedCat: true,
    }
  }

  async componentDidMount() {
    this.mounted = true

    if (this.mounted) {
      const [ gamescorehigh ] = await Promise.all([
        Store.get('@SaveDog:gamescorehigh')
      ])

      if (gamescorehigh >= 500) {
        this.setState({ lockedDog: false, })
      } else if (gamescorehigh >= 10000) {
        this.setState({ lockedCat: false, })
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const characterContent = [
      {
        name: 'Dog',
        image: require('../assets/images/sprites/dog/Idle(1).png'),
        locked: false,
        value: '0',
      },
      {
        name: 'Cat',
        image: require('../assets/images/sprites/cat/Idle(6).png'),
        locked: false,
        value: '0',
      },
      {
        name: 'Chill Dog',
        image: require('../assets/images/sprites/dog/Jump(1).png'),
        locked: true,
        value: '500',
      },
      {
        name: 'Chill Cat',
        image: require('../assets/images/sprites/cat/Jump(1).png'),
        locked: true,
        value: '10000',
      },
    ]

    const { character } = this.props
    let characterName = 'Luna'

    if (character === 'Cat') {
      characterName = 'Chipper'
    } else if (character === 'DogChill') {
      characterName = 'Happy Luna'
    } else if (character === 'CatChill') {
      characterName = 'Happy Chipper'
    }

    return (
      <View style={{ marginTop: 30 }}>
        <Text allowFontScaling={false} style={styles.fontSmallerTitleStyle}>
          *Selected: {characterName}
        </Text>

        <ScrollView>
          <View style={styles.characterContainerStyle}>
            <CharacterChildren characterContent={characterContent} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const CharacterTypes = CharacterTypeWrapper(CharacterTypesComponent)
export default CharacterTypes
