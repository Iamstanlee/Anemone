/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Button from 'react-native-flat-button';



//var yourPicture = require ('./images/picture.jpg');



type Props = {};
export default class HomeScreen extends React.Component{
  render() {
    return (



      <View style={styles.container}>

        <Text style={styles.disclaimer}>The contents of the Anemone Crisis App, such as text, graphics, images, and other material contained on the app ("content") are for informational purposes only. The content is not intended to be a substitute for professional advice, diagnosis, or treatment. Always seek the advice of your mental health professional or other qualified health provider with any questions you may have regarding your condition or safety.

</Text>

<Text>{"\n"}{"\n"}</Text>

<Text style={styles.disclaimer2}>
If you are in crisis or you think you may have an emergency, call your doctor or 911 immediately. If you're having suicidal thoughts, call 1-800-273-8255 to talk to a skilled, trained counselor at a crisis center in your area at any time (National Suicide Prevention Lifeline). If you are located outside the United States, call your local emergency line immediately.
</Text>

<Text>{"\n"}{"\n"}</Text>

<Text style={styles.disclaimer}>
The Anemone Crisis App does not recommend or endorse any clinicians, counselors, psychiatrists, social workers, physicians, products, procedures, opinions, or other information that may be mentioned in the app. Reliance on any information provided by the Anemone app or website is solely at your own risk.
</Text>

<Text>{"\n"}{"\n"}</Text>

        <Button
                 type="custom"
                 onPress={() =>
                   this.props.navigation.navigate('CrisisPlan')
                 }
                 backgroundColor={"#af7b93"}
                 borderColor={"#7C4D63"}
                 borderRadius={10}
                 shadowHeight={5}
                 containerStyle={styles.buttonContainer}
                 contentStyle={styles.content}
               >
                  Continue               </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
    width: null,
    height: null
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  content:{
  fontSize: 22,
  textAlign: 'center',
  fontFamily: 'ProximaNova-Bold',
  color: '#ffffff'
},

disclaimer:{
fontSize: 15,
textAlign: 'center',
fontFamily: 'ProximaNova-Regular',
color: '#ffffff'
},

disclaimer2:{
fontSize: 15,
textAlign: 'center',
fontFamily: 'ProximaNova-Bold',
color: '#ffffff'
},

buttonContainer:{
  height: 32,
}


});
