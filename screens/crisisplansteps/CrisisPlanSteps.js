import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper-animated';


export default () => <Swiper
  style={styles.wrapper}
  smoothTransition={true}
  loop={false}
  stack={true}
  swipeDirection={'right'}
  backPressToBack={true}
  stackDepth={3}
  showPagination={true}
  showPaginationBelow={true}
>
  <View style={styles.slide1}>
    <Text style={styles.text}>Early Symptoms</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('EarlySymptoms', text);}}
        />
  </View>

  <View style={styles.slide2}>
    <Text style={styles.text}>Symptom Management</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('SymptomManagement', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>Crisis Signs</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('CrisisSigns', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>People I would like to help me</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('People', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>How I would like people to help me</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('HowPeopleCanHelp', text);}}
        />
  </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>Medications I am currently on</Text>
    <TextInput
        style={{width: Dimensions.get('window').width},
        {height: Dimensions.get('window').height},
        {flex: 1}}
        placeholder="Type text here"
        multiline={true}
        onChangeText={(text) => {saveKey('CurrentMedications', text);}}
        />
  </View>

    <View style={styles.slide3}>
      <Text style={styles.text}>Medications I used to be on</Text>
      <TextInput
          style={{width: Dimensions.get('window').width},
          {height: Dimensions.get('window').height},
          {flex: 1}}
          placeholder="Type text here"
          multiline={true}
          onChangeText={(text) => {saveKey('PastMedications', text);}}
          />
    </View>

    <View style={styles.slide3}>
      <Text style={styles.text}>Treatment Facilities or Hospitals I prefer</Text>
      <TextInput
          style={{width: Dimensions.get('window').width},
          {height: Dimensions.get('window').height},
          {flex: 1}}
          placeholder="Type text here"
          multiline={true}
          onChangeText={(text) => {saveKey('TreatmentFacilities', text);}}
          />
    </View>

        <View style={styles.slide3}>
          <Text style={styles.text}>Other Resources I can use</Text>
          <TextInput
              style={{width: Dimensions.get('window').width},
              {height: Dimensions.get('window').height},
              {flex: 1}}
              placeholder="Type text here"
              multiline={true}
              onChangeText={(text) => {saveKey('OtherResources', text);}}
              />
        </View>
</Swiper>;


async function saveKey(key, value){
  //    value = JSON.stringify(value).replace(/\\n/g, "ooch");
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log("Error: could not save data" + error);

  }
}

const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#F9BD39',
    textAlign: 'center'
  },
};
