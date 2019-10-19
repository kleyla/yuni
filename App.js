import React, { Component } from "react";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';


//VarGlobales
// import { Provider } from './src/Model/VarGlobales'

//Modulos

import WelcomeStack from './src/View/screens/LogIn'

import TabNavigator from './src/View/screens/Home.js';
const AppNavigator =createSwitchNavigator(
  {
    AuthLoading: WelcomeStack,
    App: TabNavigator,
    
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      // <Provider>
      <AppContainer />
      // </Provider>
    );
  }
}
