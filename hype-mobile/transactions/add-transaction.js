import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddTransaction extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Add Transaction</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      paddingTop: 20
  }
});