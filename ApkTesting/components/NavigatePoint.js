import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';
import Donator from './Donator';
import Donee from './Donee';

export default class NavigatePoint extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        
      
        return (
        <View style={styles.container}>
              <Loginrelatedpages/>
        </View>
      );
    }
  }

  const Loginrelatedpages = createStackNavigator({
        LoginForm:{
            screen:LoginForm
        },

        Donator:{
            screen:Donator
        },

        Donee:{
            screen:Donee
        }
    })
  
  const styles = StyleSheet.create({
    container: {
        padding: 20
       },
       input:{
           height: 40,
           backgroundColor: 'rgba(225,225,225,0.2)',
           marginBottom: 10,
           padding: 10,
           color: '#fff'
       },
       buttonContainer:{
           backgroundColor: '#2980b6',
           paddingVertical: 15,
           marginBottom:15
       },
       buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700'
       }
  });