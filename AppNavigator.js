import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import StartScreen from './StartScreen';
import NextScreen from './NextScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  StartScreen: {screen: StartScreen},
  NextScreen: {screen: NextScreen}
});
const App = createAppContainer(AppNavigator);

export default App;
