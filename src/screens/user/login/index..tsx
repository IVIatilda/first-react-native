import Button from '../../../shared/components/button';
import {Screens} from '../../../navigation/screens';
import Container from '../../../shared/components/container';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button title="Войти" onSubmit={() => dispatch({ type: ACTIONS.LOGIN })}></Button>
      <Button
        title="Вопросы"
        onSubmit={() => navigation.navigate(Screens.Help, { screen: Screens.Questions})}
      />
    </Container>
  );
}
