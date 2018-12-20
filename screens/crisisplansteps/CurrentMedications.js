import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions} from 'react-native';


type Props = {};
export default class CurrentMedications extends React.Component{
  async saveKey(key, value){
    //    value = JSON.stringify(value).replace(/\\n/g, "ooch");
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log("Error: could not save data" + error);

    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>    {"\n"}{"\n"}{"\n"}
      Current Medications</Text>
      <Button
      title="Next page"
      onPress={() =>
        this.props.navigation.navigate('PastMedications')
      }
      />

      <TextInput
      style={{width: Dimensions.get('window').width},
      {height: Dimensions.get('window').height},
      {flex: 1}}
      placeholder="Type text here"
      multiline={true}
      onChangeText={(text) => {this.saveKey('CurrentMedications', text);}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
