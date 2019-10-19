import React, { Component } from "react";
import {
  View,
  // Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
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
import { withNavigation } from 'react-navigation';
// USAR DIMENSIONS PARA QUE HAYA DOS PRODUCTOS POR CADA FILA

 class ProductsTiniBox extends Component {
  render() {
    const { id, name, description, tags, images } = this.props.product;
    const nombretienda = "Tienda lala";
    const { navigate } = this.props.navigation;
    return (
      <Card>
          <TouchableOpacity onPress={() => navigate('Tienda',{name})}>
          <CardItem>
        
            <Left>
            <TouchableOpacity onPress={() => navigate('Tienda',{name})}>
              <Thumbnail source={images[0]} />
            </TouchableOpacity>
              <Body>
                <Text note>{name}</Text>
              </Body>
             
            </Left>
        
          </CardItem>
       
        <TouchableOpacity style={styles.description}>
          <View>
            <Text>Monedas habilitadas OFERTA</Text>
          </View>
          <View style={ styles.imagenes }>
            <Image source={images[1]} style={styles.image} />
            <Image source={images[2]} style={styles.image} />
          </View>
        </TouchableOpacity>
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
        </TouchableOpacity>
      </Card>
    );
  }
}

export default withNavigation(ProductsTiniBox);

const styles = StyleSheet.create({
  description: {
    flexDirection: "column",
    // backgroundColor: "red"
  },
  imagenes:{
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 5,
    marginRight: 5
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
