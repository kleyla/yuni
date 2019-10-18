import React, {Component} from 'react';
import { Text, View,Button, Image, StatusBar} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ToolBar from '../components/CameraToolBar';
import styles from '../Style/CameraStyle';



export default class CameraScreen extends Component {
  static navigationOptions = {

    header: null
  };
  state = {
    captures: [],
    // setting flash to be turned off by default
    flashMode: Camera.Constants.FlashMode.off,
    capturing: null,
    // start the back camera by default
    cameraType: Camera.Constants.Type.back,
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    scanned: false,
    scannedData:null

  }

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });


  handleShortCapture = async ({ type, data }) => {

    this.setState({ scanned: true });
    this.setState({ scannedData: data});
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    let photoData ;
    if (this.state.cameraType===Camera.Constants.Type.back){
      
      photoData = await this.camera.takePictureAsync({quality:0.001,base64:true });
      this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    }else{
     
      photoData = await this.camera.takePictureAsync();
      this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    }

   

   
  };

  

 
  async componentDidMount(){
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { stado } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' ,hasCameraRollPermission: stado==='granted'});
  }

  

  handleBarCodeScanned = ({ type, data }) => {
    //
  };

  render() {

    const { hasCameraPermission, flashMode, cameraType, capturing, captures,scanned, scannedData} = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <React.Fragment >
      
          <View style={styles.container}>
            
            <Camera style={styles.preview}
            type={cameraType}
            ref={ref => {
              this.camera = ref;}}
            flashMode={flashMode}
            onBarCodeScanned={scanned ? undefined : this.handleShortCapture}
            />

          
           {scanned && (
              <Button title={'Presiona Para Escanear de Nuevo'} onPress={() => this.setState({ scanned: false })} />
            )}

          </View>
         
          {captures.length > 0 && <PhotoList captures={captures} scannedData={scannedData} />}
          
          <ToolBar
          capturing={capturing}
          flashMode={flashMode}
          cameraType={cameraType}
          setFlashMode={this.setFlashMode}
          setCameraType={this.setCameraType}
          onCaptureIn={this.handleCaptureIn}
          onCaptureOut={this.handleCaptureOut}
          onLongCapture={this.handleLongCapture}
          onShortCapture={this.handleShortCapture}
          
          />
        </React.Fragment>
      );
    }
  }

 
}

class ReviewScreen extends React.Component {

  handleOCR=async({uri})=>{
  
    let localUri=uri;
    let filename=localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let formData=new FormData();
    formData.append('photo', { uri: localUri, type: type, name: filename });


    const xhr = new XMLHttpRequest();


    xhr.open('POST','http://35.175.231.157/api/annotate');

          // 3. set up callback for request
    xhr.onload = () => {
      const response = xhr.response;

      console.warn(response);
      // ... do something with the successful response
    };
    // 4. catch for request error
    xhr.onerror = e => {
      console.warn(e, 'upload failed');
    };
    xhr.send(formData);

    // 7. track upload progress
    if (xhr.upload) {
      // track the upload progress
      xhr.upload.onprogress = ({ total, loaded }) => {
          const uploadProgress = (loaded / total);
          console.warn(uploadProgress);
      };
    }
   
  };

  handleConsulta=async({scanned})=>{
    let datos=scanned;
    let formData=new FormData();

    formData.append('data', datos);

    const xhr1=new XMLHttpRequest();
    xhr1.open('POST','http://35.175.231.157/api/data');
    xhr1.send(formData);
    xhr1.onload=()=>{
    
      const response = xhr1.response;
      console.warn(response);
       if(response!==null){
        alert(`Los datos ${response}`);
       }
      //  else{
     
      // }
      
    };
    

    // 7. track upload progress
    if (xhr1.upload) {
      // track the upload progress
      xhr1.upload.onprogress = ({ total, loaded }) => {
          const uploadProgress = (loaded / total);
          console.warn(uploadProgress);
      };
    }
  }
  handleUpload=async({uri})=>{
  
    let localUri=uri;
    let filename=localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let formData=new FormData();
    formData.append('photo', { uri: localUri, type: type, name: filename });


    const xhr = new XMLHttpRequest();


    xhr.open('POST','http://35.175.231.157/api/file/images');

          // 3. set up callback for request
    xhr.onload = () => {
      const response = xhr.response;

      console.warn(response);
      // ... do something with the successful response
    };
    // 4. catch for request error
    xhr.onerror = e => {
      console.warn(e, 'upload failed');
    };
    xhr.send(formData);

    // 7. track upload progress
    if (xhr.upload) {
      // track the upload progress
      xhr.upload.onprogress = ({ total, loaded }) => {
          const uploadProgress = (loaded / total);
          console.warn(uploadProgress);
      };
    }
   
  };
 

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    
    const uri=navigation.getParam('uri','NO-ID')
    const scanned=navigation.getParam('scanned','NO-ID')
    console.warn('review',scanned)
   
    return (
      
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
          <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
          <View style={styles.photocontainer}>
            <Image
              resizeMode="contain"
              source={{uri}} 
              style={styles.canvas}/>
          </View>
          <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
              <Button title= 'Descartar'/>
              </View>

              <View style={{flex: 1}}>
              <Button title= {'Cargar'} onPress ={()=>{ navigate('Load'),this.handleOCR({uri}),this.handleConsulta({scanned})}}/>
              </View>
           
          </View>
      </SafeAreaView>
      
    )
  }
}

// const AppNavigator = createStackNavigator(
//   {
//     Camera: Camera,
//     Review: ReviewScreen,
//     Load: LoadScreen
//   },
//   {
//     initialRouteName: 'Camera',
//   }
// );











