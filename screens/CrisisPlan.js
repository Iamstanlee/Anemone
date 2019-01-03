import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, AsyncStorage, Dimensions, Image, TouchableWithoutFeedback, TouchableHighlight, Share} from 'react-native';
import Interactable from 'react-native-interactable';
import Modal from 'react-native-modalbox';
import Button from 'react-native-flat-button'

var count = 0;
var pdfPath = null;

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


  async getPDF(){
    pdfPath = await this.getKey('CrisisPlan');

  }

  render() {

    this.getPDF();

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

          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>

          {!(this.getKey('PlanCreated') != null) ?
                          <Button
                           type="custom"
                           backgroundColor={"#f9b5ac"}
                           borderColor={"#ee7674"}
                           borderRadius={10}
                           shadowHeight={5}
                           containerStyle={styles.buttonContainer}
                           contentStyle={styles.content}
                         onPress={() => this.props.navigation.navigate('CreateSwipe')}> Create a Crisis Plan </Button> : null}

                         <Text pointerEvents="none">
                         {"\n"}{"\n"}{"\n"}
                         </Text>

          {(this.getKey('PlanCreated') != null) ?
          <Button
          type="custom"
          backgroundColor={"#f9b5ac"}
          borderColor={"#ee7674"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content} onPress={() => this.props.navigation.navigate('ViewPlan')}> View your Crisis Plan </Button> : null}


          <Text pointerEvents="none">
          {"\n"}{"\n"}{"\n"}
          </Text>


          {(this.getKey('PlanCreated') != null) ?
          <Button
          type="custom"
          backgroundColor={"#b6d332"}
          borderColor={"#91AA1E"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content} onPress={() => this.props.navigation.navigate('EditSwipe')}> Edit your Crisis Plan </Button> : null}

                    <Text pointerEvents="none">
                    {"\n"}{"\n"}{"\n"}
                    </Text>

          {(this.getKey('PlanCreated') != null) ?
          <Button
          type="custom"
          backgroundColor={"#F9BD39"}
          borderColor={"#C99422"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content} onPress={() => Share.share({url: pdfPath, title: 'Crisis Plan'})}> Share your Crisis Plan </Button> : null}


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

  content:{
  fontSize: 22,
  textAlign: 'center'
},

    });
