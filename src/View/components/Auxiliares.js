import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  View,
  List,
} from 'native-base';
//import {Alert} from 'react-native';
import {
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Estilo from '../Style/Estilos';

const {width: WIDTH} = Dimensions.get('window');

export class HeaderGral extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <Header transparent>
            <Body>
              <Title style={{fontSize: 20, color: 'black'}}>YUNIEXPRESS</Title>
            </Body>
            <Right>
              <Button hastext transparent>
                <Text
                  style={{color: 'black'}}
                  onPress={() => {
                    console.log('User logued');
                    this.props.e.navigate('Login', {});
                  }}>
                  Login
                </Text>
              </Button>

              <Button hastext transparent>
                <Text
                  style={{color: 'black'}}
                  onPress={() => {
                    console.log('User Registrado');
                    this.props.e.navigate('Register', {});
                  }}>
                  Registrate
                </Text>
              </Button>
            </Right>
          </Header>
        )}
      </Consumer>
    );
  }
}

export class HeaderSearch extends Component {
  render() {
    return (
     
          <Header style={styles.body}>
            <Body style={styles.body}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder={'Buscar'}
              
                />
                <TouchableOpacity style={styles.btnEye}>
                  <Icon
                    name={'search1'}
                    size={20}
              
                    color={'rgba(0, 0, 0, 35)'}
                  />
                </TouchableOpacity>
              </View>
            </Body>
            <Right>
              <Button hastext transparent onPress={() => this.props.navigation.navigate('Camera')}>
                <Icon name="camera" style={styles.icon} />
              </Button>
            </Right>
            </Header>
      
    );
  }
}

export class PieDePagina extends Component {
  //Debe recibir un "e"= this.props.navigation
  render() {
    return (
      <Consumer>
        {value => (
          <Footer>
            <FooterTab style={{backgroundColor: 'white'}}>
              <Button
                title="Home"
                onPress={() => {
                  this.props.e.navigate('Browser', {});
                }}>
                <Icon name="home" style={styles.icon} />
              </Button>
              <Button
                title="Muro"
                onPress={() => {
                  this.props.e.navigate('Home', {});
                }}>
                <Icon name="profile" style={styles.icon} />
              </Button>
              <Button
                active
                title="Mensajes"
                onPress={() => {
                  this.props.e.navigate('Home', {});
                }}>
                <Icon active name="message1" style={styles.icon} />
              </Button>
              <Button
                title="Cesta"
                onPress={() => {
                  console.log(this.props.e.navigate('Home', {}));
                }}>
                <Icon name="shoppingcart" style={styles.icon} />
              </Button>
              <Button
                title="Profile"
                onPress={() => {
                  console.warn(this.props.e.navigate('Profile', {}));
                }}>
                <Icon name="user" style={styles.icon} />
              </Button>
            </FooterTab>
          </Footer>
        )}
      </Consumer>
    );
  }
}

export class HeaderComp extends Component {
  render() {
    return (
      <Header transparent>
        <Left>
          <Button
            transparent
            onPress={() => {
              this.props.Karen.openDrawer();
            }}>
            <Icon name="menufold" style={{fontSize: 20, color: 'blue'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize: 20, color: 'black'}}>YUNIEXPRESS</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export class SideBar extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <Container>
            <Header style={{height: 220}}>
              <Body>
                <Image
                  style={Estilo.drawerImage}
                  source={require('./../assets/images/icon.png')}
                />
              </Body>
            </Header>
            <List>
              <ListItem icon>
                <Left>
                  <Button style={{backgroundColor: '#007AFF'}}>
                    <Icon active name="forward" />
                  </Button>
                </Left>
                <Body>
                  <Text>Logout</Text>
                </Body>
              </ListItem>
            </List>
          </Container>
        )}
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: 'white',
  },
  iconSearch: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  input: {
    width: WIDTH - 70,
    height: 40,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 15,
    marginLeft: 5,
    // backgroundColor: 'rgba(0, 0, 0, 35)',
    backgroundColor: 'rgba(255, 255, 255, 35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  body:{
    backgroundColor: 'rgb(217, 53, 41)',
  }
});


