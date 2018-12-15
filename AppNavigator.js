import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import NextScreen from './screens/NextScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  StartScreen: {screen: StartScreen},
  NextScreen: {screen: NextScreen}
});
const App = createAppContainer(AppNavigator);

export default App;
