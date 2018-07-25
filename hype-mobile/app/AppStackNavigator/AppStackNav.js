import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createSwitchNavigator } from 'react-navigation'
import LoginStackNav from "./LoginStackNav";
import AppBottomTabNav from './AppBottomTabNav'

class AppStackNav extends Component {
    render() {
        return (
            <StackNav style={styles.container} navigation = {this.props.navigation}/>
        );
    }
}

export default AppStackNav;

const StackNav = createSwitchNavigator({
    Login: {screen: LoginStackNav},
    AppBottomTabNav: {screen: AppBottomTabNav}
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