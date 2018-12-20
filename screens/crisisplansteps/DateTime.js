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

  async createPDF(){// Create a new PDF in your app's private Documents directory
  var trialText = "Nothing was filled out";
  try {
    trialText = await this.getKey('trial');
    trialText = trialText.split(" ").join(" \n");


  }
  catch(error) {
    console.log('error: ' + error);

  }

  // Create a PDF page with text and rectangles
  const page1 = PDFPage
  .create()
  .setMediaBox(816, 1056)
  .drawText(dateTimeString, {
    x: 25,
    y: 25,
    //  width: 150,
    //  height: 150,
    color: '#FF99CC',
  })
  .drawText('Antu is a little oochoo', {
    x: 75,
    y: 75,
    //width: 50,
    //  height: 50,
    color: '#99FFCC',
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
