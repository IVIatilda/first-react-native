import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../navigation/screens';
import AboutScreen from './about';
import QuestionsScreen from './questions';

const HelpStack = createNativeStackNavigator();

export default function HelpScreen() {
  return (
    <HelpStack.Navigator screenOptions={{headerShown: false}}>
      <HelpStack.Screen
        name={Screens.About}
        component={AboutScreen}
        options={{title: 'О сервисе'}}
      />
      <HelpStack.Screen
        name={Screens.Questions}
        component={QuestionsScreen}
        options={{title: 'Профиль'}}
      />
    </HelpStack.Navigator>
  );
}
