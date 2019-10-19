import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ListView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  //   Text,
  Button,
  Left,
  Body,
  Right,
  Icon
} from "native-base";
// import Icon from "react-native-vector-icons/Ionicons";
import { data } from "../../constants";
import PublicacionBox from "../../components/PublicacionBox";

export default class MuroTienda extends Component {
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
        renderRow={product => <PublicacionBox product={product} />}
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
    fontSize: 20,
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
  }
});
