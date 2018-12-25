import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper-animated';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import Share from 'react-native-share';

var time= new Date().toLocaleString();

var dateTimeString = "This plan was created on " + time + ".";

export default () => <Swiper
  style={styles.wrapper}
  smoothTransition={true}
  loop={false}
  stack={true}
  swipeDirection={'right'}
  backPressToBack={true}
  stackDepth={3}
  showPagination={true}
  showPaginationBelow={true}
>
  <View style={styles.slide1}>
    <Text style={styles.text}>Early Symptoms</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('EarlySymptoms', text);}}
        />
  </View>

  <View style={styles.slide2}>
    <Text style={styles.text}>Symptom Management</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('SymptomManagement', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>Crisis Signs</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('CrisisSigns', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>People I would like to help me</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('People', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>How I would like people to help me</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('HowPeopleCanHelp', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>Medications I am currently on</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('CurrentMedications', text);}}
        />
  </View>

    <View style={styles.slide3}>
      <Text style={styles.text}>Medications I used to be on</Text>
      <TextInput
          style={{width: Dimensions.get('window').width},
          {height: Dimensions.get('window').height},
          {flex: 1}}
          placeholder="Type text here"
          multiline={true}
          onChangeText={(text) => {saveKey('PastMedications', text);}}
          />
    </View>

    <View style={styles.slide3}>
      <Text style={styles.text}>Treatment Facilities or Hospitals I prefer</Text>
      <TextInput
          style={{width: Dimensions.get('window').width},
          {height: Dimensions.get('window').height},
          {flex: 1}}
          placeholder="Type text here"
          multiline={true}
          onChangeText={(text) => {saveKey('TreatmentFacilities', text);}}
          />
    </View>

        <View style={styles.slide3}>
          <Text style={styles.text}>Other Resources I can use</Text>
          <TextInput
              style={{width: Dimensions.get('window').width},
              {height: Dimensions.get('window').height},
              {flex: 1}}
              placeholder="Type text here"
              multiline={true}
              onChangeText={(text) => {saveKey('OtherResources', text);}}
              />
        </View>

        <View style={styles.slide3}>
        <Text>
        Email, export, or share plan with others
        </Text>
        <Button title="Share" onPress={createPDF.bind(this)}>
        </Button>
        </View>



</Swiper>
;


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


async function createPDF(){// Create a new PDF in your app's private Documents directory
var EarlySymptoms = "No early symptoms were filled out";
var SymptomManagement = "No symptom management skills were filled out";
var CrisisSigns = "No crisis signs were filled out";
//TODO: Change name for people
var People = "No contacts of assistance were filled out";
var HowPeopleCanHelp = "No instructions for contacts were filled out";
var CurrentMedications = "No current medications were filled out";
var PastMedications = "No past medications were filled out";
var TreatmentFacilities = "No treatment facilities were filled out";
var OtherResources = "No other resources were filled out";


try {
  EarlySymptoms = await this.getKey('EarlySymptoms');
  if (EarlySymptoms == null){
    EarlySymptoms = "No early symptoms were filled out";
  }
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
catch(error) {
  console.log('error: ' + error);

}

// Create a PDF page with text and rectangles
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

    Share.open({
      url: path,
      subject: "Crisis Plan",
    })
  });
}
catch (err)
{
  console.log(err)
}


}

const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#F9BD39',
    textAlign: 'center'
  },
};
