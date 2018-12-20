/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableHighlight, Linking, Icon} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import call from 'react-native-phone-call'
import SendSMS from 'react-native-sms'


const emergencyline = {
  number: '911', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
}

const suicideLine = {
  number: '18002738255', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
}


const suicideTextLine = {
  body: '',
  recipients: ['741741'],
  successTypes: ['sent', 'queued'],
  allowAndroidSendWithoutReadPermission: false
}

const list = [
  {
    title: 'Urgent Care',
    icon: 'av-timer',
    component: () =>
    <View>
    <TouchableHighlight
    style={{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    onPress={()=> Linking.openURL('https://www.google.com/maps/search/urgent+care/').catch(err => console.error('An error occurred', err))}>
    <View>
    <Text style={styles.buttonText}>Urgent Care</Text>
    </View>
    </TouchableHighlight>
    </View> ,


  },
  {
    title: 'Hospitals',
    icon: 'flight-takeoff',
    component: () =>
    <View>
    <TouchableHighlight
    style={{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    onPress={()=> Linking.openURL('https://www.google.com/maps/search/hospital/').catch(err => console.error('An error occurred', err))}>
    <View>
    <Text style={styles.buttonText}>Hospitals</Text>
    </View>
    </TouchableHighlight>
    </View> ,
  },

  {
    title: 'Emergency Line',
    icon: 'flight-takeoff',
    component: () =>
    <View>
    <TouchableHighlight
    style={{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    onPress={()=> call(emergencyline).catch(console.error)}>
    <View>
    <Text style={styles.buttonText}>Emergency Hotline</Text>
    </View>
    </TouchableHighlight>
    </View> ,
  },

  {
    title: 'Suicide Line',
    icon: 'flight-takeoff',
    component: () =>
    <View>
    <TouchableHighlight
    style={{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    onPress={()=> call(suicideLine).catch(console.error)}>
    <View>
    <Text style={styles.buttonText}>Suicide Hotline</Text>
    </View>
    </TouchableHighlight></View> ,
  },

  {
    title: 'Suicide Text Line',
    icon: 'flight-takeoff',
    component: () =>
    <View>
    <TouchableHighlight
    style={{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    onPress={()=> SendSMS.send(suicideTextLine, (completed, cancelled, error) => {console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

	})}>
  <View>
  <Text style={styles.buttonText}>Suicide Textline</Text>
  </View>
  </TouchableHighlight>
  </View> ,
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
});
