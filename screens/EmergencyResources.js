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


const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
    component: () =>  <View><TouchableHighlight onPress={()=> Linking.openURL('https://www.google.com').catch(err => console.error('An error occurred', err))}><View style={styles.item}><Text>Oochoo</Text></View></TouchableHighlight></View> ,

  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    component: () =>  <View><TouchableHighlight onPress={()=> Linking.openURL('https://www.google.com').catch(err => console.error('An error occurred', err))}><View style={styles.item}><Text>Tatti</Text></View></TouchableHighlight></View> ,
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
