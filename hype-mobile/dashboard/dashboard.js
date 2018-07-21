import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default class Dashboard extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Dashboard</Text>
        <Button title="Go to account"
            onPress={() => this.props.navigation.navigate('Account')}
        />
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