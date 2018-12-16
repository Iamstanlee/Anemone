import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CrisisPlan from './screens/CrisisPlan';
import EmergencyResources from './screens/EmergencyResources';
import CopingSkills from './screens/CopingSkills';




const TabNavigator = createBottomTabNavigator({
 CrisisPlan: {
   screen: CrisisPlan,
   navigationOptions: { title: 'CrisisPlan' },
 },
 EmergencyResources: {
   screen: EmergencyResources,
   navigationOptions: { title: 'EmergencyResources' },
 },
 CopingSkills: {
   screen: CopingSkills,
   navigationOptions: { title: 'CopingSkills' },
 },
});

const FeedStack = createStackNavigator({
  HomeScreen: HomeScreen,
  Tabs: TabNavigator,
  CrisisPlan: CrisisPlan,
});


// TabNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = navigation.state.routes[navigation.state.index].params.showTabBar;
//
//     return {
//       tabBarVisible,
//     };
// };

const App = createAppContainer(FeedStack);

export default App;
