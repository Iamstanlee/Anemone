import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DeviceInfo from 'react-native-device-info';


const model = DeviceInfo.getModel();
 console.log("MODEL" + model);

 var styles = StyleSheet.create();

 if (model == 'iPhone 5s' || model == 'iPhone SE') {
   styles = StyleSheet.create({
     coverPic: {
       height: hp('32%'), // 70% of height device screen
       width: wp('88%')   // 80% of width device screen
     },
     container: {
       flex: 1,
       backgroundColor: '#fff',
     },
   });
 }
 else if (model == 'iPhone XS Max'){
   styles = StyleSheet.create({
     coverPic: {
       height: 180, // 70% of height device screen
       width: 374   // 80% of width device screen
     },
     container: {
       flex: 1,
       backgroundColor: '#fff',
     },
   });
 }

 else {
   styles = StyleSheet.create({
     coverPic: {
       height: 180, // 70% of height device screen
       width: 335   // 80% of width device screen
     },
     container: {
       flex: 1,
       backgroundColor: '#fff',
     },
   });
 }
export default ({ onPress }) => (
  <View style={styles.container}>
  <TouchableWithoutFeedback onPress={onPress}>
<Image style={styles.coverPic}source={require('/Users/apple/Anemone/Anemone/assets/sleepcard.png')}/>
</TouchableWithoutFeedback>
  </View>
);
