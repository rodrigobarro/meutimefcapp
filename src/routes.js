import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import MenuExample from '~/pages/Main/Menu';
import Signup from '~/pages/Signup';

const Routes = createAppContainer(createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: '',
      headerTransparent: 'true',
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'VAMOS CRIAR SEU TIME!',
      headerTransparent: 'true',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: '',
      headerTransparent: 'true',
    },
  },
  MenuExample: {
    screen: MenuExample,
    navigationOptions: {
      title: '',
      headerTransparent: 'true',
    },
  },
}));

export default Routes;
