import React, { Component } from "react";
import { createMaterialTopTabNavigator } from 'react-navigation'
import TransactionHome from "../transaction/transaction-home";
import AddTransaction from "../transaction/add-transaction";

export default createMaterialTopTabNavigator({
    Transactions: {screen: TransactionHome},
    AddTransaction: {screen: AddTransaction}
},
{
    navigationOptions: ({navigation}) => ({
      tabBarLabel: (navigation.state.routeName === 'Transactions') ? 'Transactions' : 'Add Transaction',
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      style:{
          backgroundColor: 'black',
          paddingTop: 18,
          borderBottomColor: 'white',
      },
      tabStyle:{
      }
    }
  })
