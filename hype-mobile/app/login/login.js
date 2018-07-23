import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm'
import {navigationOptions} from "react-navigation"

export default class Login extends React.Component {
  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source = {require("../../images/logo.png")}
          /> 
          <Text style = {styles.name} >The Hype App </Text>
          <Text style={styles.title}>An app made for tracking and analyzing seller performace</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm handler = {this.props.handler}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#e67e22',
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
  formContainer: {

  }
});
