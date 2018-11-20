import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity,TextInput,Image } from 'react-native';


export default class Login extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
    
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require('./images/donation.jpg')} />
            </View>

            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => navigate('Donator')}>Sign Up as Donator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText} onPress={() => navigate('Donee')}>Sign Up as Donee</Text>
                </TouchableOpacity> 
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
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom:15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});
