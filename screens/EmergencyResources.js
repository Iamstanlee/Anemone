/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React from 'react';
import {Platform, StyleSheet, Text, View, Button, SectionList, TouchableOpacity, Linking, Icon, Dimensions, AsyncStorage, Image, TextInput, Alert} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import call from 'react-native-phone-call'
import SendSMS from 'react-native-sms'
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modalbox';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import LottieView from 'lottie-react-native';
import DeviceInfo from 'react-native-device-info';

const model = DeviceInfo.getModel();

//var isSaved = false;

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
  prompt: false
}

var styles = StyleSheet.create();

  if (model == 'iPhone 5s' || model == 'iPhone SE'){
    styles = StyleSheet.create({

      buttonText: {
        fontSize: 11,
        fontWeight: '500',
        fontFamily: 'ProximaNova-Bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        },
        modal: {
          //justifyContent: 'center',
        //  alignItems: 'center',
          height: 200,
          width: 250,
          backgroundColor: 'transparent',
          },
          });


}

else if (model == 'iPhone XS Max' || model == 'iPhone 6 Plus' || model == 'iPhone 6s Plus' || model == 'iPhone 7 Plus' || model == 'iPhone 8 Plus' || model == 'iPhone XR'){
  styles = StyleSheet.create({

    buttonText: {
      fontSize: 17,
      fontWeight: '500',
      fontFamily: 'ProximaNova-Bold',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
      },
      modal: {
        //justifyContent: 'center',
      //  alignItems: 'center',
        height: 200,
        width: 250,
        backgroundColor: 'transparent',
        },
        });


}

else {
  styles = StyleSheet.create({

    buttonText: {
      fontSize: 15,
      fontWeight: '500',
      fontFamily: 'ProximaNova-Bold',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
      },
      modal: {
        //justifyContent: 'center',
      //  alignItems: 'center',
        height: 200,
        width: 350,
        backgroundColor: 'transparent',
        },
        });


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
      //this.state.isPC = 'true';
      this.setState({isPC: true});
      PCnumber.number = await this.getKey('PC');
    }

    else {
      this.setState({isPC: false});
    }

    console.log("PC is " + this.state.isPC);
  }

  async saveKey(key, value){
    //value = JSON.stringify(value).replace(/\\n/g, "ooch");
    try {
      await AsyncStorage.setItem(key, value);
      //isSaved = true;
      } catch (error) {
        // Error saving data
        console.log("Error: could not save data" + error);

      }
    }

    async getKey(key){


      try {
        const value = await AsyncStorage.getItem(key);
        //isSaved = false;
        //  console.log("GETKEY Value is " + value);
        return value;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
      }

      callNumber(){

        if (PCnumber.number == null | PCnumber.number == "" | PCnumber.number == " ") {

          Alert.alert(
            'Alert',
            'No Number Provided',
            [
            {text: 'Edit Number', onPress: () => this.refs.personalContact.open()},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'}
            ],{ cancelable: true })

        }

        else {
        call(PCnumber).catch(console.error);
        }

      }



      render() {
        //this.checkPC();

        var list1 = [
        {
          title: 'Local Hospitals',
          icon: 'flight-takeoff',
          component: () =>
          <View style={outerButtonStyle(1,1,1)}>
          <TouchableOpacity
          style={innerButtonStyle(1, 2, 1)}
          onPress={()=>  {this.hospitalanimated.swing(1000).then(endState => {Linking.openURL('https://www.google.com/maps/search/hospital/').catch(err => console.error('An error occurred', err));}) }}>
          <Animatable.View ref={component => this.hospitalanimated = component}>
          <Text style={styles.buttonText}>Local Hospitals</Text>
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
            onPress={()=> {this.emergencyanimated.swing(1000).then(endState => {call(emergencyline).catch(console.error);})}}>
            <Animatable.View ref={component => this.emergencyanimated = component}>
            <Text style={styles.buttonText}>Emergency Hotline</Text>
            </Animatable.View>
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
              onPress={()=> {this.localanimated.swing(1000).then(endState => {Linking.openURL('https://www.google.com/search?q=local+crisis+lines').catch(err => console.error('An error occurred', err));}) }}>
              <Animatable.View ref={component => this.localanimated = component}>
              <Text style={styles.buttonText}>Local Crisis Line</Text>
              </Animatable.View>
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
                onPress={()=> {this.suicidelineanimated.swing(1000).then(endState => {call(suicideLine).catch(console.error);})}}>
                <Animatable.View ref={component => this.suicidelineanimated = component}>
                <Text style={styles.buttonText}>Suicide Hotline</Text>
                </Animatable.View>
                </TouchableOpacity></View> ,
                },

                {
                  title: 'Suicide Text Line',
                  icon: 'flight-takeoff',
                  component: () =>
                  <View style={outerButtonStyle(2,2,0)}>
                  <TouchableOpacity
                  style={innerButtonStyle(3, 1, 0)}
                  onPress={()=> {this.textanimated.swing(1000).then(endState => {SendSMS.send(suicideTextLine, (completed, cancelled, error) => {console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);})})}}>
                  <Animatable.View ref={component => this.textanimated = component}>
                  <Text style={styles.buttonText}>Suicide Textline</Text>
                  </Animatable.View>
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
                    onPress={() => {this.personalanimated.swing(1000).then(endState => {this.forceUpdate(); this.checkPC(); this.forceUpdate(); ((this.state.isPC) ?

                      Alert.alert(
                        'Alert',
                        'Call Personal Contact?',
                        [
                        {text: 'Call', onPress: () => this.callNumber()},
                        {text: 'Edit Number', onPress: () => this.refs.personalContact.open()},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'}
                        ],{ cancelable: true }) : (this.refs.personalContact.open()))})}}>

                        <Animatable.View ref={component => this.personalanimated = component}>
                        <Text style={styles.buttonText}>Personal Contact</Text>
                        </Animatable.View>
                        </TouchableOpacity>
                        </View> ,
                        },
                        ]

                        var {height, width} = Dimensions.get('window');
                        //  console.log("height: " + height);

                        //console.log("width: " + width);
                        var innerColor = ['#af7b93', '#7bd2d8', '#b6d332', '#f9b5ac', '#ee7674', '#F9BD39']

                        var outerColor = ['#7C4D63', '#16a085', '#91AA1E', '#D88C82', '#C65351', '#C99422']

                        if (model == 'iPhone 5s' || model == 'iPhone SE'){


                        innerButtonStyle = function(rNum, cNum, colNum) {
                          return {
                            //borderWidth:,
                            //borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:80,
                            height:80,
                            backgroundColor:innerColor[colNum],
                            borderRadius:80,
                            textAlign: 'center'
                            //position: 'absolute'
                            //   top: (rNum*(height))/6,
                            // left: (cNum*(width))/6 - 100,

                          }
                        }

                        outerButtonStyle = function(rNum, cNum, colNum) {
                          return {
                            borderWidth:5,
                            //position: 'absolute',
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:100,
                            height:100,
                            backgroundColor:'transparent',
                            borderColor:outerColor[colNum],
                            borderRadius:100,
                            top: (rNum*(height))/6,
                            //left: (cNum*(width))/6,

}
                          }
                        }

                      else if (model == 'iPhone XS Max' || model == 'iPhone 6 Plus' || model == 'iPhone 6s Plus' || model == 'iPhone 7 Plus' || model == 'iPhone 8 Plus' || model == 'iPhone XR'){


                        innerButtonStyle = function(rNum, cNum, colNum) {
                          return {
                            //borderWidth:,
                            //borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:120,
                            height:120,
                            backgroundColor:innerColor[colNum],
                            borderRadius:120,
                            textAlign: 'center'
                            //position: 'absolute'
                            //   top: (rNum*(height))/6,
                            // left: (cNum*(width))/6 - 100,

                          }
                        }

                        outerButtonStyle = function(rNum, cNum, colNum) {
                          return {
                            borderWidth:5,
                            //position: 'absolute',
                            borderColor:'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:140,
                            height:140,
                            backgroundColor:'transparent',
                            borderColor:outerColor[colNum],
                            borderRadius:140,
                            top: (rNum*(height))/6,
                            //left: (cNum*(width))/6,

}
                          }
                        }


                        else {
                          innerButtonStyle = function(rNum, cNum, colNum) {
                            return {
                              //borderWidth:,
                              //borderColor:'rgba(0,0,0,0.2)',
                              alignItems:'center',
                              justifyContent:'center',
                              width:100,
                              height:100,
                              backgroundColor:innerColor[colNum],
                              borderRadius:100,
                              textAlign: 'center'
                              //position: 'absolute'
                              //   top: (rNum*(height))/6,
                              // left: (cNum*(width))/6 - 100,

                            }
                          }

                          outerButtonStyle = function(rNum, cNum, colNum) {
                            return {
                              borderWidth:5,
                              //position: 'absolute',
                              borderColor:'rgba(0,0,0,0.2)',
                              alignItems:'center',
                              justifyContent:'center',
                              width:120,
                              height:120,
                              backgroundColor:'transparent',
                              borderColor:outerColor[colNum],
                              borderRadius:120,
                              top: (rNum*(height))/6,
                              //left: (cNum*(width))/6,

  }
                            }
                        }
                        return (
                          <View style={{backgroundColor:'transparent'}}>


                          <Modal style={styles.modal} ref="personalContact" isOpen={false}
                          swipetoClose="true"
                          position={"center"}
                          backdropOpacity={0.5}
                          coverScreen={true}>
                          <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                        {((model == 'iPhone 5s') || (model == 'iPhone SE')) ?

                          <Kohana
                            style={{ backgroundColor: '#ffffff'}}
                            label={'Enter Personal Contact:'}
                            iconClass={MaterialsIcon}
                            iconName={'phone'}
                            iconColor={'#af7b93'}
                            labelStyle={{ color: '#000000', fontFamily:'ProximaNova-Bold'}}
                            inputStyle={{ color: '#F9BD39', fontFamily: 'ProximaNova-Regular'}}
                            onChangeText={(text) => {this.saveKey('PC', text); this.checkPC();}}
                            keyboardType={'numeric'}
                            placeholder="Enter number here"
                            textContentType={'telephoneNumber'}
                            maxLength={10}
                            useNativeDriver
                            /> :

                            <Kohana
                              style={{ backgroundColor: '#ffffff'}}
                              label={'Enter Personal Contact Phone Number:'}
                              iconClass={MaterialsIcon}
                              iconName={'phone'}
                              iconColor={'#af7b93'}
                              labelStyle={{ color: '#000000', fontFamily:'ProximaNova-Bold'}}
                              inputStyle={{ color: '#F9BD39', fontFamily: 'ProximaNova-Regular'}}
                              onChangeText={(text) => {this.saveKey('PC', text); this.checkPC();}}
                              keyboardType={'numeric'}
                              placeholder="Enter number here"
                              textContentType={'telephoneNumber'}
                              maxLength={10}
                              useNativeDriver
                              />}
                            <Text>{"\n"}{"\n"}</Text>
                            <Text style={{backgroundColor: 'white', fontFamily:'ProximaNova-Bold'}}> Swipe down to close </Text>
                            </View>
                            </Modal>

                            <Text>
                            {"\n"}{"\n"}{"\n"}
                            </Text>

                            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>

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
                                </View>

                                );
                              }
                            }
