import React, { Component } from "react";
import {
  View,
  // Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";
import {
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Button,
  Icon
} from "native-base";

// USAR DIMENSIONS PARA QUE HAYA DOS PRODUCTOS POR CADA FILA

export default class Comentario extends Component {
  render() {
    // console.warn( this.props.comentario )
    const { id, name, image, dato, fecha } = this.props.comentario;
    const nombretienda = "Tienda lala";

    return (
      <Card>
        <View style={styles.comentario}>
          <CardItem>
            <Left>
              <Thumbnail source={image} />
              <Body>
                <View style={styles.calificacion}>
                  <Text note>{name}</Text>
                  <Text>{'   '}</Text>
                  <Icon active name="ios-star" style={ styles.icono }/>
                  <Icon active name="ios-star" style={ styles.icono }/>
                  <Icon active name="ios-star" style={ styles.icono }/>
                  <Icon active name="ios-star" style={ styles.icono }/>
                  <Icon active name="ios-star" style={ styles.icono }/>
                </View>
                <Text note>{dato}</Text>
                <Text style={styles.fecha}>{fecha}</Text>
              </Body>
            </Left>
          </CardItem>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  comentario: {
    backgroundColor: "red"
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 5,
    marginRight: 5
  },
  calificacion: {
    flexDirection: "row",
    // backgroundColor: "red"
    alignItems: 'center'
  },
  icono: {
    fontSize: 15,
    color: 'red'

  },
  fecha: {
    fontSize: 8,
    alignSelf: "flex-end",
    //   backgroundColor: 'red'
  }
});
