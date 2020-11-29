import { createAppContainer } from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";
import home from "./src/screens/home";
import Data from "./src/components/Data";

const sanyam = createStackNavigator(
  {
    Home : {
      screen:home
    },
    Home1:{
      screen: Data
    },
  

},
  {
    intialRouteName: "Home",
    defaultNavigationOptions:{
      title: "Picka For Food"
    }
  }
);
export default createAppContainer(sanyam);