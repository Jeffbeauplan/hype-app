import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'

export default class LoginForm extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <TextInput 
        placeholder = "email"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => {this.passwordInput.focus();}}
        blurOnSubmit={false}
        keyboardType = "email-address"
        autoCapitalize = "none"
        autoCorrect={false}
        style={styles.textinput}
        />
        <TextInput 
        placeholder = "password"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="go"
        secureTextEntry
        style={styles.textinput}
        blurOnSubmit={false}
        ref={(input) => this.passwordInput = input}
        />
        
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('AppBottomTabNav')} >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignUpForm')} >
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: { 
        padding: 20,
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10 
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
        
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    textinput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    }
});