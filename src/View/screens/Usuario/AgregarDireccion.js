import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import iconMarker from "../../assets/icons/room.png";

export default class App extends React.Component {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    locationResult: null,
    location: {
      coords: { latitude: -17.781551313082648, longitude: -63.18366844466868 }
    },
    LatLng: {
      latitude: -17.781551313082648,
      longitude: -63.18366844466868
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={this._handleMapRegionChange}
        >
          <Marker
            coordinate={this.state.LatLng}
            image={require("../../assets/icons/room.png")}
          ></Marker>
        </MapView>
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
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
