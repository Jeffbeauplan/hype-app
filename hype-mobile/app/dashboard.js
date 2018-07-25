import React from 'react';
import { Image, Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import {LinearGradient} from 'expo'

export default class Dashboard extends React.Component {
  render() {

    return (
      <LinearGradient  colors={['#9b59b6','#e74c3c']} style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={{color: 'white'}}>Dashboard</Text>
        
      </LinearGradient >
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'transparent',
        alignItems: 'center',
        paddingTop: 20
    },
    backgroundImage: {
      flex: 1,
    },
});