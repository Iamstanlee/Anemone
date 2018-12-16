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
export default class EmergencyResources extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Emergency Resources</Text>
        <Button
                 title="Go back home"
                 onPress={() =>
                   this.props.navigation.navigate('HomeScreen')
                 }
               />

               <Button
                        title="Go back one page"
                        onPress={() =>
                          this.props.navigation.navigate('CopingSkills')
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
