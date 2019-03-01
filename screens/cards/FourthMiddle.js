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

    <Text style={styles.text}>Just on your phone, try downloading a new game or app that can distract you from your feelings. Maybe even surf the web from your device, and look for different sites.

</Text>


    </View>

  </View>
);
