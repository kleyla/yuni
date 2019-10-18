import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


//VarGlobales
// import { Provider } from './src/Model/VarGlobales'

//Modulos
import Hola from "./src/View/screens/Hola";
import Tienda from "./src/View/screens/Tienda/Tienda";
import Carrito from './src/View/screens/Usuario/Carrito'
import Perfil from './src/View/screens/Usuario/Perfil'
import Wishlist from './src/View/screens/Usuario/Wishlist'
import Home from './src/View/screens/Home'
import Product from './src/View/screens/Product'
import Carousel from './src/View/screens/Carousel'
import Login from './src/View/screens/Login'

const AppNavigator = createStackNavigator(
  {
    // Welcome: { screen: Welcome },
    // SignUp: { screen: SignUp },
    Tienda: { screen: Tienda },
    Perfil: { screen: Perfil },
    Login: { screen: Login },
    Home: { screen: Home },
    Product: { screen: Product },
    Carousel: { screen: Carousel },
    Wishlist: { screen: Wishlist },
    Carrito: { screen: Carrito },
    Hola: { screen: Hola },
    // SignUp: { screen: SignUp },
  },
  {
    defaultNavigationOptions: { header: null }
  }
);

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
