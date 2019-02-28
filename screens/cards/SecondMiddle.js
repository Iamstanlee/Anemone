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

    <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Try listening to a guided meditation online or on your phone, or focusing on your breathing in the moment, ignoring any distractions.


</Text>


    </View>

  </View>
);
