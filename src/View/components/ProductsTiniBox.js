import React, { Component } from "react";
import {
  View,
  // Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Button
} from "native-base";

// USAR DIMENSIONS PARA QUE HAYA DOS PRODUCTOS POR CADA FILA

export default class ProductsTiniBox extends Component {
  render() {
    const { id, name, description, tags, images } = this.props.product;
    const nombretienda = "Tienda lala";
    return (
      <Card>
        <TouchableOpacity>
          <CardItem>
            <Left>
              <Thumbnail source={images[0]} />
              <Body>
                <Text note>{name}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>
        <TouchableOpacity style={styles.description}>
          <View>
            <Text>Monedas habilitadas OFERTA</Text>
          </View>
          <View style={ styles.imagenes }>
            <Image source={images[1]} style={styles.image} />
            <Image source={images[2]} style={styles.image} />
          </View>
        </TouchableOpacity>
        <CardItem style={styles.cardFooter}>
          <TouchableOpacity style={styles.fot}>
            <Icon active name="like2" />
            <Text> 12 Me gusta</Text>
          </TouchableOpacity>
          <Text>{"    "}</Text>
          <TouchableOpacity style={styles.fot}>
            <Icon active name="wechat" />
            <Text> 4 Commentarios</Text>
          </TouchableOpacity>
          <Text>{"    "}</Text>
          <TouchableOpacity style={styles.fot}>
            <Icon active name="sharealt" />
            <Text> Compartir</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    flexDirection: "column",
    // backgroundColor: "red"
  },
  imagenes:{
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 5,
    marginRight: 5
  },
  cardFooter: {
    // backgroundColor: "red",
    height: 40,
    flexDirection: "row",
    justifyContent: "center"
  },
  fot: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
