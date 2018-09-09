import React, { Component } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  RefreshControl,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import MainBackground from '../assets/backgrounds/staticbg'

const styles = StyleSheet.create({
  downpageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    overflow: 'hidden',
  },
})

export default class DownPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      refreshing: false,
    }

    this._onRefresh = this.onRefresh.bind(this)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.mounted = true
    if (this.mounted) {
      this.spin()
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  onRefresh() {
    this.setState({ refreshing: true, })
    Actions.splash()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
      }
    ).start(() => this.spin())
  }

  render() {
    const fifty = Dimensions.get('window').width * 0.5
    const imageSize = fifty / 1.5

    const spin = this.spinValue.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ '0deg', '360deg' ],
    })

    return (
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <View style={styles.downpageStyle}>
          <MainBackground />
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Image
              style={{ width: imageSize, height: imageSize }}
              source={require('../assets/images/sprites/dog/Dead(10).png')}
            />
          </Animated.View>

          <Text
            allowFontScaling={false}
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            Whoops! Do not worry, we will be back real soon!
          </Text>
        </View>
      </ScrollView>
    )
  }
}
