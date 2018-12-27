import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Interactable from 'react-native-interactable';

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

  async createView(){

      try {
        EarlySymptoms = await this.getKey('EarlySymptoms');
        if (EarlySymptoms == null){
          EarlySymptoms = "No early symptoms were filled out";
        }

        //TODO: Still not picking up strings from this function
        EarlySymptoms = JSON.stringify(EarlySymptoms);
        //EarlySymptoms = EarlySymptoms.split(" ").join(" \n");

        SymptomManagement = await this.getKey('SymptomManagement');
        if (SymptomManagement == null){
          SymptomManagement = "No symptom management skills were filled out";
        }
      //  SymptomManagement = SymptomManagement.split(" ").join(" \n");

        CrisisSigns = await this.getKey('CrisisSigns');
        if (CrisisSigns == null){
          CrisisSigns = "No crisis signs were filled out";
        }
      //  CrisisSigns = CrisisSigns.split(" ").join(" \n");

        People = await this.getKey('People');
        if (People == null){
          People = "No contacts of assistance were filled out";
        }
      //  People = People.split(" ").join(" \n");

        HowPeopleCanHelp = await this.getKey('HowPeopleCanHelp');
        if (HowPeopleCanHelp == null){
          HowPeopleCanHelp = "No instructions for contacts were filled out";
        }
      //  HowPeopleCanHelp = HowPeopleCanHelp.split(" ").join(" \n");

        CurrentMedications = await this.getKey('CurrentMedications');
        if (CurrentMedications == null){
          CurrentMedications = "No current medications were filled out";
        }
      //  CurrentMedications = CurrentMedications.split(" ").join(" \n");

        PastMedications = await this.getKey('PastMedications');
        if (PastMedications == null){
          PastMedications = "No past medications were filled out";
        }
      //  PastMedications = PastMedications.split(" ").join(" \n");

        TreatmentFacilities = await this.getKey('TreatmentFacilities');
        if (TreatmentFacilities == null){
          TreatmentFacilities = "No treatment facilities were filled out";
        }
      //  TreatmentFacilities = TreatmentFacilities.split(" ").join(" \n");

        OtherResources = await this.getKey('OtherResources');
        if (OtherResources == null){
          OtherResources = "No other resources were filled out";
        }
      //  OtherResources = OtherResources.split(" ").join(" \n");



      }

      catch (err) {
        console.log("Retrieving failed " + err);
      }

    }


  render() {


      var EarlySymptoms = "No early symptoms were filled out";
      var SymptomManagement = "No symptom management skills were filled out";
      var CrisisSigns = "No crisis signs were filled out";
      var People = "No contacts of assistance were filled out";
      var HowPeopleCanHelp = "No instructions for contacts were filled out";
      var CurrentMedications = "No current medications were filled out";
      var PastMedications = "No past medications were filled out";
      var TreatmentFacilities = "No treatment facilities were filled out";
      var OtherResources = "No other resources were filled out";


      this.createView();


    return (

<ScrollView>

<Text>{EarlySymptoms}</Text>

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
    textAlign: 'center'
  },

  text2: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#b6d332',
    textAlign: 'center'
  },

  text3: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#ee7674',
    textAlign: 'center'
  },

  text4: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#f9b5ac',
    textAlign: 'center'
  },

  text5: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#af7b93',
    textAlign: 'center'
  },
  text6: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowRadius: 100,
    color: '#F9BD39',
    textAlign: 'center'
  },
});
