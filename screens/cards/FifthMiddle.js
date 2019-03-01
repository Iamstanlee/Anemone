import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
var styles = StyleSheet.create();


const model = DeviceInfo.getModel();


if (model == 'iPhone 5s' || model == 'iPhone SE'){

  styles = StyleSheet.create({
  text: {
  textAlign:'left',
  fontFamily: 'ProximaNova-Bold',
  fontSize: 13
  }

});

}


 else {

  styles = StyleSheet.create({
  text: {
  textAlign:'left',
  fontFamily: 'ProximaNova-Bold',
  fontSize: 15
  }

});

}


export default ({ onPress }) => (
  <View
    style={{
      flex: 1,
      paddingTop: 12,
      paddingHorizontal: 16,
      flexDirection: 'row',

      backgroundColor: '#FFFFFF',
      //borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#FFFFFFF',
    }}
  >

    <View style={{ flex: 1 }}>

    <Text style={styles.text}>In order to maintain a healthy, mood-positive diet, focus on eating all your vitamins and minerals and ensuring you consume each food group.


</Text>


    </View>

  </View>
);
