import React from 'react';
import AppStackNav from './app/AppStackNavigator/AppStackNav';
import Splash from './app/splash';

export default class App extends React.Component {
  state = {
    ready: false,
  }

  componentDidMount (){
    setTimeout(() => {
      this.setState({ready: true})
    }, 2000)
  }
  render () {
    if(this.state.ready === false){
      return <Splash/>
    }
    return <AppStackNav/>
  }
}
