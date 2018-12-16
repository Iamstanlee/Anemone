import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Icon, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {MaterialIcons } from 'react-native-vector-icons';
import HomeScreen from './screens/HomeScreen';
import CrisisPlan from './screens/CrisisPlan';
import EmergencyResources from './screens/EmergencyResources';
import CopingSkills from './screens/CopingSkills';

const tabBarIcon = name => ({ tintColor, horizontal }) => (
  <MaterialIcons name={name} color={tintColor} size={horizontal ? 17 : 24} />
);

const TabNavigator = createMaterialBottomTabNavigator({
 CrisisPlan: {
   screen: CrisisPlan,
   navigationOptions: { title: 'Crisis Plan',
   tabBarColor: '#AF7B93',
   tabBarIcon: tabBarIcon('photo-album'),
  },
   },
 EmergencyResources: {
   screen: EmergencyResources,
   navigationOptions: { title: 'Emergency Resources',
   tabBarColor: '#7BD2D8'},
 },
 CopingSkills: {
   screen: CopingSkills,
   navigationOptions: { title: 'Coping Skills',
   tabBarColor: '#E6EFBF'},
 },
},
 {
   initialRouteName: 'CrisisPlan',
   shifting: true,
},
);

const FeedStack = createStackNavigator({
  HomeScreen: HomeScreen,
  Tabs: TabNavigator,
  CrisisPlan: CrisisPlan,
});


TabNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = navigation.state.routes[navigation.state.index].params.showTabBar;

    return {
      tabBarVisible,
    };
};

const App = createAppContainer(TabNavigator);

export default App;
