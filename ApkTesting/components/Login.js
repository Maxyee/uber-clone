import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';




export default class Login extends React.Component {
    constructor(props) {
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
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Email or Mobile Num'
                        placeholderTextColor='rgba(225,225,225,0.7)' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Password'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={() => navigate('Register')}>Create a New Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={() => navigate('Donatorprofile')}>Donator Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={() => navigate('Doneeprofile')}>Donee Profile</Text>
                    </TouchableOpacity>

                    <Text>ForGet Your Password?</Text>
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
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
