import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage, Dimensions, Image, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import Interactable from 'react-native-interactable';
import Modal from 'react-native-modalbox';

var count = 0;

type Props = {};
export default class CrisisPlan extends React.Component{

incrementCount(){
  count = count+1;
  console.log("The count is " + count);
  this.forceUpdate();
}

  state = {
    planCreated: false,
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

    return (

      <View style={styles.container}>

      <Modal style={styles.modal} ref="sully" isOpen={true}
      swipetoClose="true"
      position={"center"}
      backdropOpacity={0.5}
      coverScreen={false}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}}>

        {(count==0) ? <Image source={require('../assets/sully.png')} style={{width: 335, height: 245}}/> : null}

        {(count==1) ? <Image source={require('../assets/sullyblank.png')} style={{width: 335, height: 245}}/> : null}

        {(count==2) ? <Image source={require('../assets/sullyblank.png')} style={{width: 335, height: 245}}/> : null}


          <Text style={{backgroundColor: 'white'}}>Swipe down to close</Text>
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
          <TouchableWithoutFeedback onPress={()=> {this.refs.sully.open(); this.incrementCount();}}>
          <Image source={require('../assets/seahorse.png')} style={{width: 50, height: 50}}/>
          </TouchableWithoutFeedback>
          </View>
          </Interactable.View>

          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>

          {!(this.getKey('PlanCreated') != null) ? <Text style={styles.welcome} pointerEvents="none">
          You do not currently have a crisis plan set up
          </Text> : null}

          {!(this.getKey('PlanCreated') != null) ? <Button title="Create a Crisis Plan" onPress={() => this.props.navigation.navigate('CrisisPlanSteps')}/> : null}


          {(this.getKey('PlanCreated') != null) ? <Button title="View your Crisis Plan" onPress={() => this.props.navigation.navigate('ViewPlan')}/> : null}


          {(this.getKey('PlanCreated') != null) ? <Button title="Edit your Crisis Plan" onPress={() => this.props.navigation.navigate('EditPlan')}/> : null}

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

      modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 350,
    backgroundColor: 'transparent'
  },

    });
