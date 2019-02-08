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

    <Text style={{textAlign: 'left', fontFamily: 'ProximaNova-Bold'}}>Breathe out through pressed lips as if you are whistling. Feel the hand on our belly go in and use it push all the air out. Do this breathing 3-10 times.

</Text>


    </View>

  </View>
);
