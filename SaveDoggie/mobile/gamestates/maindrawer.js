import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import Drawer from 'react-native-drawer'
import { Actions, DefaultRenderer } from 'react-native-router-flux'
import Home from './home'
import Instructions from '../instructions/instructions'

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
})

export default class MainDrawer extends Component {
  _navigation: HTMLElement

  render() {
    const { open } = this.props

    return (
      <Drawer
        ref={(drawerRef) => { this._navigation = drawerRef }}
        type='displace'
        open={open}
        content={<Instructions />}
        onOpen={() => {
          Actions.refresh({ key: 'home', open: true, })
        }}
        onClose={() => {
          Actions.refresh({ key: 'home', open: false, })
        }}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        style={styles.drawerContainer}
        tweenHandler={(ratio) => {
          return {
            main: { opacity: Math.max(0.54, 1 - ratio) },
          }
        }}
      >
        <Home />
      </Drawer>
    )
  }
}
