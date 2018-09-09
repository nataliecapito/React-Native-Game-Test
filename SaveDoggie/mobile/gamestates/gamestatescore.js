import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import ScoreNumberWrapper from '../core/wrappers/scorenumberwrapper'

class GameStateScoreComponent extends PureComponent {
  render() {
    return (
      <Text
        allowFontScaling={false}
        style={{
          padding: 10,
          paddingTop: 0,
          paddingBottom: 0,
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >
        Score: {this.props.score}
      </Text>
    )
  }
}

const GameStateScore = ScoreNumberWrapper(GameStateScoreComponent)
export default GameStateScore
