import React from 'react';
import {View, Text, ScrollView, StyleSheet, AsyncStorage} from 'react-native';
import Interactable from 'react-native-interactable';
import {EarlySymptomsV, SymptomManagementV, CrisisSignsV, PeopleV, HowPeopleCanHelpV, CurrentMedicationsV, PastMedicationsV, TreatmentFacilitiesV, OtherResourcesV} from './CrisisPlan.js';

export default class ViewPlan extends React.Component {



  async saveKey(key, value){
    value = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log("Error: could not save data" + error);

    }
  }

  async getKey(key){
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }


  render() {

    //this.createViewfromPrevious();

      //this.createView();


    return (

<ScrollView>

<Text style={styles.text1}>Early Symptoms: {"\n"}</Text>

<Text style={styles.entryText}>{EarlySymptomsV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text2}>Ways I can manage early symptoms: {"\n"}</Text>

<Text style={styles.entryText}>{SymptomManagementV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text3}>Crisis Signs: {"\n"}</Text>

<Text style={styles.entryText}>{CrisisSignsV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text4}>People I would like to help me: {"\n"}</Text>

<Text style={styles.entryText}>{PeopleV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text5}>How I would like people to help me: {"\n"}</Text>

<Text style={styles.entryText}>{HowPeopleCanHelpV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text6}>Medications I am currently on: {"\n"}</Text>

<Text style={styles.entryText}>{CurrentMedicationsV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text1}>Medications I used to be on: {"\n"}</Text>

<Text style={styles.entryText}>{PastMedicationsV} {"\n"}{"\n"}{"\n"}</Text>



<Text style={styles.text2}>Treatment Facilities or Hospitals I prefer: {"\n"}</Text>

<Text style={styles.entryText}>{TreatmentFacilitiesV} {"\n"}{"\n"}{"\n"}</Text>


<Text style={styles.text3}>Other Resources I can use: {"\n"}</Text>

<Text style={styles.entryText}>{OtherResourcesV} {"\n"}{"\n"}{"\n"}</Text>



</ScrollView>

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
  wrapper: {
    backgroundColor: '#4A637D',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text1: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#7bd2d8',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',
  },

  text2: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#b6d332',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',

  },

  text3: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#ee7674',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',

  },

  text4: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#f9b5ac',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',

  },

  text5: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#af7b93',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',

  },
  text6: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#F9BD39',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Bold',

  },

  entryText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '200',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'ProximaNova-Regular'
  },
});
