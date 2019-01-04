import React from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text
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

<Text> {"\n"}{"\n"}{"\n"}</Text>

        <Button title="Card #3" onPress={onPress} />


  </View>
);
