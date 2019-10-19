import React, { Component } from "react";
import {
  View,
  // Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Dimensions
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
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class ProductosBox extends Component {
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
                <Text>{nombretienda}</Text>
                <Text note>{name}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>

          <CardItem cardBody>
            <ScrollView
              horizontal
              pagingEnabled
              onMomentumScrollEnd={this.setSelectedIndex}
            >
              {images.map(image => (
                <Image
                  key={image}
                  source={image}
                  style={ styles.image }
                />
              ))}
            </ScrollView>
          </CardItem>

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
  image: {
    height: DEVICE_HEIGHT / 2,
    width: DEVICE_WIDTH,
    // marginLeft: 5,
    // marginRight: 5
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
