import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import bgImage from './../assets/images/Hoja-en-blanco.png';
import Logo from './../assets/images/ecom2.png';
import Icon from 'react-native-vector-icons/Feather';

import {Consumer} from './../../Model/VarGlobales';

// import {HeaderGral} from './../components/Auxiliares';
// import { TextInput } from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');
export default class Login2 extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
    };
  }

  componentDidMount() {
    console.log(this.context.state);
  }

  render() {
    return (
      <Consumer>
        {value => (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} />
              <Text style={styles.logoText}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <Icon
                style={styles.inputIcon}
                name={'airplay'}
                size={28}
                color={'rgba(255, 255, 255, 0.7)'}
              />
              <TextInput
                onChangeText={e => {
                  this.setState({email: e});
                }}
                style={styles.input}
                placeholder={'Email'}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underLineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                style={styles.inputIcon}
                name={'award'}
                size={28}
                color={'rgba(255, 255, 255, 0.7)'}
              />
              <TextInput
                onChangeText={e => {
                  this.setState({pass: e});
                }}
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underLineColorAndroid="transparent"
              />
              <TouchableOpacity style={styles.btnEye}>
                <Icon
                  name={'eye'}
                  size={26}
                  color={'rgba(255, 255, 255, 0.7)'}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                console.log('El Usuario es:' + this.state.email);
                console.log(' La contrasenaes: ' + this.state.pass);
                this.props.navigation.navigate('Home', {});
                // value.state.VerfificarF(
                //   this.props.navigation,
                //   value,
                //   this.state.user,
                //   this.state.pass,
                // );
              }}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.textReg}>No tienes una cuenta?</Text>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                this.props.navigation.navigate('Register', {});
              }}>
              <Text style={styles.text}>Registrate</Text>
            </TouchableOpacity>
            <Text style={styles.textReg}>Ejemplos rapidos</Text>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                this.props.navigation.navigate('Home', {});
              }}>
              <Text style={styles.text}>Registrate</Text>
            </TouchableOpacity>
          </ImageBackground>
        )}
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: 'rgba(0, 0, 0, 35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#0096ce',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
  textReg: {
      marginTop: 20,
    color: 'rgba(0, 0, 0, 37)',
    fontSize: 16,
    textAlign: 'center',
  }
});
