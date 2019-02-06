import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions, Share} from 'react-native';
import Swiper from 'react-native-swiper-animated';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {EarlySymptomsSwipe} from './EditSwipe.js';


var time= new Date().toLocaleString();

var dateTimeString = "This plan was created on " + time + ".";

var EarlySymptoms = "No early symptoms were filled out";
var SymptomManagement = "No symptom management skills were filled out";
var CrisisSigns = "No crisis signs were filled out";
var People = "No contacts of assistance were filled out";
var HowPeopleCanHelp = "No instructions for contacts were filled out";
var CurrentMedications = "No current medications were filled out";
var PastMedications = "No past medications were filled out";
var TreatmentFacilities = "No treatment facilities were filled out";
var OtherResources = "No other resources were filled out";

export default class EditPlan extends React.Component{

  state = {
    cardCount: 0,
  }


  async saveKey(key, value){
    //    value = JSON.stringify(value).replace(/\\n/g, "ooch");
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



  async pullAnswers(){


      try {
       EarlySymptoms = await this.getKey('EarlySymptoms');
       if (EarlySymptoms == null){
         EarlySymptoms = "No early symptoms were filled out";
       }

        //TODO: Still not picking up strings from this function
        //EarlySymptoms = EarlySymptoms.split(" ").join(" \n");

        SymptomManagement = await this.getKey('SymptomManagement');
        if (SymptomManagement == null){
          SymptomManagement = "No symptom management skills were filled out";
        }
      //  SymptomManagement = SymptomManagement.split(" ").join(" \n");

        CrisisSigns = await this.getKey('CrisisSigns');
        if (CrisisSigns == null){
          CrisisSigns = "No crisis signs were filled out";
        }
      //  CrisisSigns = CrisisSigns.split(" ").join(" \n");

        People = await this.getKey('People');
        if (People == null){
          People = "No contacts of assistance were filled out";
        }
      //  People = People.split(" ").join(" \n");

        HowPeopleCanHelp = await this.getKey('HowPeopleCanHelp');
        if (HowPeopleCanHelp == null){
          HowPeopleCanHelp = "No instructions for contacts were filled out";
        }
      //  HowPeopleCanHelp = HowPeopleCanHelp.split(" ").join(" \n");

        CurrentMedications = await this.getKey('CurrentMedications');
        if (CurrentMedications == null){
          CurrentMedications = "No current medications were filled out";
        }
      //  CurrentMedications = CurrentMedications.split(" ").join(" \n");

        PastMedications = await this.getKey('PastMedications');
        if (PastMedications == null){
          PastMedications = "No past medications were filled out";
        }
      //  PastMedications = PastMedications.split(" ").join(" \n");

        TreatmentFacilities = await this.getKey('TreatmentFacilities');
        if (TreatmentFacilities == null){
          TreatmentFacilities = "No treatment facilities were filled out";
        }
      //  TreatmentFacilities = TreatmentFacilities.split(" ").join(" \n");

        OtherResources = await this.getKey('OtherResources');
        if (OtherResources == null){
          OtherResources = "No other resources were filled out";
        }
      //  OtherResources = OtherResources.split(" ").join(" \n");



      }

      catch (err) {
        console.log("Retrieving failed " + err);
      }


    }


  render(){


    this.pullAnswers();

    return(

      <Swiper
      style={styles.wrapper}
      smoothTransition={true}
      loop={false}
      stack={true}
      swipeDirection={'right'}
      backPressToBack={true}
      stackDepth={3}
      showPagination={true}
      showPaginationBelow={true}
      paginationActiveDotColor={'#ee7674'}
      onRightSwipe =  {() => { if (this.state.cardCount < 7) {


        this._textInput.setNativeProps({text: ''});

      }

      this.setState({
        cardCount: this.state.cardCount + 1
      });

      createPDF();

      //console.log("count: " + this.state.cardCount);

      //todo: bug where the first page doesn't show the real contents of earlysymptoms



    }}
    onLeftSwipe  = {() => {  if (this.state.cardCount < 7) {

      this._textInput.setNativeProps({text: ''});

    }

    this.setState({
      cardCount: this.state.cardCount +1
    });

    createPDF();

    //  console.log("count: " + this.state.cardCount);



  }}
  onFinish={() => { console.log("Finished");}}
  >
  <View style={styles.slide}>
  <Text style={styles.text1}>Early Symptoms</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {saveKey('EarlySymptoms', text.split("\n").join("\n"));}}
  defaultValue = {EarlySymptoms}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text2}>Ways I can manage early symptoms</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('SymptomManagement', text.split("\n").join("\n"));}}
  defaultValue = {SymptomManagement}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text3}>Crisis Signs</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('CrisisSigns', text.split("\n").join("\n"));}}
  defaultValue = {CrisisSigns}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text4}>People I would like to help me</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('People', text.split("\n").join("\n"));}}
  defaultValue = {People}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text5}>How I would like people to help me</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('HowPeopleCanHelp', text.split("\n").join("\n"));}}
  defaultValue = {HowPeopleCanHelp}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text6}>Medications I am currently on</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('CurrentMedications', text.split("\n").join("\n"));}}
  defaultValue = {CurrentMedications}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text1}>Medications I used to be on</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('PastMedications', text.split("\n").join("\n"));}}
  defaultValue = {PastMedications}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text2}>Treatment Facilities or Hospitals I prefer</Text>
  <TextInput ref={component => this._textInput = component}
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('TreatmentFacilities', text.split("\n").join("\n"));}}
  defaultValue = {TreatmentFacilities}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text3}>Other Resources I can use</Text>
  <TextInput
  style={{    fontFamily: 'ProximaNova-Regular',
width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('OtherResources', text.split("\n").join("\n")); createPDF.bind(this);}}
  defaultValue = {OtherResources}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style ={{fontFamily: 'ProximaNova-Regular'
}}>
  Email, export, or share plan with others
  </Text>
  <Button style={{fontFamily: 'ProximaNova-Regular',
}} title="Share" onPress={() => {sharePDF();}}>
  </Button>
  </View>



  </Swiper>
);
}
}

async function saveKey(key, value){
  //    value = JSON.stringify(value).replace(/\\n/g, "ooch");
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log("Error: could not save data" + error);

  }
}

async function getKey(key){
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Error retrieving data" + error);
  }
}

async function sharePDF(){

  path = await getKey('CrisisPlan');

  try {

    Share.share({
      url: path,
      title: 'Crisis Plan',
    })

  }

  catch (err) {
    console.log("Share error " + err)
  }

}

async function createPDF(){

  // Create a new PDF in your app's private Documents directory
// var EarlySymptoms = "No early symptoms were filled out";
// var SymptomManagement = "No symptom management skills were filled out";
// var CrisisSigns = "No crisis signs were filled out";
// var People = "No contacts of assistance were filled out";
// var HowPeopleCanHelp = "No instructions for contacts were filled out";
// var CurrentMedications = "No current medications were filled out";
// var PastMedications = "No past medications were filled out";
// var TreatmentFacilities = "No treatment facilities were filled out";
// var OtherResources = "No other resources were filled out";


try {
  EarlySymptoms = await getKey('EarlySymptoms');
  if (EarlySymptoms == null){
    EarlySymptoms = "No early symptoms were filled out";
  }
  //EarlySymptoms = EarlySymptoms.split(" ").join(" \n");

  SymptomManagement = await getKey('SymptomManagement');
  if (SymptomManagement == null){
    SymptomManagement = "No symptom management skills were filled out";
  }
  //  SymptomManagement = SymptomManagement.split(" ").join(" \n");

  CrisisSigns = await getKey('CrisisSigns');
  if (CrisisSigns == null){
    CrisisSigns = "No crisis signs were filled out";
  }
  //  CrisisSigns = CrisisSigns.split(" ").join(" \n");

  People = await getKey('People');
  if (People == null){
    People = "No contacts of assistance were filled out";
  }
  //  People = People.split(" ").join(" \n");

  HowPeopleCanHelp = await getKey('HowPeopleCanHelp');
  if (HowPeopleCanHelp == null){
    HowPeopleCanHelp = "No instructions for contacts were filled out";
  }
  //  HowPeopleCanHelp = HowPeopleCanHelp.split(" ").join(" \n");

  CurrentMedications = await getKey('CurrentMedications');
  if (CurrentMedications == null){
    CurrentMedications = "No current medications were filled out";
  }
  //  CurrentMedications = CurrentMedications.split(" ").join(" \n");

  PastMedications = await getKey('PastMedications');
  if (PastMedications == null){
    PastMedications = "No past medications were filled out";
  }
  //  PastMedications = PastMedications.split(" ").join(" \n");

  TreatmentFacilities = await getKey('TreatmentFacilities');
  if (TreatmentFacilities == null){
    TreatmentFacilities = "No treatment facilities were filled out";
  }
  //  TreatmentFacilities = TreatmentFacilities.split(" ").join(" \n");

  OtherResources = await getKey('OtherResources');
  if (OtherResources == null){
    OtherResources = "No other resources were filled out";
  }
  //  OtherResources = OtherResources.split(" ").join(" \n");



}
catch(error) {
  console.log('error: ' + error);

}

var htmlString =

'<h1 style="text-align: center;"> Crisis Plan </h1> ' +

'<h2 style="text-align: center; color:#7bd2d8;"> Early Symptoms: </h2>' +

'<p style="text-align: center;">' + EarlySymptoms.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#b6d332;"> Ways I can manage early symptoms: </h2>' +

'<p style="text-align: center;">' + SymptomManagement.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#ee7674;"> Crisis Signs: </h2>' +

'<p style="text-align: center;">' + CrisisSigns.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#f9b5ac;"> People I would like to help me: </h2>' +

'<p style="text-align: center;">' + People.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#af7b93;"> How I would like people to help me: </h2>' +

'<p style="text-align: center;">' + HowPeopleCanHelp.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#F9BD39;"> Medications I am currently on: </h2>' +

'<p style="text-align: center;">' + CurrentMedications.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#7bd2d8;"> Medications I used to be on: </h2>' +

'<p style="text-align: center;">' + PastMedications.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#b6d332;"> Treatment Facilities or Hospitals I prefer: </h2>' +

'<p style="text-align: center;">' + TreatmentFacilities.split("\n").join("<br />") + '</p>' +

'<h2 style="text-align: center; color:#ee7674;"> Other Resources I can use: </h2>' +

'<p style="text-align: center;">' + OtherResources.split("\n").join("<br />") + '</p>';

let options = {
      html: htmlString,
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    //alert(file.filePath);

    try {

      saveKey('CrisisPlan', file.filePath);
      saveKey('PlanCreated', "true");

    }

    catch (err) {
      console.log("Share error " + err)
    }

}

const styles = {
  wrapper: {
    backgroundColor: '#4A637D',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',

  },

  text1: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#7bd2d8',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',

  },

  text2: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#b6d332',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',


  },

  text3: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#ee7674',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',


  },

  text4: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#f9b5ac',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',


  },

  text5: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#af7b93',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',


  },
  text6: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#F9BD39',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',


  },
};
