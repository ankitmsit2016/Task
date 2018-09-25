/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header} from 'react-native-elements'
import {AppNavigator} from './src/Components/navigator'
import Login from './src/Screens/LoginScreen'
import ProfileEditForm from './src/Screens/ProfileEditForm'
import PaymentScreen from './src/Screens/PaymentScreen'
import ReferAndEarn from './src/Screens/ReferAndEarn'
import TransictionHistory from './src/Screens/TransictionHistory'




export default class App extends Component<Props> {
  render() {
    return (
      //<Login/>
      //<ProfileEditForm/>
      //<ReferAndEarn/>
      <AppNavigator/>
      //<PaymentScreen/>
      //<TransictionHistory/>
    );
  }
}
