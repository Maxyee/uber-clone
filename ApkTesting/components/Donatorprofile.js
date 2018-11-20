import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TextInput,Button,Image } from 'react-native';


export default class Donatorprofile extends React.Component {
  render() {
    return (
    
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require('./images/profilepicture.jpg')} />
                <View>
                    <Text>UserName</Text>
                </View>
            </View>

            <View style={styles.formContainer}>

                <View style={styles.button}>
                    <Text style={styles.buttonText}>Edit</Text>
                </View>
                <Text style = {styles.name} >Name</Text>
                <Text style = {styles.email}>Email</Text>

                
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
    },
    button:{
        width: 260,
        justifyContent: 'flex-end',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },

    name:{
        color: 'white'
    },

    email:{
        color: 'white'
    }

});
