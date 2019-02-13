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
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#FFFFFFF',
    }}
  >

    <View style={{ flex: 1 }}>

    <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold', fontSize: 15}}>Increasing physical activity, relaxation  and coping skills, setting a consistent bedtime and avoiding electronic devices



</Text>


    </View>

  </View>
);
