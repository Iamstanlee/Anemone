/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableHighlight, Linking, Icon, Dimensions, AsyncStorage} from 'react-native';
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
    style={this.buttonStyle(1, 1)}
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
    style={this.buttonStyle(1, 2)}
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
    style={this.buttonStyle(2, 1)}
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
    style={this.buttonStyle(2, 2)}
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
    style={this.buttonStyle(3, 1)}
    onPress={()=> SendSMS.send(suicideTextLine, (completed, cancelled, error) => {console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

	})}>
  <View>
  <Text style={styles.buttonText}>Suicide Textline</Text>
  </View>
  </TouchableHighlight>
  </View> ,
  },

  {
    title: 'Personal Contact',
    icon: 'flight-takeoff',
    component: () =>
    <View>
    <TouchableHighlight
    style={this.buttonStyle(3, 3)}
    //TODO: Set up if in async, call number, else modal for setting contact
    //TODO: Add "edit number" button to Modal
    onPress={()=> call(suicideLine).catch(console.error)}>
  <View>
  <Text style={styles.buttonText}>Personal Contact</Text>
  </View>
  </TouchableHighlight>
  </View> ,
  },
]

export default class EmergencyResources extends React.Component{

  async saveKey(key, value){
  //value = JSON.stringify(value).replace(/\\n/g, "ooch");
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log("Error: could not save data" + error);

    }
  }

  async getKey(key){
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }
  //
  // var isPC = false;
  //
  // if (getKey('PC')!=null){
  //   isPC = true;
  // }


  // _linkPressed=function(url){
  //   Linking.openURL(url).catch(err => console.error('An error occurred', err));
  //  }

  render() {
    var {height, width} = Dimensions.get('window');

    buttonStyle = function(rNum, cNum) {
     return {
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'#fff',
       borderRadius:100,
       top: (rNum*(height))/6,
       left: (cNum*(width))/6,

     }
   }

    return (
      <View>
    <Text>
    {"\n"}{"\n"}{"\n"}
      </Text>


      <List>
      <View style={{flexDirection: 'row'}}>
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
  </View>
</List>
</View>

);
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
},
  buttonText: {
    fontSize: 15,
    //fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  buttonStyle: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:100,
  },
});
