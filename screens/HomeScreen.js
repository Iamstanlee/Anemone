/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';


type Props = {};
export default class HomeScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Anemone</Text>
        <Image source={{require:('./assets/anemone.png')}}/>
        <Button
                 title="Get Started"
                 onPress={() =>
                   this.props.navigation.navigate('CrisisPlan')
                 }
               />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
