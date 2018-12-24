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
  NativeModules,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import MusicPlayerController from 'react-native-musicplayercontroller'
import Interactable from 'react-native-interactable';

export default class GroundingBox extends React.Component {

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


  getMusic() {

    MusicPlayerController.presentPicker(false, (metadata)=>{
  // Successfully saved MPMediaItemCollection to NSUserDefaults.
  //    Returns an array of metadata for each track (not all MPMediaItem
  //    fields are copied, only the blantantly needed ones)
}, ()=>{
  // Opened, but user tapped Cancel

})


MusicPlayerController.preloadMusic("all", (metadata)=>{
  // Successful preload
}, ()=>{
  // Failed to preload music. Potentially lots of reasons, such as the music file being removed from the device.
})


MusicPlayerController.playMusic(()=>{
    // Successfully playing
}, ()=>{
    // Failed to play
})


      }
      //TODO: Have music stop playing when navigating to another screen

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//TODO: Display picture on load if picture is already in AsyncStorage
//TODO: Fix seahorse view


      render() {
        return (
          <ScrollView>
          <View style={styles.container}>

          <Interactable.View
          horizontalOnly={false}
          snapPoints={[
                {x: -160, y: -200},
                {x: 160, y: -200},
                {x: -160, y: -120},
                {x: 160, y: -120},
                {x: -160, y: 120},
                {x: 160, y: 120},
                {x: -160, y: 200},
                {x: 160, y: 200, tension: 50, damping: 0.9}
              ]}
          initialPosition={{x: -140, y: 0}}
          onSnap={this.onDrawerSnap}>

      <View>
      <TouchableWithoutFeedback onPress={this.selectPhotoTapped.bind(this)}>
      <Image source={require('../assets/seahorse.png')} style={{width: 50, height: 50}}/>
      </TouchableWithoutFeedback>
        </View>
      </Interactable.View>

          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
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

          <TouchableOpacity onPress={this.getMusic.bind(this)}>
          <View
          style={[
            styles.avatarContainer,
            { marginBottom: 20 },
          ]}
          >
            <Text>Select a Song</Text>
          </View>
          </TouchableOpacity>
          </View>
          </ScrollView>
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
