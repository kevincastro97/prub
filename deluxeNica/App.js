/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginCont from './src/components/menuDeluxeNica'
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'esta mierda,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component {
  render() {
    return (
     <View>
       <LoginCont/>
     </View>
    );
  }
}
