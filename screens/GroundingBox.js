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
  TouchableWithoutFeedback,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Interactable from 'react-native-interactable';
import Modal from 'react-native-modalbox';
import MusicPlayerController from 'react-native-musicplayercontroller';
import LottieView from 'lottie-react-native';
import Button from 'react-native-flat-button'


var count = 0;

export default class GroundingBox extends React.Component {

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }

  incrementCount(){
    count = count+1;

    if (count == 17){
      count = 1;
    }

    console.log("The count is " + count);
    this.forceUpdate();
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
      var value = await AsyncStorage.getItem(key);
      value = JSON.parse(value);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  state = {
   avatarSource: null,
    songTitle: null,
  };

async checkPhoto(){
  if (await this.getKey('GroundingPhoto') != null){

    source = await this.getKey('GroundingPhoto');

    //console.log("This is what source does look like: " + source);

    this.setState({
      avatarSource: source
    });
  }
}


async checkSongTitle(){

  if (await this.getKey('SongTitle') != null){

    source = await this.getKey('SongTitle');

    //console.log("This is what source does look like: " + source);

    this.setState({
      songTitle: source
    });
  }
}


  async selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
            },
    };

setTimeout(() => {

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
       console.log("This is what source should look like: " + source);
        this.setState({
          avatarSource: source,
        });
      }
    })
  }, 500);

    await this.saveKey('GroundingPhoto', source);

    //TODO: Photo no longer saves upon app close

  }


  async getMusic() {

    MusicPlayerController.presentPicker(false, (metadata)=>{
      // Successfully saved MPMediaItemCollection to NSUserDefaults.
      //    Returns an array of metadata for each track (not all MPMediaItem
      //    fields are copied, only the blantantly needed ones)

      source = metadata[0]["title"];

      this.setState({
        songTitle: source
      });



    }, ()=>{
      // Opened, but user tapped Cancel
      alert("Cancel")


    })

    await this.saveKey('SongTitle', this.state.songTitle);



    MusicPlayerController.preloadMusic("one", (metadata)=>{
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
  // You can also display the image using data:
  // let source = { uri: 'data:image/jpeg;base64,' + response.data };

  render() {

    this.checkPhoto();
    //this.checkSongTitle();

    return (
      <ScrollView>

      <Modal style={styles.modal} ref="sully" isOpen={false}
      swipetoClose="true"
      position={"center"}
      backdropOpacity={0.5}
      coverScreen={true}>
            <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>

        {(count==1) ? <Image source={require('../assets/sullyquote1.png')} style={{width: 335, height: 245}}/> : null}

        {(count==2) ? <Image source={require('../assets/sullyquote2.png')} style={{width: 335, height: 245}}/> : null}

        {(count==3) ? <Image source={require('../assets/sullyquote3.png')} style={{width: 335, height: 245}}/> : null}

        {(count==4) ? <Image source={require('../assets/sullyquote4.png')} style={{width: 335, height: 245}}/> : null}

        {(count==5) ? <Image source={require('../assets/sullyquote5.png')} style={{width: 335, height: 245}}/> : null}

        {(count==6) ? <Image source={require('../assets/sullyquote6.png')} style={{width: 335, height: 245}}/> : null}

        {(count==7) ? <Image source={require('../assets/sullyquote7.png')} style={{width: 335, height: 245}}/> : null}

        {(count==8) ? <Image source={require('../assets/sullyquote8.png')} style={{width: 335, height: 245}}/> : null}

        {(count==9) ? <Image source={require('../assets/sullyquote9.png')} style={{width: 335, height: 245}}/> : null}

        {(count==10) ? <Image source={require('../assets/sullyquote10.png')} style={{width: 335, height: 245}}/> : null}

        {(count==11) ? <Image source={require('../assets/sullyquote11.png')} style={{width: 335, height: 245}}/> : null}

        {(count==12) ? <Image source={require('../assets/sullyquote12.png')} style={{width: 335, height: 245}}/> : null}

        {(count==13) ? <Image source={require('../assets/sullyquote13.png')} style={{width: 335, height: 245}}/> : null}

        {(count==14) ? <Image source={require('../assets/sullyquote14.png')} style={{width: 335, height: 245}}/> : null}

        {(count==15) ? <Image source={require('../assets/sullyquote15.png')} style={{width: 335, height: 245}}/> : null}

        {(count==16) ? <Image source={require('../assets/sullyquote16.png')} style={{width: 335, height: 245}}/> : null}








        <Text style={{backgroundColor: 'white',fontFamily: 'ProximaNova-Bold'
}}>  Swipe down to close </Text>
        </View>
        </Modal>



      <View style={styles.container}>





        <Interactable.View
        horizontalOnly={false}
        snapPoints={[
          {x: -160, y: 120},
          {x: 160, y: 120},
          {x: -160, y: 200},
          {x: 160, y: 200, tension: 50, damping: 0.9}
        ]}
        initialPosition={{x: -140, y: 0}}
        onSnap={this.onDrawerSnap}>

        <View>
        <TouchableWithoutFeedback onPress={()=> {this.refs.sully.open(); this.incrementCount();}}>
        <Image source={require('../assets/seahorse.png')} style={{width: 70, height: 70}}/>
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

        {(this.state.avatarSource == null) ? (
          <Button
          type="custom"
          backgroundColor={"#7bd2d8"}
          borderColor={"#16a085"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content}
          onPress={this.selectPhotoTapped.bind(this)}> Select a Photo </Button>
        ) : (
          <Image style={styles.avatar} source={this.state.avatarSource} />
        )}

        </View>

        <View pointerEvents="none" style={{flex: 1, position: 'absolute', justifyContent: 'center',
            height: 300,
            width: 300, alignItems: 'center'}}
            >
                <LottieView
                  source={require('../confetti.json')}
                  autoPlay={true}
                  loop={true}
                  style={{height: 300,
                      width: 300}}
                />

                </View >

        </TouchableOpacity>


<View>
        {this.state.songTitle === null ? (
          <Button
          type="custom"
          backgroundColor={"#af7b93"}
          borderColor={"#7C4D63"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content}
          onPress={this.getMusic.bind(this)}> Select a Song </Button>
        ) : (
          <Text style={{    fontFamily: 'ProximaNova-Regular'
}}>You have selected: {this.state.songTitle} </Text>
        )}

        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>

        </View>




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
      backgroundColor: '#ffffff',
    //  {width: Dimensions.get('window').width},
    //  {height: Dimensions.get('window').height}
    },
    avatarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 2
    },
    avatar: {
      width: 300,
      height: 300,
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      width: 350,
      backgroundColor: 'transparent'
    },

    buttonContainer:{
      width: 160,
      height: 32,
    },

    content: {
      fontFamily: 'ProximaNova-Bold',
      fontSize: 22,
    }
  });
