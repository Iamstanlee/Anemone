import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import LottieView from 'lottie-react-native';
import Button from 'react-native-flat-button'

export default class CreateSwipe extends React.Component {
  render() {
    return (
      <View>
      <LottieView
        source={require('../swipe.json')}
        autoPlay={true}
        loop={true}
        style={{height: '80%',
        width: '80%'}}
      />
      <Text style={{textAlign: 'center', fontFamily: 'ProximaNova-Regular'}}>Swipe cards left to move between steps</Text>

      <Button
      type="custom"
      backgroundColor={"#b6d332"}
      borderColor={"#91AA1E"}
      borderRadius={10}
      shadowHeight={5}
      containerStyle={styles.buttonContainer}
      contentStyle={styles.content} onPress={() => this.props.navigation.navigate('CrisisPlanSteps')}> Next </Button>

      </View>
    );
  }
}

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
fontFamily: 'ProximaNova-Bold'
},

});
