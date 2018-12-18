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
<<<<<<< HEAD
import SendSMS from 'react-native-sms'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient' // Only if no expo

=======
>>>>>>> 096674bdca70e8dd614023f73169118511f90669

const emergencyline = {
  number: '911', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
}

const suicideLine = {
  number: '18002738255', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
}


<<<<<<< HEAD
const suicideTextLine = {
  body: '',
  recipients: ['741741'],
  successTypes: ['sent', 'queued'],
  allowAndroidSendWithoutReadPermission: false
}
=======
>>>>>>> 096674bdca70e8dd614023f73169118511f90669

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
<<<<<<< HEAD

  {
    title: 'Suicide Text Line',
    icon: 'flight-takeoff',
    component: () =>  <View><TouchableHighlight onPress={()=> SendSMS.send(suicideTextLine, (completed, cancelled, error) => {

		console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

	})}><View style={styles.item}><Text>Suicide Textline</Text></View></TouchableHighlight></View> ,
  },
=======
>>>>>>> 096674bdca70e8dd614023f73169118511f90669
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
<<<<<<< HEAD
      <Button
   title="Sign In"
   buttonStyle={{
     height: 54,
   }}
   ViewComponent={LinearGradient}
   linearGradientProps={{
     colors: ['#4E9CD0', '#F5FCFF'],
     start: { x: 0, y: 0.5 },
     end: { x: 1, y: 0.5 },
   }}
   containerStyle={{
     marginBottom: 20,
   }}/>
    </View>
//       <List>
//   {
//     list.map((item) => (
//       <ListItem
//         key={item.title}
//         title={item.title}
//         leftIcon={{name: item.icon}}
//         component={item.component}
//       />
//     ))
//   }
// </List>

);
=======
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
>>>>>>> 096674bdca70e8dd614023f73169118511f90669
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
