import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Store from 'react-native-simple-store'
import SplashPage from './splash/splashscreen'
import DownPage from './splash/downpage'
import MainDrawer from './gamestates/maindrawer'
import GameStateOne from './gamestates/gamestateone'
import GameStateDead from './gamestates/gamestateyoulost'
import GameStateScore from './gamestates/gamestatescore'

const styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: '#b3d9ff',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },

  navBarFontStyle: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export default class SaveDoggieApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      highScore: 0,
    }
  }

  async componentDidMount() {
    const [ gamescorehigh ] = await Promise.all([
      Store.get('@SaveDog:gamescorehigh')
    ])
    this.setState({ highScore: gamescorehigh, })
  }

  render() {
    const getSceneStyle = () => ({
      backgroundColor: 'white',
    })

    let { highScore } = this.state

    if (highScore === null || highScore === undefined) {
      highScore = 0
    }

    return (
      <Router getSceneStyle={getSceneStyle}>
        <Scene key='root'>
          <Scene
            key='splash'
            type='reset'
            title=''
            component={SplashPage}
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key='downpage'
            type='reset'
            title=''
            component={DownPage}
            hideNavBar={true}
          />

          <Scene
            key='home'
            title=''
            component={MainDrawer}
            hideNavBar={false}
            open={false}
            renderLeftButton={() => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Actions.refresh({ key: 'home', open: true })
                  }}
                >
                  <Text allowFontScaling={false} style={styles.navBarFontStyle}>
                    ?
                  </Text>
                </TouchableOpacity>
              )
            }}
            onLeft={() => {
              Actions.refresh({ key: 'home', open: true })
            }}
            renderRightButton={() => {
              return (
                <Text allowFontScaling={false} style={styles.navBarFontStyle}>
                  High score: {highScore}
                </Text>
              )
            }}
            navigationBarStyle={styles.navBarStyle}
            allowFontScaling={false}
          />

          <Scene
            key='gamestate1'
            title=''
            component={GameStateOne}
            hideNavBar={false}
            renderLeftButton={() => {
              return (
                <View></View>
              )
            }}
            renderRightButton={() => {
              return (
                <GameStateScore />
              )
            }}
            navigationBarStyle={styles.navBarStyle}
            allowFontScaling={false}
          />
          <Scene
            key='gamestateyoulost'
            title=''
            component={GameStateDead}
            hideNavBar={false}
            renderLeftButton={() => {
              return (
                <Text allowFontScaling={false} style={styles.navBarFontStyle}>
                  You Lost :(
                </Text>
              )
            }}
            renderRightButton={() => {
              return (
                <GameStateScore />
              )
            }}
            navigationBarStyle={styles.navBarStyle}
            allowFontScaling={false}
          />
        </Scene>
      </Router>
    )
  }
}
