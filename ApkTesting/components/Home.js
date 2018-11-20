import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';





export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>        
                <View style={styles.navbar}>
                    <Text style={{fontSize:20}}>Donation</Text>
                    <Text>Login/Register</Text>
                </View>
                
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('./images/1.jpg')} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}




const styles = StyleSheet.create({
    navbar:{
        backgroundColor:'#7fffd4',
        padding:10,
        //paddingTop:40,

        flexDirection: 'row',
        justifyContent:'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        //alignItems: 'center',
        flexGrow: 1,
        flexDirection:'row',
        //justifyContent: 'center'
    
    },
    logo: {
        //position: 'absolute',
        width: 500,
        height: 400
    },
});
