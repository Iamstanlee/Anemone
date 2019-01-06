/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

//var yourPicture = require ('./images/picture.jpg');



type Props = {};
export default class FirstTop extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Button
                 title="Get Started"
                 onPress={() =>
                   this.props.navigation.navigate('CrisisPlan')
                 }
               />

               <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor, purus a lacinia suscipit, augue arcu tempus ante, sed aliquam sapien ligula sit amet orci. Ut non nisi eu dui accumsan iaculis sed nec urna. Proin quis purus condimentum, sodales mi eget, faucibus ex. Mauris pharetra posuere elementum. Phasellus nec libero tempus, sagittis tortor nec, eleifend nibh.</Text>
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
});
