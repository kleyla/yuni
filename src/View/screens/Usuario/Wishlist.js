import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { CheckBox, Item, Picker } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { theme } from "../../constants";

export default class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const name = "Osos";
    const precio = 5;
    const cantidad = 62;
    const descripcion = "Este es un produccto que se trata de losjnckc";

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.carrito}>Lista de deseos ({cantidad})</Text>
          <TouchableOpacity>
            <Icon name="delete" size={30} color="gray" />
          </TouchableOpacity>
        </View>
        {/* Caja de tienda */}
        <TouchableOpacity style={styles.productBox}>
          <Image
            style={styles.image}
            source={require("./../../assets/images/products/chamarra001.jpg")}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            {/* <Text style={styles.precio}>Precio: {precio} bs.</Text> */}
            <View style={styles.lineaPrecio}>
              <Text style={styles.precio}>Precio: {precio} bs.</Text>
            </View>
            <View style={styles.linea}>
              <Button style={styles.btn} title="Eliminar"></Button>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "lightgray",
    // flexWrap: "wrap"
    paddingTop: 25
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    height: 50
  },
  carrito: {
    fontSize: 20,
    color: "gray",
    marginLeft: 7
  },
  box: {
    backgroundColor: "white",
    flexDirection: "row"
  },
  check: {
    // backgroundColor: "red",
    flexDirection: "column",
    width: 40,
    // alignItems: "center",
    justifyContent: "center"
    // marginHorizontal: 5
  },
  productBox: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    width: Math.round(Dimensions.get("window").width)
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5
  },
  info: {
    // backgroundColor: "red",
    flexDirection: "column",
    marginLeft: 10
  },
  name: {
    fontSize: 20,
    marginTop: 2
  },
  lineaPrecio: {
    width: Math.round(Dimensions.get("window").width) * 0.6,
    // backgroundColor: "red",
    flexDirection: "row",
    // alignItems: "flex-end",
    marginBottom: 5,
    justifyContent: "flex-end"
  },
  precio: {
    fontSize: 15,
    color: "gray",
    alignSelf: "flex-end"
  },
  text: {
    color: "gray"
  },
  talla: {
    // marginBottom: 10,
    color: "gray"
  },
  linea: {
    width: Math.round(Dimensions.get("window").width) * 0.57,
    // backgroundColor: 'red',
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  item: {
    width: 70,
    height: 35,
    backgroundColor: "lightgray"
  }
});
