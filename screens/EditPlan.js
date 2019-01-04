import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions, Share} from 'react-native';
import Swiper from 'react-native-swiper-animated';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

//TODO: Fix this whole page so that edit can make text fields editable and actually saves to PDF which can then be viewed

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
      onRightSwipe =  {() => { if (this.state.cardCount < 7) {


        this._textInput.setNativeProps({text: ''});

      }

      this.setState({
        cardCount: this.state.cardCount + 1
      });

      //console.log("count: " + this.state.cardCount);



    }}
    onLeftSwipe  = {() => {  if (this.state.cardCount < 7) {

      this._textInput.setNativeProps({text: ''});

    }

    this.setState({
      cardCount: this.state.cardCount +1
    });

    //  console.log("count: " + this.state.cardCount);



  }}
  onFinish={() => { console.log("Finished");}}
  >
  <View style={styles.slide}>
  <Text style={styles.text1}>Early Symptoms</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('EarlySymptoms', text);}}
  defaultValue = {EarlySymptoms}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text2}>Ways I can manage early symptoms</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('SymptomManagement', text);}}
  defaultValue = {SymptomManagement}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text3}>Crisis Signs</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('CrisisSigns', text);}}
  defaultValue = {CrisisSigns}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text4}>People I would like to help me</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('People', text);}}
  defaultValue = {People}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text5}>How I would like people to help me</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('HowPeopleCanHelp', text);}}
  defaultValue = {HowPeopleCanHelp}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text6}>Medications I am currently on</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('CurrentMedications', text);}}
  defaultValue = {CurrentMedications}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text1}>Medications I used to be on</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('PastMedications', text);}}
  defaultValue = {PastMedications}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text2}>Treatment Facilities or Hospitals I prefer</Text>
  <TextInput ref={component => this._textInput = component}
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('TreatmentFacilities', text);}}
  defaultValue = {TreatmentFacilities}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text style={styles.text3}>Other Resources I can use</Text>
  <TextInput
  style={{width: Dimensions.get('window').width},
  {height: Dimensions.get('window').height},
  {flex: 1}}
  placeholder="Type text here"
  multiline={true}
  onChangeText={(text) => {this.saveKey('OtherResources', text);}}
  defaultValue = {OtherResources}
  editable={true}
  />
  </View>

  <View style={styles.slide}>
  <Text>
  Email, export, or share plan with others
  </Text>
  <Button title="Share" onPress={createPDF.bind(this)}>
  </Button>
  </View>



  </Swiper>
);
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

// Create a PDF page with text and rectangles
//TODO: Add headers for PDF
const page1 = PDFPage
.create()
.setMediaBox(816, 1056)
.drawText("Crisis Plan", {
  x: 25,
  y: 1020,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})
.drawText(EarlySymptoms, {
  x: 25,
  y: 921.6,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(SymptomManagement, {
  x: 25,
  y: 823.2,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(CrisisSigns, {
  x: 25,
  y: 724.8,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(People, {
  x: 25,
  y: 626.4,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(HowPeopleCanHelp, {
  x: 25,
  y: 528,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(CurrentMedications, {
  x: 25,
  y: 429.6,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(PastMedications, {
  x: 25,
  y: 331.2,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(TreatmentFacilities, {
  x: 25,
  y: 232.8,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(OtherResources, {
  x: 25,
  y: 134.4,
  //  width: 150,
  //  height: 150,
  color: '#000000',
})  .drawText(dateTimeString, {
  x: 25,
  y: 36,
  //  width: 150,
  //  height: 150,
  color: '#000000',
});


try
{
  const docsDir = await PDFLib.getDocumentsDirectory();

  const pdfPath = `${docsDir}/crisisplan.pdf`;
  PDFDocument
  .create(pdfPath)
  .addPages(page1)
  .write() // Returns a promise that resolves with the PDF's path
  .then(path => {
    console.log('PDF created at: ' + path);
    // Do stuff with your shiny new PDF!

    try {

      saveKey('CrisisPlan', pdfPath);
      saveKey('PlanCreated', "true");


      Share.share({
        url: path,
        title: 'Crisis Plan',
      })

    }

    catch (err) {
      console.log("Share error " + err)
    }
  });
}
catch (err)
{
  console.log(err)
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
    textAlign: 'center'
  },

  text2: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#b6d332',
    textAlign: 'center'
  },

  text3: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#ee7674',
    textAlign: 'center'
  },

  text4: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#f9b5ac',
    textAlign: 'center'
  },

  text5: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#af7b93',
    textAlign: 'center'
  },
  text6: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#F9BD39',
    textAlign: 'center'
  },
};
