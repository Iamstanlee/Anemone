/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Button from 'react-native-flat-button'
import DeviceInfo from 'react-native-device-info';
var styles = StyleSheet.create();


const model = DeviceInfo.getModel();


if (model == 'iPhone 5s' || model == 'iPhone SE'){

  styles = StyleSheet.create({
  text: {
  textAlign:'left',
  fontFamily: 'ProximaNova-Bold',
  fontSize: 13
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',

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
  buttonContainer:{
    height: 25,
  },

  content: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 20,
  }

});

}


 else {

  styles = StyleSheet.create({
  text: {
  textAlign:'left',
  fontFamily: 'ProximaNova-Bold',
  fontSize: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',

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
  buttonContainer:{
    height: 25,
  },

  content: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 20,
  }

});

}


//var yourPicture = require ('./images/picture.jpg');



type Props = {};
export default class SecondTop extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={{alignItems: 'flex-end', position: 'absolute', left: 5, top: 5}}>
        <Button   type="custom"
                  backgroundColor={"#7bd2d8"}
                  borderColor={"#16a085"}
                  borderRadius={10}
                  shadowHeight={5}
                  containerStyle={styles.buttonContainer}
                  contentStyle={styles.content}
                 onPress={() =>
                   this.props.navigation.navigate('CrisisPlan')
                 }
               > Close </Button>

               </View>

               <View style={{
                 flex: 1,
                 paddingTop: 45,
                 paddingBottom: 5,
                 padding: 16,
               }}>

               <Text style={styles.text}>Exercise and diet are very important in improving mental health. It is important to find the right exercise program for yourself. That may include running, walking, swimming, aerobic classes, and/or cycling, just to name a few.  Exercise increases the feel-good hormones like endorphins which can in-turn improve mood.
</Text>
      </View>
      </View>
    );
  }
}
