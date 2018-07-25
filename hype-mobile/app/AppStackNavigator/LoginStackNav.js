import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from 'react-navigation'
import Login from '../login/login'
import SignUpForm from "../login/signUpForm";


export default createStackNavigator({
    Login: {screen: Login},
    SignUpForm: {screen: SignUpForm},
},{
    navigationOptions: {
        header: null
      }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});