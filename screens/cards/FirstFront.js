import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
  <TouchableWithoutFeedback onPress={onPress}>
<Image style={{height: 180, width: 335}}source={require('/Users/apple/Anemone/Anemone/assets/groundingcard.jpeg')}/>
</TouchableWithoutFeedback>
  </View>
);
