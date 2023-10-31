import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Screens} from './screens';
import HelpScreen from '../screens/help';
import LoginScreen from '../screens/user/login/index.';

const Tab = createBottomTabNavigator();

export default function LoggedOut() {
  return (
    <Tab.Navigator
      initialRouteName={Screens.Login}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === Screens.Login) {
            iconName = 'person';
          } else if (route.name === Screens.Help) {
            iconName = 'help-circle';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={Screens.Login}
        component={LoginScreen}
        options={{title: 'Вход'}}
      />
      <Tab.Screen
        name={Screens.Help}
        component={HelpScreen}
        options={{title: 'Помощь'}}
      />
    </Tab.Navigator>
  );
}
