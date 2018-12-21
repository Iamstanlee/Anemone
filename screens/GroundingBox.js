import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class GroundingBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <Card
      title='Grounding'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
      icon={<Icon name='code' color='#000000' />}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      </Card>
      <Card
      title='Mindfulness'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
      icon={<Icon name='code' color='#ffffff' />}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      </Card>
      <Card
      title='HELLO WORLD'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
      icon={<Icon name='code' color='#ffffff' />}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      </Card>
      <Card
      title='HELLO WORLD'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
      icon={<Icon name='code' color='#ffffff' />}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      </Card>
      <Card
      title='HELLO WORLD'
      image={require('../assets/anemone.png')}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
      icon={<Icon name='code' color='#ffffff' />}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      </Card>
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
