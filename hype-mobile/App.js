import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './app/dashboard';
import Inventory from './inventory/inventory';
import Transactions from './app/transaction/transactions';
import Account from './app/account';
import { createBottomTabNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements';
import Login from './app/login/login'
import Analytics from './app/analytics'

const FullApp = createBottomTabNavigator(
  {
    Dashboard: Dashboard,
    // Inventory: Inventory,
    Transactions: Transactions,
    Analytics: Analytics,
    Account: Account
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Dashboard') {
          iconName = 'av-timer';
        } else if (routeName === 'Analytics') {
          iconName = 'trending-up';
        } else if (routeName === 'Account') {
          iconName = 'person-outline';
        } else if (routeName === 'Inventory') {
          iconName = 'list';
        } else if (routeName === 'Transactions') {
          iconName = 'add-shopping-cart';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      activeBackgroundColor: 'black',
      inactiveTintColor: 'gray',
      inactiveBackgroundColor: 'black'
    }
  }
);
export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this);

    this.state = {
        signedIn: false
    };
  }

  handler() {
    this.setState({
        signedIn: true
    });
  }
  
  render () {
    if(!this.state.signedIn){
      return( <Login handler = {this.handler} /> );
    }
    else {
      return( <FullApp/> );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});