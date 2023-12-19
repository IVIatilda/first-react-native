import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Screens} from './screens';
import UserScreen from '../screens/user/profile';
import HelpScreen from '../screens/help';
import ListScreen from '../screens/list';

const Tab = createBottomTabNavigator();

export default function LoggedIn() {
  return (
    <Tab.Navigator
      initialRouteName={Screens.Login}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === Screens.User) {
            iconName = 'person';
          } else if (route.name === Screens.Help) {
            iconName = 'help-circle';
          } else if (route.name === Screens.List) {
            iconName = 'list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name={Screens.User}
        component={UserScreen}
        options={{title: 'Профиль'}}
      />
      <Tab.Screen
        name={Screens.Help}
        component={HelpScreen}
        options={{title: 'Помощь'}}
      />
      <Tab.Screen
        name={Screens.List}
        component={ListScreen}
        options={{title: 'Список'}}
      />
    </Tab.Navigator>
  );
}
