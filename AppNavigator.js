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
import ViewPlan from './screens/ViewPlan';
import EditPlan from './screens/EditPlan';
import CrisisSigns from './screens/crisisplansteps/CrisisSigns';
import CurrentMedications from './screens/crisisplansteps/CurrentMedications';
import DateTime from './screens/crisisplansteps/DateTime';
import EarlySymptoms from './screens/crisisplansteps/EarlySymptoms';
import HowPeopleCanHelp from './screens/crisisplansteps/HowPeopleCanHelp';
import OtherResources from './screens/crisisplansteps/OtherResources';
import PastMedications from './screens/crisisplansteps/PastMedications';
import People from './screens/crisisplansteps/People';
import SymptomManagement from './screens/crisisplansteps/SymptomManagement';
import TreatmentFacilities from './screens/crisisplansteps/TreatmentFacilities';
import CrisisPlanSteps from './screens/crisisplansteps/CrisisPlanSteps';
import MusicPlayerController from 'react-native-musicplayercontroller'

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
//TODO: Add box animation
 },
},
 {
   initialRouteName: 'CrisisPlan',
   shifting: true,
},
);

const FeedStack = createStackNavigator({
  HomeScreen: HomeScreen,
  ViewPlan: ViewPlan,
  EditPlan: EditPlan,
  CrisisPlanSteps: CrisisPlanSteps,
  EarlySymptoms: EarlySymptoms,
  SymptomManagement: SymptomManagement,
  CrisisSigns: CrisisSigns,
  People: People,
  HowPeopleCanHelp: HowPeopleCanHelp,
  CurrentMedications: CurrentMedications,
  PastMedications: PastMedications,
  TreatmentFacilities: TreatmentFacilities,
  OtherResources: OtherResources,
  DateTime: DateTime,

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
