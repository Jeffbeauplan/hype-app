import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Account extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>Account</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
             <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent:'center',
      alignItems: 'center',
      paddingTop: 20
  },
  buttonContainer: {
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