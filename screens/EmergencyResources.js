/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableOpacity, Linking, Icon, Dimensions, AsyncStorage, Image, TextInput} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import call from 'react-native-phone-call'
import SendSMS from 'react-native-sms'
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modalbox';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';


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

const PCnumber = {
  number: null,
  prompt: true

  //TODO: Fix state for number resetting when you open and close the app
  //TODO: Fix modal so that if you accidentally dismiss the first time, it comes up again
}

export default class EmergencyResources extends React.Component{

  constructor(props) {
    super(props);
  }


  state = {
    isPC: null,
  };

  async checkPC(){
    if(await this.getKey('PC')!=null)
    {
      this.state.isPC = 'true';
      PCnumber.number = JSON.stringify(await this.getKey('PC'));
      this.forceUpdate();
    }

    else {
      this.state.isPC = 'false'
    }

    console.log("PC is " + this.state.isPC);
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
        onPress={() => {this.checkPC(); this.forceUpdate(); ((this.state.isPC) ? (call(PCnumber).catch(console.error)): (this.refs.personalContact.open()))}}>
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

      <Modal style={styles.modal} ref="personalContact" isOpen={false}
      swipetoClose="true"
      position={"center"}
      backdropOpacity={0.5}
      coverScreen={false}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>

        <Kohana
        style={{ backgroundColor: '#ffffff' }}
        label={'Personal Contact Phone Number'}
        iconClass={MaterialsIcon}
        iconName={'phone'}
        iconColor={'#af7b93'}
        labelStyle={{ color: '#000000', fontFamily:'Arial', fontWeight: 'normal'}}
        inputStyle={{ color: '#F9BD39' }}
        useNativeDriver
        />

        <Text style={{backgroundColor: 'white'}}>Swipe down to close</Text>
        </View>
        </Modal>

    <Text>
    {"\n"}{"\n"}{"\n"}
      </Text>
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 350,
    backgroundColor: 'white'
  },
});
