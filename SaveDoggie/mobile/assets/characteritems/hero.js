import React, { PureComponent } from 'react'
import { Image } from 'react-native'
import CharacterTypeWrapper from '../../wrappers/charactertypewrapper'

class HeroComponent extends PureComponent {
  render() {
    const { character, style } = this.props
    let characterImage = require('../images/sprites/dog/Idle(1).png')

    if (character === 'Cat') {
      characterImage = require('../images/sprites/cat/Idle(1).png')
    } else if (character === 'DogChill') {
      characterImage = require('../images/sprites/dog/Jump(1).png')
    } else if (character === 'CatChill') {
      characterImage = require('../images/sprites/cat/Jump(1).png')
    }

    return (
      <Image
        style={style}
        source={characterImage}
      />
    )
  }
}

const Hero = CharacterTypeWrapper(HeroComponent)
export default Hero
