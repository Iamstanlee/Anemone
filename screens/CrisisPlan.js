import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, AsyncStorage, Dimensions, Image, TouchableWithoutFeedback, TouchableHighlight, Share, Animated, Easing, Alert} from 'react-native';
import Interactable from 'react-native-interactable';
import Modal from 'react-native-modalbox';
import Button from 'react-native-flat-button';
import LottieView from 'lottie-react-native';
import DeviceInfo from 'react-native-device-info';

const model = DeviceInfo.getModel();

var countNum = -1;
var planCreatedVar = false;
var EarlySymptomsV = "No early symptoms were filled out";
var SymptomManagementV = "No symptom management skills were filled out";
var CrisisSignsV = "No crisis signs were filled out";
var PeopleV = "No contacts of assistance were filled out";
var HowPeopleCanHelpV = "No instructions for contacts were filled out";
var CurrentMedicationsV = "No current medications were filled out";
var PastMedicationsV = "No past medications were filled out";
var TreatmentFacilitiesV = "No treatment facilities were filled out";
var OtherResourcesV = "No other resources were filled out";

export default class CrisisPlan extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
          progress: new Animated.Value(0),
          planCreated: false,
          count: -1,
          pdfPath: null
        };
      }

incrementCount(){
  this.setState({count:this.state.count + 1});
  //console.log("The count is " + this.state.count);
}

checkCountNum(){
  console.log("countNum:" + countNum);
  if (countNum !=-1){
    this.setState({count: countNum});
  }
}

async createView(){

    try {
      EarlySymptomsV = await this.getKey('EarlySymptoms');
      if (EarlySymptomsV == null){
        EarlySymptomsV = "No early symptoms were filled out";
      }

      console.log("ES:" + EarlySymptomsV);

      //EarlySymptoms = EarlySymptoms.split(" ").join(" \n");

      SymptomManagementV = await this.getKey('SymptomManagement');
      if (SymptomManagementV == null){
        SymptomManagementV = "No symptom management skills were filled out";
      }
    //  SymptomManagement = SymptomManagement.split(" ").join(" \n");

      CrisisSignsV = await this.getKey('CrisisSigns');
      if (CrisisSignsV == null){
        CrisisSignsV = "No crisis signs were filled out";
      }
    //  CrisisSigns = CrisisSigns.split(" ").join(" \n");

      PeopleV = await this.getKey('People');
      if (PeopleV == null){
        PeopleV = "No contacts of assistance were filled out";
      }
    //  People = People.split(" ").join(" \n");

      HowPeopleCanHelpV = await this.getKey('HowPeopleCanHelp');
      if (HowPeopleCanHelpV == null){
        HowPeopleCanHelpV = "No instructions for contacts were filled out";
      }
    //  HowPeopleCanHelp = HowPeopleCanHelp.split(" ").join(" \n");

      CurrentMedicationsV = await this.getKey('CurrentMedications');
      if (CurrentMedicationsV == null){
        CurrentMedicationsV = "No current medications were filled out";
      }
    //  CurrentMedications = CurrentMedications.split(" ").join(" \n");

      PastMedicationsV = await this.getKey('PastMedications');
      if (PastMedicationsV == null){
        PastMedicationsV = "No past medications were filled out";
      }
    //  PastMedications = PastMedications.split(" ").join(" \n");

      TreatmentFacilitiesV = await this.getKey('TreatmentFacilities');
      if (TreatmentFacilitiesV == null){
        TreatmentFacilitiesV = "No treatment facilities were filled out";
      }
    //  TreatmentFacilities = TreatmentFacilities.split(" ").join(" \n");

      OtherResourcesV = await this.getKey('OtherResources');
      if (OtherResourcesV == null){
        OtherResourcesV = "No other resources were filled out";
      }
    //  OtherResources = OtherResources.split(" ").join(" \n");



    }

    catch (err) {
      console.log("Retrieving failed " + err);
    }

    //this.forceUpdate();

  }

emergencyAlert(){

  if (this.state.count == -1){
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



  componentDidMount() {

  //

  console.log(JSON.stringify(this.props.navigation.state));


  const {state} = this.props.navigation;

  if(state.params!= null && state.params!=undefined && state.params!='undefined' && state.params!="") {
    console.log("params" + state.params);
    countNum = state.params.count;
    planCreatedVar = state.params.planCreated;

 }

 if (countNum == -1){
   this.emergencyAlert();

 }

 if (planCreatedVar == 'true') {
   this.checkPlan();
   this.getPDF();


 }





  //console.log("COUNT:" + countNum);

         this.setupAnimation();

        this.checkCountNum();

        this.checkPlan();


        this.getPDF();

        this.createView();
        //console.log(JSON.stringify(this.props));
      //  console.log("props " + JSON.stringify(this.props.navigation.state));
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
      console.log("RET: " + value);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }


  async getPDF(){
    pdfPath = await this.getKey('CrisisPlan');
    this.setState({pdfPath: pdfPath});

  }

  async checkPlan(){
      let { planCreated } = this.state;

      planVar = await this.getKey('PlanCreated');

      if (planVar == 'true' || planCreatedVar == 'true'){
        this.setState({planCreated:true})
        console.log("Plan is true");

      }

      else {
        this.setState({planCreated:false})
        console.log("Plan is false");

      }
    }

  render() {

    let { count, pdfPath, planCreated} = this.state;

    return (

      <View style={styles.container}>

{(this.state.count==0 && (this.state.planCreated == false)) ?
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

          {(this.state.planCreated == false) ? <Text style={styles.welcome} pointerEvents="none">
          You do not currently have a crisis plan set up
          </Text> : null}

          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>

          {(this.state.planCreated == false) ?
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

                         {(this.state.planCreated == false) ?
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

          {(this.state.planCreated != false) ?
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


          {(this.state.planCreated != false) ?
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

          {(this.state.planCreated != false) ?
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

    export {EarlySymptomsV, SymptomManagementV, CrisisSignsV, PeopleV, HowPeopleCanHelpV, CurrentMedicationsV, PastMedicationsV, TreatmentFacilitiesV, OtherResourcesV};




    var styles = StyleSheet.create();

    if (model == 'iPhone XS Max' || model == 'iPhone 6 Plus' || model == 'iPhone 6s Plus' || model == 'iPhone 7 Plus' || model == 'iPhone 8 Plus' || model == 'iPhone XR'){
        styles = StyleSheet.create({
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
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'ProximaNova-Bold'
    },

    buttonContainer:{
      width: 300,
      height: 45,
    },

        });
    }

    else {
      styles = StyleSheet.create({
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
    },

        });


  }
