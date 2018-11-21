import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity,TextInput,Image } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ScrollView } from 'react-native-gesture-handler';


var radio_propsGender = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 },
];

var radio_propsUser = [
    {label: 'Donator', value: 0 },
    {label: 'Donee', value: 1 },
];



export default class Login extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
    
    <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.buttonTextNav} onPress={() => navigate('Login')}>Login</Text>
                    <Text style={styles.donation}>Donation</Text>
                    <Text style={styles.buttonTextNav} onPress={() => navigate('Register')}>Register</Text>
                </View>

                <View style={styles.loginContainer}>
                    {/* <Image resizeMode="contain" style={styles.logo} source={require('./images/donation.jpg')} /> */}
                    {/* <Text style={{fontSize:50, justifyContent: 'center', alignItems: 'center',}}>Donation</Text> */}

                </View>

                <View style={styles.formContainer}>
                    
                    <RadioForm
                        radio_props={radio_propsUser}
                        initial={0}
                        formHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Name'
                        placeholderTextColor='black' 
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='black' 
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Re Enter Email'
                        placeholderTextColor='black' 
                    />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry
                    />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Confirm Password'
                        placeholderTextColor='black'
                        secureTextEntry
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Country'
                        placeholderTextColor='black' 
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='number-pad'
                        returnKeyType="next"
                        placeholder='Zip Code'
                        placeholderTextColor='black' 
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='number-pad'
                        returnKeyType="next"
                        placeholder='Contact Number'
                        placeholderTextColor='black' 
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Address'
                        placeholderTextColor='black' 
                    />

                    <RadioForm
                        radio_props={radio_propsGender}
                        initial={0}
                        formHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                    />

                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Organization'
                        placeholderTextColor='black' 
                    />

                    <Text>I Agree to the privacy policy and Terms of Service</Text>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Save and Continue</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Cancle</Text>
                    </TouchableOpacity>

                </View>

        </KeyboardAvoidingView>
      </ScrollView>
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
    navbar:{
        backgroundColor:'#7fffd4',
        padding:10,
        //paddingTop:40,

        flexDirection: 'row',
        justifyContent:'space-between'
    },
    donation:{
        fontSize:30
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginContainer: {
        alignItems: 'center',
        //flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },

    input: {
        height: 40,
        //backgroundColor: 'rgba(225,225,225,0.2)',
        backgroundColor: '#EEF2B9',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom: 15
    },
    buttonTextNav: {
        color: 'orange',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
