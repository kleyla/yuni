import React, { Component } from "react";
import {
  StyleSheet,
  ListView,

} from "react-native";
import { createAppContainer    } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Content } from "native-base";
//import Icon from "react-native-vector-icons/Ionicons";
import { data } from "./../constants";
//import ProductBox from "./../components/ProductBox";
import ProductsTiniBox from './../components/ProductsTiniBox';
import Oferta from "./../components/Oferta";
import Perfil from "./Usuario/Perfil.js";
import Carrito from "./Usuario/Carrito.js";
import WishList from "./Usuario/Wishlist.js";
import Product from "./Product";
import CameraScreen from './Camera.js';
import Tienda from './Tienda/Tienda'
import { HeaderSearch} from '../components/Auxiliares';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HeaderButtons, HeaderButton, Item, HiddenItem } from 'react-navigation-header-buttons';
const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);

// USAR DIMENSIONS PARA QUE HAYA DOS PRODUCTOS POR CADA FILA
class Home extends Component {
  
  static navigationOptions = ({ navigation })=>{
    return{
    title: 'Inicio',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item style={styles.icon} title="shoppingcart" iconName="ios-cart" onPress={() => navigation.navigate('Carrito')} />
      </HeaderButtons>
    ),
    };
  };
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
   
    
    const product = {
      id: 2,
      name: "Chamarras abrigadoras",
      desciption: "Mejpres invkvrkn hnrjfecvjikm",
      tags: ["chamarra", "products", "varon"],
      images: [
        require("./../assets/images/products/chamarra001.jpg"),
        require("./../assets/images/products/chamarra002.jpeg")
      ]
    };
    this.state = {
      dataSource: ds.cloneWithRows(data.products)
    };
  }
  render() {
    const name = "osos";
    const precio = 50;
    const cantida = 20;
    const monedas = 2;

    return (
      <Content>
        <HeaderSearch navigation={this.props.navigation}/>
        <Oferta />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={product => <ProductsTiniBox product={product} />}
        />
      </Content>
    );
  }
}
const HomeStack = createStackNavigator(
  {
    Home: Home,
    Camera: CameraScreen,
    Carrito: Carrito,
    Tienda: Tienda,
    Producto: Product
 
  }
  ,
  {
    initialRouteName: 'Home',
    
  }
  
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator({
  Inicio: HomeStack,
  Perfil:  Perfil,
  Lista:  WishList
  
  },{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Inicio') {
        iconName = `ios-home`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
   
      } else if (routeName === 'Perfil') {
        iconName = `ios-person`;
      }else if (routeName==='Lista'){
        iconName = `ios-list`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'rgb(217, 53, 41)',
    inactiveTintColor: 'gray',
  }}
  );

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "lightgray"
    // flexWrap: "wrap"
    // paddingTop: 40
  },
  icon: {
    fontSize: 20,
    tintColor: 'rgb(217, 53, 41)',
    color: 'rgb(217, 53, 41)',
  },
  artistBox: {
    backgroundColor: "white",
    // flexDirection: "column",
    alignItems: "center",
    width: 180,
    height: 180
  },
  image: {
    marginTop: 5,
    width: 150,
    height: 150
  },
  info: {
    // backgroundColor: "red",
    flex: 1,
    color: "gray"
  }, 
});
