/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage} from 'react-native';




type Props = {};
export default class EmergencyResources extends React.Component{
  async saveKey(key, value){
    //value = JSON.stringify(value)
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log("Error: could not save data" + error);

    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>You do not currently have a crisis plan set up</Text>
      <Button
      title="Go to render PDF screen"
      onPress={() =>
        this.props.navigation.navigate('PDFRender')
      }
      />

      <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
    //  value = {this.state.text}
    //  onChangeText= {(value) => this.saveKey(value)}
      onChangeText={(text) => {this.saveKey('trial', 'hello');}}
          //  const currText = {this.state.text},
    //  saveKey('trial', currText)
  //  }
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
