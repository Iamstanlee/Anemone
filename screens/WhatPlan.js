import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import LottieView from 'lottie-react-native';
import Button from 'react-native-flat-button';



export default class WhatPlan extends React.Component {


  render() {


    return (
      <View style={{justifyContent: 'center', alignItems: 'center', padding: 30}}>



      <Text style={{textAlign: 'center',fontFamily: 'ProximaNova-Bold', fontSize: 22}}>A crisis plan contains basic steps and symptoms to be aware of during a mental health crisis and enables a person to not only gauge how severe their case is, but also provides them with easy resources for getting help. A crisis plan can be truly lifesaving, if prepared in advance. It should be filled out when you are feeling "well" so that it can be effective during an emergency.
</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content:{
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Bold',

  },

});
