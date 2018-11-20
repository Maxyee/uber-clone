/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Donator from './components/Donator';
import Donee from './components/Donee';
import LoginForm from './components/LoginForm';
import Donatorprofile from './components/Donatorprofile';
import Doneeprofile from './components/Doneeprofile';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Home/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Home:{
      screen:Home
    },
    Login: {
      screen: Login
    },

    Register:{
      screen: Register
    },

    Donator:{
      screen: Donator
    },

    Donee:{
      screen:Donee
    },

    LoginForm:{
      screen:LoginForm
    },

    Donatorprofile:{
      screen:Donatorprofile
    },

    Doneeprofile:{
      screen:Doneeprofile
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
) 

export default createAppContainer(AppStackNavigator);