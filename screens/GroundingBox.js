import React from 'react';
import {
  AppRegistry,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  DeviceEventEmitter,
  NativeModules
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import MusicFiles from 'react-native-get-music-files';

export default class GroundingBox extends React.Component {



  //In order to get blocks of songs, for fix performance issues at least in Android, use next

  componentWillMount() {
    DeviceEventEmitter.addListener(
      'onBatchReceived',
      (params) => {
        this.setState({songs : [
          ...this.state.songs,
          ...params.batch
        ]});
      }
    )
  }

  componentDidMount(){
    MusicFiles.getAll({
      id : true,
      blured : false,
      artist : true,
      duration : true, //default : true
      cover : true, //default : true,
      title : true,
      cover : true,
      batchNumber : 5, //get 5 songs per batch
      minimumSongDuration : 10000, //in miliseconds,
      fields : ['title','artwork','duration','artist','genre','lyrics','albumTitle']
    });
  }

  async saveKey(key, value){
    value = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log("Error: could not save data" + error);

    }
  }

  async getKey(key){
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  state = {
    avatarSource: null,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        this.saveKey('GroundingPhoto', source);
        this.setState({
          avatarSource: source,
        });
      }
    });
  }


  getAllMusic() {

    try {

      MusicFiles.getAll({
        blured : false, // works only when 'cover' is set to true
        artist : true,
        duration : true, //default : true
        cover : false, //default : true,
        genre : true,
        title : true,
        cover : true,
        minimumSongDuration : 10000, // get songs bigger than 10000 miliseconds duration,
        fields : ['title','albumTitle','genre','lyrics','artwork','duration'] // for iOs Version
      }).then(tracks => {
        console.log("Tracks successfully taken")      })

      }

      catch(error) {
        console.log("Error: could not load music" + error);  }
      }


      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };



      render() {
        return (
          <View style={styles.container}>
          <TouchableOpacity onPress={this.getAllMusic.bind(this)}>
          <View
          style={[
            styles.avatar,
            styles.avatarContainer,
            { marginBottom: 20 },
          ]}
          >
          {this.state.avatarSource === null ? (
            <Text>Select a Photo</Text>
          ) : (
            <Image style={styles.avatar} source={this.state.avatarSource} />
          )}
          </View>
          </TouchableOpacity>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        width: 300,
        height: 300,
      },
    });
