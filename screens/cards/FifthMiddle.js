import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';


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

    <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>In order to maintain a healthy, mood-positive diet, focus on eating all your vitamins and minerals and ensuring you consume each food group.


</Text>


    </View>

  </View>
);
