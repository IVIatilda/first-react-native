import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from './styles';
import Button from '../button';
import {useDispatch, useSelector} from 'react-redux';
import { ACTIONS } from '../../../store/actions';

const UserForm = () => {

  const [name, onChangeName] = React.useState(useSelector(state => state.name));
  const [age, onChangeAge] = React.useState(useSelector(state => state.age));
  const [email, onChangeEmail] = React.useState(useSelector(state => state.email));

  const dispatch = useDispatch();

  const saveForm = () => {
    dispatch({type: ACTIONS.SET_NAME, value: name});
    dispatch({type: ACTIONS.SET_AGE, value: age});
    dispatch({type: ACTIONS.SET_EMAIL, value: email});
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Имя"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Возраст"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button title="Сохранить" onSubmit={saveForm} />
    </SafeAreaView>
  );
};

export default UserForm;
