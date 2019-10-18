import React, { Component } from "react";
import { Alert, StyleSheet, Button } from "react-native";
import { View, Text } from "react-native";
import { NavigationActions } from "react-navigation";

// import Estilo from './Style/Estilos';

// import { Consumer } from "../../Model/VarGlobales";

//Componente auxiliar
// import {PieDePagina} from './Componentes/Auxiliares';
// import {HeaderComp} from './Componentes/Auxiliares';

export default class Hola extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pass: ""
    };
  }

  componentDidMount() {
    console.log(this.context.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
            title={'hola'}
          onPress={() => {
           this.props.navigation.navigate("Tienda", {});
          }}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// Hola.contextType = Consumer;
