import React from 'react';
import {Text} from 'react-native'
import LottieView from 'lottie-react-native';

export default class EditSwipe extends React.Component {
  render() {
    return (
      <View>
      <Text>Swipe cards left or right to move to next step</Text>
      <LottieView
        source={require('../swipe.json')}
        autoPlay={true}
        loop={false}
onAnimationFinish= {() => this.props.navigation.navigate('EditPlan')}
      />

      </View>
    );
  }
}
