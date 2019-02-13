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
                  backgroundColor={"#F9BD39"}
                  borderColor={"#C99422"}
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

               <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Diversion skills are intended to temporarily redirect oneself in order to cope with certain stressors in the moment. These skills are also known as distraction techniques and help us self regulate our emotions when they’re heightened. They can be classified as anything that helps redirect the intensity of the emotions.</Text>
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
