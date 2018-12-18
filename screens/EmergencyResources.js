/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableHighlight, Linking} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import call from 'react-native-phone-call'

const emergencyline = {
  number: '911', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
}

const suicideLine = {
  number: '18002738255', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
}



const list = [
  {
    title: 'Urgent Care',
    icon: 'av-timer',
    component: () =>  <View><TouchableHighlight onPress={()=> Linking.openURL('https://www.google.com/maps/search/urgent+care/').catch(err => console.error('An error occurred', err))}><View style={styles.item}><Text>Urgent Care</Text></View></TouchableHighlight></View> ,

  },
  {
    title: 'Hospitals',
    icon: 'flight-takeoff',
    component: () =>  <View><TouchableHighlight onPress={()=> Linking.openURL('https://www.google.com/maps/search/hospital/').catch(err => console.error('An error occurred', err))}><View style={styles.item}><Text>Hospital</Text></View></TouchableHighlight></View> ,
  },

  {
    title: 'Emergency Line',
    icon: 'flight-takeoff',
    component: () =>  <View><TouchableHighlight onPress={()=> call(emergencyline).catch(console.error)}><View style={styles.item}><Text>Emergency Hotline</Text></View></TouchableHighlight></View> ,
  },

  {
    title: 'Suicide Line',
    icon: 'flight-takeoff',
    component: () =>  <View><TouchableHighlight onPress={()=> call(suicideLine).catch(console.error)}><View style={styles.item}><Text>Suicide Hotline</Text></View></TouchableHighlight></View> ,
  },
]

export default class EmergencyResources extends React.Component{

  // _linkPressed=function(url){
  //   Linking.openURL(url).catch(err => console.error('An error occurred', err));
  //  }

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
        component={item.component}
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
