import React, { Component } from "react";
// import { Drawer } from "native-base";

//Importaciones de los controladores
import Usuario from "../Controller/Usuario";
// import {SideBar} from '../View/components/Auxiliares'

export class Provider extends Component {
  state = {
    Saludo: "Hola Karen",
    Token: undefined,

    GuardarInformacion: valor => {
      Usuario.saveDate(valor, this);
    },
    openDrawer: () => {
      this.openDrawer();
    },
    //Funciones de ControladorUsuario
    VerificarDatos: (e, e2, user, contra) => {
      Usuario.Verificacion(e, e2, user, contra);
    },
    SubirImagen: (e, e2, fileDate, fileUri) => {
      Usuario.subirImagenFire(e, e2, fileDate, fileUri);
    }
  };

  render() {
    return (
      <VarGlobales.Provider
        value={{
          state: this.state
        }}
      ></VarGlobales.Provider>
    );
  }
}

export const VarGlobales = React.createContext();
export const Consumer = VarGlobales.Consumer;
