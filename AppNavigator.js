import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import NextScreen from './screens/NextScreen';
import BottomTabs from './src/BottomTabs';

const AppNavigator = createStackNavigator({
  // HomeScreen: {screen: HomeScreen},
  // StartScreen: {screen: StartScreen},
  // NextScreen: {screen: NextScreen}
  HomeScreen: {
   screen: HomeScreen,
   navigationOptions: { title: 'Examples' },
 },
 BottomTabs: {
   screen: BottomTabs,
   navigationOptions: { title: 'Bottom tabs' },
 },
});
const App = createAppContainer(AppNavigator);

export default App;
