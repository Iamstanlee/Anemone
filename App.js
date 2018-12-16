import React from 'react';
import AppNavigator from './AppNavigator';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.push('BottomTabs')}
        >
          <Text>{"\n"}{"\n"}{"\n"}Bottom tabs</Text>
        </TouchableOpacity>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = {
  item: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
};
