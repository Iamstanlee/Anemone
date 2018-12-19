import React, { Component} from 'react'
// Import from 'react-native-pdf-lib'
import { View, TouchableHighlight, Text } from 'react-native';

import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import Share from 'react-native-share';


// Create a PDF page with text and rectangles
const page1 = PDFPage
  .create()
  .setMediaBox(200, 200)
  .drawText('You can add text and rectangles to the PDF!', {
    x: 5,
    y: 235,
    color: '#007386',
  })
  .drawRectangle({
    x: 25,
    y: 25,
    width: 150,
    height: 150,
    color: '#FF99CC',
  })
  .drawRectangle({
    x: 75,
    y: 75,
    width: 50,
    height: 50,
    color: '#99FFCC',
  });


export default class PDFRender extends React.Component {

async createPDF(){// Create a new PDF in your app's private Documents directory
try
{
  const docsDir = await PDFLib.getDocumentsDirectory();

  const pdfPath = `${docsDir}/sample.pdf`;
  PDFDocument
    .create(pdfPath)
    .addPages(page1)
    .write() // Returns a promise that resolves with the PDF's path
    .then(path => {
      console.log('PDF created at: ' + path);
      // Do stuff with your shiny new PDF!

      Share.open({
                     title: "This is my report ",
                     message: "Message:",
                     url: path,
                     subject: "Report",
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
      <TouchableHighlight onPress={this.createPDF}>
        <Text>
        {"\n"}{"\n"}{"\n"}
        Create PDF</Text>
      </TouchableHighlight>
    </View>
  )
  }
}
