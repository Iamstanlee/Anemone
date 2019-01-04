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

<Text> {"\n"}{"\n"}{"\n"}</Text>

        <Button title="Card #4" onPress={onPress} />


  </View>
);
