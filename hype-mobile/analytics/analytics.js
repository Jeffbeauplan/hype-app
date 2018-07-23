import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Analytics extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>Analytics</Text>
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
  },
});