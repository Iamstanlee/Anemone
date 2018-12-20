import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions, TouchableHighlight} from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import Share from 'react-native-share';

// var date = new Date().getDate();
// var month = new Date().getMonth() + 1;
// var year = new Date().getFullYear();
var time= new Date().toLocaleString();

var dateTimeString = "This plan was created on " + time + ".";

export default class DateTime extends React.Component{
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

  async createPDF(){// Create a new PDF in your app's private Documents directory
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



render() {
  return (
    <View>
    <Button title="Email, export, or share plan with others" onPress={this.createPDF.bind(this)}>
    </Button>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
