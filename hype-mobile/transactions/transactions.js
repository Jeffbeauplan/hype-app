import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AddTransaction from './add-transaction';
import TransactionHome from './transaction-home';

export default createStackNavigator(
  {
    TransactionHome: {screen: TransactionHome},
    AddTransaction: {screen: AddTransaction}
  },
  {
    initialRouteName: 'TransactionHome',
    navigationOptions: {
      header: null
    }
  }
);