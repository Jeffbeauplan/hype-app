import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {LinearGradient} from 'expo'

class Splash extends Component {
    render() {
        return (
            <LinearGradient colors={['#e67e22','#d35400']} style={styles.container}>
                <Text style={styles.title}>Hype</Text>
            </LinearGradient>
        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
      color:'#FFF',
      marginTop: 10,
      fontWeight: 'bold',
      width: 200,
      textAlign: 'center',
      opacity: 0.9,
      fontSize: 30
    }
});