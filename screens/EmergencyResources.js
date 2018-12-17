/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableHighlight} from 'react-native';
import {List, ListItem} from 'react-native-elements';


const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
    component: <TouchableHighlight onPress={()=> this._linkPressed('http://www.google.com')}/>

  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
]

export default class EmergencyResources extends React.Component{

  _linkPressed: function(url){
       LinkingIOS.openURL(url);
   }

  render() {
    return (
      <View>
    <Text>
    {"\n"}{"\n"}{"\n"}
      </Text>
      <List>
  {
    list.map((item) => (
      <ListItem
        key={item.title}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
  }
</List>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
