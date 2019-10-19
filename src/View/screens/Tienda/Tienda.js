import React, { Component } from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";
import { Container, Tab, Tabs, TabHeading } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import MuroTienda from "./MuroTienda";
import ProductosTienda from "./ProductosTienda";

export default class Tienda extends Component {
  static navigationOptions  = ({ navigation }) => {
    return{
      title: navigation.getParam('name', 'NO-ID')
    } 
  };
  render() {
    const name = "Tienda Cute";
    const likes = 300;
    const coments = 62;

    return (
      <View style={styles.container}>
        {/* Caja de tienda */}
        <View style={styles.artistBox}>
          <Image
            style={styles.image}
            source={require("./../../assets/images/avatar.png")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-empty" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-checkmark-circle" size={30} color="gray" />
                <Text style={styles.count}>{coments}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Productos */}
        <Tabs>
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Icon name="ios-heart-empty" />
                <Text>Muro</Text>
              </TabHeading>
            }
          >
            <MuroTienda />

          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Text>Productos</Text>
              </TabHeading>
            }
          >
            <ProductosTienda />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "lightgray",
    // flexWrap: "wrap"
    paddingTop: 30
  },
  artistBox: {
    backgroundColor: "white",
    flexDirection: "row"
  },
  image: {
    width: 150,
    height: 150
  },
  info: {
    // backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    marginTop: 10
  },
  row: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: "center"
  },
  count: {
    color: "gray"
  },
  //TAB ESTILOS
  tab: {
    color: "gray",
    backgroundColor: "gray",
    // height: 30
  }
});
