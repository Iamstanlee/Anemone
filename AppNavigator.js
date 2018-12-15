import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import StartScreen from './StartScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  StartScreen: {screen: StartScreen}
});
const App = createAppContainer(AppNavigator);

export default App;
