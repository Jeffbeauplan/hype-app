import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class TransactionHome extends React.Component {
  
  token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJoeXBlIiwiZXhwIjoxNTM0NjM1MjM4LCJpYXQiOjE1MzIyMTYwMzgsImlzcyI6Imh5cGUiLCJqdGkiOiIxZGMzMDUwZS01ZTZjLTQ2NzQtOGRhOS02ZTc4YjBkOGYyZGMiLCJuYmYiOjE1MzIyMTYwMzcsInN1YiI6IjIiLCJ0eXAiOiJhY2Nlc3MifQ.gWaCmzCkJqltoTy6lapsDvLiKcQVCIAhF-CibNjUGncfkPaisyJBHWumHL6R4xX48V2uFAQKacrOZgji7WymfQ"

  constructor(props) {
    super(props);
    
    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    try {
      fetch('http://192.168.1.98:4000/api/transactions/1', {
        method: 'GET',
        headers: {
          authorization: "Bearer " + this.token
        }
      })
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
    catch(error) {
      console.log(error)
    }
    
  }

  render() {
    let display = this.state.data != undefined
      ? this.state.data.data.user.first_name + ' ' +  this.state.data.data.user.last_name
        + ' ' + this.state.data.data.broker
      : 'empty';
    return (
      <View style={styles.container}>
        <Text>Transactions</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate('AddTransaction')}>
          <Icon name="add" size={25} color='black' />
        </TouchableOpacity>
        <Text style={{color: 'white'}}>{display}</Text>
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
  button: {
    position: 'absolute',
    width: 65,
    height: 65,
    backgroundColor: 'tomato',
    borderRadius: 50,
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});