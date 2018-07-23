import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'


export default class LoginForm extends React.Component {

  render() {
    return (
      <View style = {styles.container}>
        <StatusBar barStyle="light-content"/>
        <TextInput 
        placeholder = "username or email"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => {this.passwordInput.focus();}}
        blurOnSubmit={false}
        keyboardType = "email-address"
        autoCapitalize = "none"
        autoCorrect={false}
        style={styles.input}
        />
        <TextInput 
        placeholder = "password"
        placeholderTextColor = "rgba(255,255,255,0.7)"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        blurOnSubmit={false}
        ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}  onPress={this.props.handler}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: { 
        padding: 20,
        alignItems: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: "#FFF",
        paddingHorizontal: 10,
        width: 300
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
        
    }
});