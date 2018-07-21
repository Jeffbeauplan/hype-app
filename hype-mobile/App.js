import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './dashboard/dashboard';
import Inventory from './inventory/inventory';
import Transactions from './transactions/transactions';
import Account from './account/account';
import { createBottomTabNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements';

export default createBottomTabNavigator(
  {
    Dashboard: Dashboard,
    Inventory: Inventory,
    Transactions: Transactions,
    Account: Account
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Dashboard') {
          iconName = 'av-timer';
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});