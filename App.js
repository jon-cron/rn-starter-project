import {createStackNavigation} from react-navigation-stack;
import { createAppContainer } from "react-navigation";
import StartScreen from "./src/screens/StartScreen.jsx";
import GameScreen from "./src/screens/GameScreen.jsx";
import GameOverScreen from "./src/screens/GameOverScreen.jsx";

const navigator = createStackNavigation({
Start: StartScreen,
Game: GameScreen,
Over: GameOverScreen,
}, {
  initialRouteName: 'Start'
})


const App = createAppContainer(navigator)
export default () => {
  return (
   <App/>
  );
}

