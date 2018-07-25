import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Dashboard from '../dashboard';
import Account from '../account';
import {Icon} from 'react-native-elements';
import Analytics from '../analytics'
import TransactionStackNav from "./TransactionStackNav";

export default createBottomTabNavigator(
    {
      Dashboard: Dashboard,
      Transactions: TransactionStackNav,
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