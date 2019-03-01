/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Button from 'react-native-flat-button';
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
export default class ThirdTop extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={{alignItems: 'flex-end', position: 'absolute', left: 5, top: 5}}>
        <Button   type="custom"
                  backgroundColor={"#b6d332"}
                  borderColor={"#91AA1E"}
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

               <Text style={styles.text}>Grounding is a strategy used to help us “detach” from emotional pain by focusing on a specific thing around you or in your situation. Grounding can done at any time or place with no materials needed. There are many different types of grounding, such as physical grounding, mental grounding, and self soothing grounding.
</Text>
      </View>
      </View>
    );
  }
}
