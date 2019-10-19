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
    const talla = "l";
    const descripcion = "Este es un produccto que se trata de losjnckc";

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.carrito}>Carrito ({cantidad})</Text>
          <TouchableOpacity>
            <Icon name="delete" size={30} color="gray" />
          </TouchableOpacity>
        </View>
        {/* Caja de tienda */}
        <View style={styles.box}>
          <View style={styles.check}>
            <CheckBox checked={true} />
          </View>
          <TouchableOpacity style={styles.productBox}>
            <Image
              style={styles.image}
              source={require("./../../assets/images/products/chamarra001.jpg")}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              {/* <Text style={styles.precio}>Precio: {precio} bs.</Text> */}
              <View style={styles.lineaPrecio}>
                <Text style={styles.talla}>Talla: {talla}</Text>
                <Text style={styles.precio}>Precio: {precio} bs.</Text>
              </View>
              <Text style={ styles.cantidad }>Seleccione la cantidad:</Text>
              <View style={styles.linea}>
                <Item picker style={styles.item}>
                  <Picker
                    mode="dropdown"
                    // iosIcon={<Icon name="arrow-down" />}
                    placeholder="Selecciona la cantidad"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="1" value="key0" />
                    <Picker.Item label="2" value="key1" />
                    <Picker.Item label="3" value="key2" />
                    <Picker.Item label="4" value="key3" />
                    <Picker.Item label="5" value="key4" />
                  </Picker>
                </Item>
                <Text style={{ color: "white" }}> </Text>
                <Button title="Eliminar"></Button>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
    // backgroundColor: "green",
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
    width: Math.round(Dimensions.get("window").width)*0.57,
    // backgroundColor: 'red',
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5
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
    width: Math.round(Dimensions.get("window").width)*0.57,
    // flex:1,
    // backgroundColor: 'red',
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: 'red',
  },
  item: {
    width: 70,
    height: 35,
    backgroundColor: "lightgray"
  },
  cantidad: {
    fontSize: 10,
    // width: 10,
    // height: 20
  }
});
