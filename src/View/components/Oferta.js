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

export default class Oferta extends Component {
  render() {
    const images = [
      require("../assets/images/ofertas/e-commerce01.png"),
      require("../assets/images/ofertas/descuento10.jpg"),
      require("../assets/images/ofertas/cartera.jpeg"),
      require("../assets/images/ofertas/maxres01.jpg"),
      require("../assets/images/ofertas/e-commerce02.png"),
    ];

    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
        >
          {images.map(image => (
            <Image key={image} source={image} style={styles.image} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: DEVICE_HEIGHT / 2,
    width: DEVICE_WIDTH
    // marginLeft: 5,
    // marginRight: 5
  }
});
