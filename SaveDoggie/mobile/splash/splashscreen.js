import React, { Component } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  RefreshControl,
  Image,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  splashContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
})

export default class SplashPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
    }
    this._onRefresh = this.onRefresh.bind(this)
  }

  async componentDidMount() {
    this.mounted = true
    if (this.mounted) {
      this.doStart()
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  onRefresh() {
    this.setState({ refreshing: true, })
    this.doStart()
  }

  doStart() {
    const result = true
    if (result) {
      this.setState({ refreshing: false, })
      Actions.home()
    } else {
      this.setState({ refreshing: false, })
      Actions.downpage()
    }
  }

  render() {
    const fifty = Dimensions.get('window').width * 0.5
    const imageSize = fifty

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
        <View style={styles.splashContainerStyle}>
          <Image
            style={{ width: imageSize, height: imageSize }}
            source={require('../assets/images/sprites/dog/Jump(1).png')}
          />
        </View>
      </ScrollView>
    )
  }
}
