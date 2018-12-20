import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import CrisisPlan from './screens/CrisisPlan';
import EmergencyResources from './screens/EmergencyResources';
import CopingSkills from './screens/CopingSkills';
import PDFRender from './screens/PDFRender';
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

// const tabBarIcon = name => ({focused, horizontal, tintColor }) => (
//   <MaterialIcons name={name} color={focused ? tintColor: tintColor} size={horizontal ? 17 : 24} />
// );

const TabNavigator = createMaterialBottomTabNavigator({
 CrisisPlan: {
   screen: CrisisPlan,
   navigationOptions: { title: 'Crisis Plan',
   tabBarColor: '#AF7B93',
   tabBarIcon: <Icon size={24} color="white" name="star" />,
  },
   },
 EmergencyResources: {
   screen: EmergencyResources,
   navigationOptions: { title: 'Emergency Resources',
   tabBarColor: '#7BD2D8',
   tabBarIcon: <Icon size={24} color="white" name="phone" />,
},
 },
 CopingSkills: {
   screen: CopingSkills,
   navigationOptions: { title: 'Coping Skills',
   tabBarColor: '#B6D332',
   tabBarIcon: <Icon size={24} color="white" name="wb-sunny" />,
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
  PDFRender: PDFRender
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
