import React, { Component } from "react";
import { View, Button, StyleSheet, Image, Text, TouchableOpacity, ListView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { data } from "../../constants";
import ProductBox from "../../components/ProductBox";

// USAR DIMENSIONS PARA QUE HAYA DOS PRODUCTOS POR CADA FILA

export default class ProductosTienda extends Component {
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
        require("./../../assets/images/products/chamarra001.jpg"),
        require("./../../assets/images/products/chamarra002.jpeg")
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={product => <ProductBox product={product} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "lightgray"
    // flexWrap: "wrap"
    // paddingTop: 40
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
    color: 'gray'
  }
});
