import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import MenuExample from '~/pages/Main/Menu';
import Signup from '~/pages/Signup';
import CreateShield from '~/pages/Signup/CreateShield';
import SelectClothes from '~/pages/Signup/SelectClothes';
import FinalStep from '~/pages/Signup/FinalStep';
import RecoverPass from '~/pages/RecoverPass';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: '',
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
    RecoverPass: {
      screen: RecoverPass,
      navigationOptions: {
        title: '',
        headerTransparent: 'true',
      },
    },
    FinalStep: {
      screen: FinalStep,
      navigationOptions: {
        title: 'SÓ FALTA SABER QUEM É VOCÊ',
        headerTransparent: 'true',
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
      },
    },
    SelectClothes: {
      screen: SelectClothes,
      navigationOptions: {
        title: 'E AGORA PRA FICAR NA ESTICA',
        headerTransparent: 'true',
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
      },
    },
    CreateShield: {
      screen: CreateShield,
      navigationOptions: {
        title: 'VAMOS FAZER SEU ESCUDO!',
        headerTransparent: 'true',
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        title: 'VAMOS CRIAR SEU TIME!',
        headerTransparent: 'true',
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
      },
    }, 
    MenuExample: {
      screen: MenuExample,
      navigationOptions: {
        title: '',
        headerTransparent: 'true',
      },
    },
  }),
);

export default Routes;
