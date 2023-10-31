import Button from '../../../shared/components/button';
import Container from '../../../shared/components/container';
import UserForm from '../../../shared/components/user-form';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../store/actions';

export default function UserScreen() {
  const dispatch = useDispatch();
  return (
    <Container>
      <UserForm></UserForm>
      <Button title="Выйти" onSubmit={() => dispatch({type: ACTIONS.LOGOUT})}></Button>
    </Container>
  );
}
