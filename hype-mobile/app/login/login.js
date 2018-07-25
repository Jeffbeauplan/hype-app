import React from 'react';
import { TextInput , StatusBar ,StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LoginForm from './loginForm'
import {navigationOptions} from "react-navigation"
import { Header } from '../../node_modules/react-native-elements';
import {LinearGradient} from 'expo'

export default class Login extends React.Component {
  
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <LinearGradient colors={['#e67e22','#d35400']} style={styles.container}  >
        <KeyboardAvoidingView behavior="padding" >
         
          <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source = {require("../../images/logo.png")}
            /> 
            <Text style = {styles.name} >The Hype App </Text>
            <Text style={styles.title}>An app made for tracking and analyzing seller performace</Text>
          </View>
          
            <View style={styles.formcontainer}>
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
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignUpForm')} >
                <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('AppBottomTabNav')} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
            </View>
        </View>
      
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  name:{
    fontWeight: 'bold',
    color: "#FFF",
    marginTop: 15
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color:'#FFF',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.9,
  },
  formcontainer: { 
    padding: 20,
  },
  buttonContainer: {
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
