import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ListView,
  FlatList,
  SafeAreaView,ListItem
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { data } from "./../constants";
import Comentario from "./../components/Comentario";
import ProductBox from "./../components/ProductBox";
import { Content } from "native-base";
import { withNavigation } from 'react-navigation';
// USAR DIMENSIONS PARA QUE HAYA DOS PRODUCTOS POR CADA FILA

console.disableYellowBox = true
class Product extends Component {
  

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
      // data: [],
      product: data.products[0],
      // dataSource: data.comentarios,
      dataSource: ds.cloneWithRows(data.comentarios),
    };
  }


  render() {
    return (
      <Content>

        <ProductBox product={this.state.product} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={comentario => <Comentario comentario={comentario} />}
        />
      </Content>
    );
  }
}

export default withNavigation(Product)

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
    color: "gray"
  }
});
