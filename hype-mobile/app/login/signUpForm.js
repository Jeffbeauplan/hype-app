import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import {LinearGradient} from 'expo'

class SignUpForm extends Component {
    static navigationOptions= {
        headerTitle: "Registration",
        headerStyle: {
            backgroundColor: '#FFF'
        }
    };
    render() {
        return (
            <LinearGradient colors={['#e67e22','#d35400']} style={styles.container}>
                <KeyboardAvoidingView behavior="padding" >
                    <StatusBar barStyle="light-content"/>
                    <Text style={styles.header}>Registration</Text>
                    
                    <TextInput style={styles.textinput} placeholder="Name"
                    underlineColorAndroid={"transparent"} placeholderTextColor={"#fff"}
                    returnKeyType="next"
                    onSubmitEditing={() => {this.emailInput.focus();}}/>>
                    
                    <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor={"#fff"}
                    underlineColorAndroid={"transparent"}
                    returnKeyType="next"
                    onSubmitEditing={() => {this.passwordInput.focus();}}
                    ref={(input) => this.emailInput = input}/>>
                    
                    <TextInput style={styles.textinput} placeholder="Password" secureTextEntry
                    underlineColorAndroid={"transparent"} placeholderTextColor={"#fff"}
                    returnKeyType="next"
                    onSubmitEditing={() => {this.confirmInput.focus();}}
                    ref={(input) => this.passwordInput = input}/>>
                    
                    <TextInput style={styles.textinput} placeholder="Confirm password" secureTextEntry
                    underlineColorAndroid={"transparent"} placeholderTextColor={"#fff"}
                    ref={(input) => this.confirmInput = input} returnKeyType = "go"/>>
                    
                <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity colors={['#2980b9','#3498db']} style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View> 
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}
export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60
    },
    buttonContainer: {
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
    regForm: {
        alignSelf: 'stretch'
    },
    header:{
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});