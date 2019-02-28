import React from 'react';
import {Text, View, StyleSheet, AsyncStorage} from 'react-native'
import LottieView from 'lottie-react-native';
import Button from 'react-native-flat-button';

var EarlySymptomsSwipe = "No early symptoms were filled out";


export default class EditSwipe extends React.Component {

  async getKey(key){
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

async pullAnswer(){
  try {
    EarlySymptomsSwipe = await this.getKey('EarlySymptoms');
    if (EarlySymptomsSwipe == null){
      EarlySymptomsSwipe = "No early symptoms were filled out";
    }
  }

  catch (err) {
    console.log("Retrieving failed " + err);
  }
}


  render() {

this.pullAnswer();

    return (
      <View>

      <LottieView
      source={require('../swipe.json')}
      autoPlay={true}
      loop={true}
      style={{height: '70%',
      width: '70%'}}

      />

      <Text style={{textAlign: 'center',fontFamily: 'ProximaNova-Bold'}}>Swipe cards left to move between steps           {"\n"}{"\n"}{"\n"}
</Text>
<View style={{alignItems: 'center'}}>
      <Button
      type="custom"
      backgroundColor={"#b6d332"}
      borderColor={"#91AA1E"}
      borderRadius={10}
      shadowHeight={5}
      containerStyle={styles.buttonContainer}
      contentStyle={styles.content} onPress={() => {this.props.navigation.navigate('EditPlan'); }}> Next </Button>
      </View>
      </View>
    );
  }
}

export {EarlySymptomsSwipe};


const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content:{
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'ProximaNova-Bold',

  },

});
