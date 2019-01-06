import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#33373B',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
  <TouchableWithoutFeedback onPress={onPress}>
<Image style={{height: 180, width: 335}}source={require('/Users/apple/Anemone/Anemone/assets/mindfulnesscard.png')}/>
</TouchableWithoutFeedback>
  </View>
);
