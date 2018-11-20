import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity,TextInput,Button } from 'react-native';


export default class Donee extends React.Component {
  render() {
    return (
    
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginContainer}>
                {/* <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} /> */}
            </View>

            <View style={styles.formContainer}>
            <TextInput style = {styles.input} 
                    autoCapitalize="none" 
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Name' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />
                <TextInput style = {styles.input} 
                    autoCapitalize="none" 
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Email or Mobile Num' 
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />

                <TextInput style = {styles.input}   
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />

                <TextInput style = {styles.input}   
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Confirm Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />

                <Button
                    title="Submit"
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                />
            </View>
            
      </KeyboardAvoidingView>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});
