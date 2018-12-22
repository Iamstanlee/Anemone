import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

export default class CopingSkills extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <TouchableWithoutFeedback onPress={() => this.refs.grounding.pulse(200)}>
      <Animatable.View ref="grounding">
      <Card
      title='Grounding'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      </Card>
      </Animatable.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => this.refs.mindfulness.pulse(200)}>
      <Animatable.View ref="mindfulness">
      <Card
      title='Mindfulness'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      </Card>
      </Animatable.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => this.refs.breathingexercise.pulse(200)}>
      <Animatable.View ref="breathingexercise">
      <Card
      title='Breathing Exercise'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      </Card>
      </Animatable.View>
      </TouchableWithoutFeedback>

      </ScrollView>
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
