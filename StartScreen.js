import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Add friends here! </Text>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('HomeScreen')
          }
        />

        <Button
          title="Onwards"
          onPress={() =>
            this.props.navigation.navigate('NextScreen')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
