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

    <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Just on your phone, try downloading a new game or app that can distract you from your feelings. Maybe even surf the web from your device, and look for different sites.

</Text>


    </View>

  </View>
);
