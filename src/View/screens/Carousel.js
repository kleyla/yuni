import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class BackgroundCarousel extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
      // images = [
      //     require("../assets/images/explore_1.png"),
      //     require("../assets/images/explore_2.png"),
      //     require("../assets/images/explore_3.png"),
      //     require("../assets/images/explore_4.png"),
      //     require("../assets/images/explore_5.png"),
      //     require("../assets/images/explore_6.png")
      // ]
    };
  }

  setSelectedIndex = event => {
    //width of the device
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //get current position the scrollview
    // const contentOffSet = event.nativeEvent.contentOffSet.x;
    // const selectedIndex = Math.floor(contentOffSet / viewSize);
    // this.setState({ selectedIndex });
  };

  render() {
    const { selectedIndex } = this.state;
    const images = [
      require("../assets/images/explore_1.png"),
      require("../assets/images/explore_2.png"),
      require("../assets/images/explore_3.png"),
      require("../assets/images/explore_4.png"),
      require("../assets/images/explore_5.png"),
      require("../assets/images/explore_6.png")
    ];
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
        >
          {images.map(image => (
            <Image key={image} source={image} style={styles.backgrounImagen} />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              key={image}
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 0.5 : 1 }
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgrounImagen: {
    height: "100%",
    width: DEVICE_WIDTH
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff"
  }
});
