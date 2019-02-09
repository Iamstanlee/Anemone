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


//var yourPicture = require ('./images/picture.jpg');



type Props = {};
export default class SecondTop extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={{alignItems: 'flex-end', position: 'absolute', left: 5, top: 5}}>
        <Button   type="custom"
                  backgroundColor={"#ee7674"}
                  borderColor={"#C65351"}
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

               <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>The way we breathe can affect our entire body. Breathing exercises are a great way to relax, reduce tension, and relieve stress. Breathing exercises are easy to learn and are effective when emotions are starting to escalate. Popular breathing exercises include square breathing, belly breathing, and 4-7-8 breathing.</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
