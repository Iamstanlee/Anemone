import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions, Image, TouchableWithoutFeedback, TouchableHighlight, Modal} from 'react-native';
import Interactable from 'react-native-interactable';


type Props = {};
export default class CrisisPlan extends React.Component{

  state = {
     modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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

      <Modal animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={this.closeModal}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <View style={{
          width: 300,
          height: 300}}>
          <TouchableWithoutFeedback
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>Hide Modal</Text>
          </TouchableWithoutFeedback>
          </View>
          </View>
          </Modal>

      <Interactable.View
      horizontalOnly={false}
      snapPoints={[
            {x: -140, y: -200},
            {x: 140, y: -200},
            {x: -140, y: -120},
            {x: 140, y: -120},
            {x: -140, y: 120},
            {x: 140, y: 120},
            {x: -140, y: 200},
            {x: 140, y: 200, tension: 50, damping: 0.9}
          ]}
      initialPosition={{x: -140, y: 0}}
      onSnap={this.onDrawerSnap}>

  <View>
  <TouchableWithoutFeedback onPress={()=> this.setModalVisible(true)}>
  <Image source={require('../assets/seahorse.png')} style={{width: 50, height: 50}}/>
  </TouchableWithoutFeedback>
    </View>
  </Interactable.View>
      <Text style={styles.welcome} pointerEvents="none">    {"\n"}{"\n"}{"\n"}
      You do not currently have a crisis plan set up</Text>

      <Button
      title="Create a Crisis Plan"
      onPress={() =>
        this.props.navigation.navigate('CrisisPlanSteps')
      }
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
