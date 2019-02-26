import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, AsyncStorage, Dimensions, Image, TouchableWithoutFeedback, TouchableHighlight, Share, Animated, Easing, Alert} from 'react-native';
import Interactable from 'react-native-interactable';
import Modal from 'react-native-modalbox';
import Button from 'react-native-flat-button';
import LottieView from 'lottie-react-native';

var count = -1;
var pdfPath = null;

  export default class CrisisPlan extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          progress: new Animated.Value(0),
        };
      }

incrementCount(){
  count = count+1;
  console.log("The count is " + count);
  this.forceUpdate();
}


emergencyAlert(){

  if (count == -1){
  Alert.alert(
  'Are you currently experiencing a mental health emergency?',
  'If you select "Yes", you will be directed to emergency resources.',
  [
    {text: 'Yes', onPress: () => {this.props.navigation.navigate('EmergencyResources'); this.incrementCount();}},
    {text: 'No', onPress: () => this.incrementCount()},
  ],
  {cancelable: true},
);
}
}

  state = {
    planCreated: null,
  }


  componentDidMount() {

     this.setupAnimation()

   }

   setupAnimation = () => {
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 7000,
        easing: Easing.linear,
      }).start(() => {
      this.setState({
        progress: new Animated.Value(0),
      }, () => this.setupAnimation())
    })
    }


  async getKey(key){
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }


  async getPDF(){
    pdfPath = await this.getKey('CrisisPlan');

  }

  render() {

    this.emergencyAlert();

    this.getPDF();

    return (

      <View style={styles.container}>

{(count==0) ?
      <Modal style={styles.modal} ref="sully" isOpen={true}
      swipetoClose="true"
      position={"center"}
      backdropOpacity={0.5}
      backdropPressToClose={false}
      coverScreen={false}
      onClosed={()=>{this.incrementCount();}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>

        <Image source={require('../assets/sullywelcome.png')} style={{width: 335, height: 245}}/>


          <Text style={{backgroundColor: 'white', fontFamily: 'ProximaNova-Bold' }}>  Swipe down to close  </Text>
          </View>
          </Modal>

          : null}

          <View style={{
            position: 'absolute',
            height: '200%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',}}>
            <LottieView
            source={require('../bubbles.json')}
            style={{
              height: '70%',
              width: '70%',
              }}
              autoPlay={true}
              loop={true}
              progress={this.state.progress}
              />
              </View>

          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>

          {!(this.getKey('PlanCreated') != null) ? <Text style={styles.welcome} pointerEvents="none">
          You do not currently have a crisis plan set up
          </Text> : null}

          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>

          {!(this.getKey('PlanCreated') != null) ?
                          <Button
                           type="custom"
                           backgroundColor={"#f9b5ac"}
                           borderColor={"#D88C82"}
                           borderRadius={10}
                           shadowHeight={5}
                           containerStyle={styles.buttonContainer}
                           contentStyle={styles.content}
                         onPress={() => this.props.navigation.navigate('CreateSwipe')}> Create a Crisis Plan </Button> : null}

                         <Text pointerEvents="none">
                         {"\n"}{"\n"}{"\n"}
                         </Text>

                         {!(this.getKey('PlanCreated') != null) ?
                                         <Button
                                          type="custom"
                                          backgroundColor={"#b6d332"}
                                          borderColor={"#91AA1E"}
                                          borderRadius={10}
                                          shadowHeight={5}
                                          containerStyle={styles.buttonContainer}
                                          contentStyle={styles.content}
                                        onPress={() => this.props.navigation.navigate('WhatPlan')}> What is a Crisis Plan? </Button> : null}

                         <Text pointerEvents="none">
                         {"\n"}{"\n"}{"\n"}
                         </Text>

          {(this.getKey('PlanCreated') != null) ?
          <Button
          type="custom"
          backgroundColor={"#f9b5ac"}
          borderColor={"#D88C82"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content}
          onPress={() => this.props.navigation.navigate('ViewPlan')}> View your Crisis Plan </Button> : null}


          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>


          {(this.getKey('PlanCreated') != null) ?
          <Button
          type="custom"
          backgroundColor={"#b6d332"}
          borderColor={"#91AA1E"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content} onPress={() => this.props.navigation.navigate('EditSwipe')}> Edit your Crisis Plan </Button> : null}

                    <Text pointerEvents="none">
                    {"\n"}{"\n"}{"\n"}
                    </Text>

          {(this.getKey('PlanCreated') != null) ?
          <Button
          type="custom"
          backgroundColor={"#F9BD39"}
          borderColor={"#C99422"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content} onPress={() => Share.share({url: pdfPath, title: 'Crisis Plan'})}> Share your Crisis Plan </Button> : null}


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
        fontFamily: 'ProximaNova-Regular',
        color: 'white'
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },

      modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 350,
    backgroundColor: 'transparent'
  },

  content:{
  fontSize: 22,
  textAlign: 'center',
  fontFamily: 'ProximaNova-Bold'
},

buttonContainer:{
  width: 250,
  height: 32,
}

    });
