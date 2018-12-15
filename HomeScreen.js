/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


type Props = {};
export default class HomeScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Anemone!</Text>
        <Button
                 title="Get Started"
                 onPress={() =>
                   this.props.navigation.navigate('StartScreen')
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
