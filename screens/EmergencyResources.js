/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableOpacity, Linking, Icon, Dimensions, AsyncStorage, Image} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import call from 'react-native-phone-call'
import SendSMS from 'react-native-sms'
import * as Animatable from 'react-native-animatable';
import Interactable from 'react-native-interactable';

//TODO: Add circle outline with bit of white space around circle buttons

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


export default class EmergencyResources extends React.Component{

  constructor(props) {
    super(props);
  }

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

  //var isPC = false;
  //
  // if(this.getKey('PC')!=null)
  // {
  //   isPC = true;
  // }


  // _linkPressed=function(url){
  //   Linking.openURL(url).catch(err => console.error('An error occurred', err));
  //  }

  render() {
    var list1 = [
      {
        title: 'Hospitals',
        icon: 'flight-takeoff',
        component: () =>
        <View style={outerButtonStyle(1,1,1)}>
        <TouchableOpacity
        style={innerButtonStyle(1, 2, 1)}
        onPress={()=> {this.view.pulse(200); Linking.openURL('https://www.google.com/maps/search/hospital/').catch(err => console.error('An error occurred', err)); }}>
        <Animatable.View>
        <Text style={styles.buttonText}>Hospitals</Text>
        </Animatable.View>
        </TouchableOpacity>
        </View> ,
      },

      {
        title: 'Emergency Line',
        icon: 'flight-takeoff',
        component: () =>
        <View style={outerButtonStyle(1, 1,2)}>
        <TouchableOpacity
        style={innerButtonStyle(2, 1, 2)}
        onPress={()=> {this.view.pulse(200); call(emergencyline).catch(console.error); }}>
        <View>
        <Text style={styles.buttonText}>Emergency Hotline</Text>
        </View>
        </TouchableOpacity>
        </View> ,
      },


        {
          title: 'Local Crisis Line',
          icon: 'flight-takeoff',
          component: () =>
          <View style={outerButtonStyle(1,1,4)}>
          <TouchableOpacity
          style={innerButtonStyle(2, 1, 4)}
          onPress={()=> {this.view.pulse(200); Linking.openURL('https://www.google.com/search?q=local+crisis+lines').catch(err => console.error('An error occurred', err)); }}>
          <View>
          <Text style={styles.buttonText}>Local Crisis Line</Text>
          </View>
          </TouchableOpacity>
          </View> ,
        },
    ]

    const list2 = [

      {
        title: 'Suicide Line',
        icon: 'flight-takeoff',
        component: () =>
        <View style={outerButtonStyle(2,2,3)}>
        <TouchableOpacity
        style={innerButtonStyle(2, 2, 3)}
        onPress={()=> call(suicideLine).catch(console.error)}>
        <View>
        <Text style={styles.buttonText}>Suicide Hotline</Text>
        </View>
        </TouchableOpacity></View> ,
      },

      {
        title: 'Suicide Text Line',
        icon: 'flight-takeoff',
        component: () =>
        <View style={outerButtonStyle(2,2,0)}>
        <TouchableOpacity
        style={innerButtonStyle(3, 1, 0)}
        onPress={()=> SendSMS.send(suicideTextLine, (completed, cancelled, error) => {console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

    	})}>
      <View>
      <Text style={styles.buttonText}>Suicide Textline</Text>
      </View>
      </TouchableOpacity>
      </View> ,
      },

      {
        title: 'Personal Contact',
        icon: 'flight-takeoff',
        component: () =>
        <View style={outerButtonStyle(2,2,5)}>
        <TouchableOpacity
        style={innerButtonStyle(3, 2, 5)}
        //TODO: Set up if in async, call number, else modal for setting contact
        //TODO: Add "edit number" button to Modal
        //TODO: Some way to signify contact is not already set
        onPress={(isPC, PCnumber)=> (isPC) ? (call(PCnumber).catch(console.error)): (call(suicideLine).catch(console.error))}>
      <View>
      <Text style={styles.buttonText}>Personal Contact</Text>
      </View>
      </TouchableOpacity>
      </View> ,
      },
    ]

    var {height, width} = Dimensions.get('window');
  //  console.log("height: " + height);

    //console.log("width: " + width);
    var color = ['#af7b93', '#7bd2d8', '#b6d332', '#f9b5ac', '#ee7674', '#F9BD39']

    innerButtonStyle = function(rNum, cNum, colNum) {
     return {
       //borderWidth:,
       //borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:color[colNum],
       borderRadius:100,
       //position: 'absolute'
    //   top: (rNum*(height))/6,
      // left: (cNum*(width))/6 - 100,

     }
   }

   outerButtonStyle = function(rNum, cNum, colNum) {
    return {
      borderWidth:2,
      //position: 'absolute',
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:120,
      height:120,
      backgroundColor:'transparent',
      borderColor:color[colNum],
      borderRadius:120,
      top: (rNum*(height))/6,
      //left: (cNum*(width))/6,

    }
  }

    return (
      <View>

    <Text>
    {"\n"}{"\n"}{"\n"}
      </Text>

      <Interactable.View
      horizontalOnly={false}
      snapPoints={[
            {x: -140, y: -200},
            {x: 140, y: -200},
            {x: -140, y: -120},
            {x: 140, y: -120},
            {x: -140, y: 120},
            {x: 140, y: 120},
            {x: -140, y: 200},
            {x: 140, y: 200, tension: 50, damping: 0.9}
          ]}
      initialPosition={{x: -140, y: -100}}
      onSnap={this.onDrawerSnap}>

      <View>
      <Image source={require('../assets/seahorse.png')} style={{width: 50, height: 50}}/>
      </View>
      </Interactable.View>

      <List>
      <View style={{flexDirection: 'row', flex:2}}>
  {
    list1.map((item) => (
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

<List>
<View style={{flexDirection: 'row', flex:2}}>
{
list2.map((item) => (
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

  buttonText: {
    fontSize: 15,
    //fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
});
