import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

export default class LoginForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        
      
        return (
        <View style={styles.container}>
              <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email or Mobile Num' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}   
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText} onPress={() => this.props.nav.navigate('Register')}>Create a New Account</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText} onPress={() => this.props.nav.navigate('Donator')}>Create a New Account</Text>
                </TouchableOpacity> 

                <Text>ForGet Your Password?</Text>
        </View>
      );
    }
  }

  
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