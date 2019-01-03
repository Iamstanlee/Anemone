import React from 'react';
import {Text, View} from 'react-native'
import LottieView from 'lottie-react-native';

export default class EditSwipe extends React.Component {
  render() {
    return (
      <View>

      <LottieView
        source={require('../swipe.json')}
        autoPlay={true}
        loop={false}
onAnimationFinish= {() => this.props.navigation.navigate('EditPlan')}
style={{height: '80%',
    width: '80%'}}

      />
<Text>Swipe cards left to move to next step</Text>
      </View>
    );
  }
}
