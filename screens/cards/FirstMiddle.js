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
      borderTopColor: '#FFFFFFF',
    }}
  >

    <View style={{ flex: 1 }}>

    <Text style={styles.text}>Breathe out through pressed lips as if you are whistling. Feel the hand on our belly go in and use it push all the air out. Do this breathing 3-10 times.

</Text>


    </View>

  </View>
);
