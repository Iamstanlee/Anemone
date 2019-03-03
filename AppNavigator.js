import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import HomeScreen from './screens/HomeScreen';
import CrisisPlan from './screens/CrisisPlan';
import EmergencyResources from './screens/EmergencyResources';
import CopingSkills from './screens/CopingSkills';
import GroundingBox from './screens/GroundingBox';
import EditSwipe from './screens/EditSwipe';
import CreateSwipe from './screens/CreateSwipe';
import ViewPlan from './screens/ViewPlan';
import EditPlan from './screens/EditPlan';
import WhatPlan from './screens/WhatPlan';
import Disclaimer from './screens/Disclaimer';
import CrisisPlanSteps from './screens/crisisplansteps/CrisisPlanSteps';
import MusicPlayerController from 'react-native-musicplayercontroller'
import Button from 'react-native-flat-button';

// const tabBarIcon = name => ({focused, horizontal, tintColor }) => (
//   <MaterialIcons name={name} color={focused ? tintColor: tintColor} size={horizontal ? 17 : 24} />
// );

const TabNavigator = createMaterialBottomTabNavigator({
 CrisisPlan: {
   screen: CrisisPlan,
   navigationOptions: { title: 'Crisis Plan',
   tabBarColor: '#AF7B93',
   tabBarIcon: <MatIcon size={24} color="white" name="star" />,
   tabBarOnPress: ({navigation}) => {
	  // in the argument I am getting navigation object now
    MusicPlayerController.pauseMusic(()=>{
      // pausing music
    }, ()=> {
      // failed to pause
    });
    navigation.navigate("CrisisPlan");
    }
  },
   },
 EmergencyResources: {
   screen: EmergencyResources,
   navigationOptions: { title: 'Resources',
   tabBarColor: '#7BD2D8',
   tabBarIcon: <MatIcon size={24} color="white" name="phone" />,
   tabBarOnPress: ({navigation}) => {
   // in the argument I am getting navigation object now
    MusicPlayerController.pauseMusic(()=>{
      // pausing music
    }, ()=> {
      // failed to pause
    });
    navigation.navigate("EmergencyResources");
    }
},
 },
 CopingSkills: {
   screen: CopingSkills,
   navigationOptions: { title: 'Coping Skills',
   tabBarColor: '#B6D332',
   tabBarIcon: <MatIcon size={24} color="white" name="wb-sunny" />,
   tabBarOnPress: ({navigation}) => {
   // in the argument I am getting navigation object now
    MusicPlayerController.pauseMusic(()=>{
      // pausing music
    }, ()=> {
      // failed to pause
    });
    navigation.navigate("CopingSkills");
    }
},
 },

 GroundingBox: {
   screen: GroundingBox,
   navigationOptions: { title: 'Grounding Box',
   tabBarColor: '#F9B5AC',
   tabBarIcon: <EntypoIcon size={24} color="white" name="box" />,
   tabBarOnPress: ({navigation}) => {
       navigation.navigate("GroundingBox");

     MusicPlayerController.preloadMusic("one", (metadata)=>{
       // Successful preload
     }, ()=>{
       // Failed to preload music. Potentially lots of reasons, such as the music file being removed from the device.
     });
   // in the argument I am getting navigation object now
    MusicPlayerController.playMusic(()=>{
      // pausing music
    }, ()=> {
      // failed to pause
    });

    }
},
 },
},
 {
   initialRouteName: 'CrisisPlan',
   shifting: true,
},
);

const FeedStack = createStackNavigator({
  HomeScreen: HomeScreen,
  Disclaimer: {

    screen: Disclaimer, navigationOptions: ({navigation}) => ({
          headerLeft: <Button type="custom"
          backgroundColor={"#7bd2d8"}
          borderColor={"#16a085"}
          borderRadius={10}
          shadowHeight={5}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content}
        onPress={() => navigation.navigate('HomeScreen')}>&#8592; Back</Button>,
      })
    },
  ViewPlan: {

    screen: ViewPlan, navigationOptions: ({navigation}) => ({
            headerLeft: <Button type="custom"
            backgroundColor={"#7bd2d8"}
            borderColor={"#16a085"}
            borderRadius={10}
            shadowHeight={5}
            containerStyle={styles.buttonContainer}
            contentStyle={styles.content}
          onPress={() => {navigation.navigate('CrisisPlan', {count: 1, planCreated: 'true'} );}}>&#8592; Back</Button>,
        })
      },
  EditPlan: {

    screen: EditPlan, navigationOptions: ({navigation}) => ({
            headerLeft: <Button type="custom"
            backgroundColor={"#7bd2d8"}
            borderColor={"#16a085"}
            borderRadius={10}
            shadowHeight={5}
            containerStyle={styles.buttonContainer}
            contentStyle={styles.content}
          onPress={() => {navigation.navigate('CrisisPlan', {count: 1, planCreated: 'true'} );}}>&#8592; Back</Button>,
        })
      },
  CrisisPlanSteps: {

    screen: CrisisPlanSteps, navigationOptions: ({navigation}) => ({
            headerLeft: <Button type="custom"
            backgroundColor={"#7bd2d8"}
            borderColor={"#16a085"}
            borderRadius={10}
            shadowHeight={5}
            containerStyle={styles.buttonContainer}
            contentStyle={styles.content}
          onPress={() => {navigation.navigate('CrisisPlan', {count: 1} );}}>&#8592; Back</Button>,
        })
      },
  EditSwipe: {

    screen: EditSwipe, navigationOptions: ({navigation}) => ({
            headerLeft: <Button type="custom"
            backgroundColor={"#7bd2d8"}
            borderColor={"#16a085"}
            borderRadius={10}
            shadowHeight={5}
            containerStyle={styles.buttonContainer}
            contentStyle={styles.content}
          onPress={() => {navigation.navigate('CrisisPlan', {count: 1, planCreated: 'true'} );}}>&#8592; Back</Button>,
        })
      },
  CreateSwipe: {

    screen: CreateSwipe, navigationOptions: ({navigation}) => ({
            headerLeft: <Button type="custom"
            backgroundColor={"#7bd2d8"}
            borderColor={"#16a085"}
            borderRadius={10}
            shadowHeight={5}
            containerStyle={styles.buttonContainer}
            contentStyle={styles.content}
          onPress={() => {navigation.navigate('CrisisPlan', {count: 1} );}}>&#8592; Back</Button>,
        })
      },

      WhatPlan: {

        screen: WhatPlan, navigationOptions: ({navigation}) => ({
                headerLeft: <Button type="custom"
                backgroundColor={"#7bd2d8"}
                borderColor={"#16a085"}
                borderRadius={10}
                shadowHeight={5}
                containerStyle={styles.buttonContainer}
                contentStyle={styles.content}
              onPress={() => {navigation.navigate('CrisisPlan', {count: 1} );}}>&#8592; Back</Button>,
            })
          },

});

// TabNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = navigation.state.routes[navigation.state.index].params.showTabBar;
//
//     return {
//       tabBarVisible,
//     };
// };


 const SwitchNavigator = createSwitchNavigator({ Opening: FeedStack, Tabs: TabNavigator,}, { initialRouteName: 'Opening', resetOnBlur: true, }, );

 export default createAppContainer(SwitchNavigator);

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
     fontFamily: 'ProximaNova-Regular'
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
textAlign: 'center',
fontFamily: 'ProximaNova-Bold'
},

buttonContainer:{
width: 100,
height: 32,
}

 });
