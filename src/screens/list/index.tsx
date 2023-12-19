import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../navigation/screens';
import ReviewScreen from './pages/review';
import ListPage from './pages/list';

const ListStack = createNativeStackNavigator();

export default function ListScreen() {
  return (
    <ListStack.Navigator screenOptions={{headerShown: false}}>
      <ListStack.Screen
        name={Screens.List}
        component={ListPage}
        options={{title: 'Отзывы'}}
      />
      <ListStack.Screen
        name={Screens.Review}
        component={ReviewScreen}
        options={{title: 'Отзыв'}}
      />
    </ListStack.Navigator>
  );
}
