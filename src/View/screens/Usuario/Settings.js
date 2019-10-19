import React, { Component } from "react";
import {
  View,
  // Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
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

export default class ProductsTiniBox extends Component {
  render() {
    const name = "Karen Rodriguez";
    const image = "./../../assets/images/people/jose.jpg";

    return (
      <View style={styles.container}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require(image)} />
              <Body>
                <Text style={styles.name}>{name}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        {/* PEQUENHO HEADER */}
        <View style={styles.tiniHeader}>
          <CardItem>
            <TouchableOpacity style={styles.selectBox}>
              <Icon name="hearto" style={styles.icon} />
              <Text style={styles.text}>Lista de deseos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectBox}>
              <Icon name="staro" style={styles.icon} />
              <Text style={styles.text}>Siguiendo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectBox}>
              <Icon name="shoppingcart" style={styles.icon} />
              <Text style={styles.text}>Carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectBox}>
              <Icon name="wallet" style={styles.icon} />
              <Text style={styles.text}>Monedas</Text>
            </TouchableOpacity>
          </CardItem>
        </View>

        {/* Configuraciones */}
        <Card>
          {/* <View style={styles.config}> */}
          <CardItem>
            <View style={styles.pedidosBox}>
              <TouchableOpacity style={styles.pedidosTitle}>
                <Icon style={styles.iconPedido} name="filetext1" />
                <Text style={styles.pedidoText}>Pedidos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcionesBox}>
                <Text style={styles.opciones}>Pendientes de envio</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcionesBox}>
                <Text style={styles.opciones}>Pedidos enviados</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcionesBox}>
                <Text style={styles.opciones}>Pendientes de valoracion</Text>
              </TouchableOpacity>
            </View>
          </CardItem>
          {/* </View> */}
        </Card>

        {/* Opciones Genrales */}
        <Card>
          <CardItem>
            <View style={styles.pedidosBox}>
              <TouchableOpacity style={styles.opcTitle}>
                <Icon style={styles.iconPedido} name="wallet" />
                <Text style={styles.opcText}>Monedero</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opcTitle}>
                <Icon style={styles.iconPedido} name="enviromento" />
                <Text style={styles.opcText}>Direcciones de entrega</Text>
              </TouchableOpacity>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingTop: 15
    // marginTop: 10
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 5
  },
  tiniHeader: {
    flexDirection: "row",
    justifyContent: "center"
    // margin: 5,
  },
  selectBox: {
    flexDirection: "column",
    width: DEVICE_WIDTH / 5,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 20
  },
  text: {
    fontSize: 10
  },
  //config
  config: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  pedidosBox: {
    flexDirection: "column"
    // backgroundColor: "red"
  },
  pedidosTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  iconPedido: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10
  },
  pedidoText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5
  },
  opcionesBox: {
    width: DEVICE_WIDTH * 0.9,
    // backgroundColor: "red",
    marginTop: 10,
    marginBottom: 10
  },
  opciones: {
    fontSize: 15,
    marginLeft: 20
  },
  opcText: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
    paddingLeft: 10
  },
  opcTitle: {
    width: DEVICE_WIDTH * 0.9,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 10,
    marginLeft: 10
  }
});
