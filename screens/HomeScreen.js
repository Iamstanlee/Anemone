/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import Button from 'react-native-flat-button';

import DeviceInfo from 'react-native-device-info';

const model = DeviceInfo.getModel();



//var yourPicture = require ('./images/picture.jpg');



type Props = {};
export default class HomeScreen extends React.Component{
  render() {
    return (



      <View style={styles.container}>

        <Image source={require('../assets/anemone.png')} style={{width: 300, height: 70}}/>
        <Text>{"\n"}{"\n"}{"\n"}</Text>
        <Button
                 type="custom"
                 onPress={() =>
                   this.props.navigation.navigate('Disclaimer')
                 }
                 backgroundColor={"#7bd2d8"}
                 borderColor={"#16a085"}
                 borderRadius={10}
                 shadowHeight={5}
                 containerStyle={styles.buttonContainer}
                 contentStyle={styles.content}
               >
                  Get Started               </Button>
      </View>
    );
  }
}


var styles = StyleSheet.create();

if (model == 'iPhone XS Max' || model == 'iPhone 6 Plus' || model == 'iPhone 6s Plus' || model == 'iPhone 7 Plus' || model == 'iPhone 8 Plus' || model == 'iPhone XR'){
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      width: null,
      height: null
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    content:{
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Bold',
  },

  buttonContainer:{
    height: 45,
  }


  });
}

else {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      width: null,
      height: null
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

    content:{
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Bold',
  },

  buttonContainer:{
    height: 32,
  }


  });

}
