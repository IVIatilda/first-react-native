import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import Button from '../../../../../shared/components/button';
import {useDispatch, useSelector} from 'react-redux';
import {ACTIONS} from '../../../../../store/actions';
import {Controller, useForm} from 'react-hook-form';

interface IFormInput {
  name: string;
  age: number;
  email: string;
}

const UserForm = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: useSelector(state => state.name),
      age: useSelector(state => state.age),
      email: useSelector(state => state.email),
    },
  });

  const onSubmit = (data: IFormInput) => {
    dispatch({type: ACTIONS.SET_NAME, value: data.name});
    dispatch({type: ACTIONS.SET_AGE, value: data.age});
    dispatch({type: ACTIONS.SET_EMAIL, value: data.email});
  };

  return (
    <SafeAreaView>
      <View style={styles.inputBox}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Имя"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
      </View>

      <View style={styles.inputBox}>
        <Controller
          control={control}
          rules={{
            pattern: /^[0-9]+$/,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Возраст"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="age"
        />
        {errors.age && <Text style={styles.error}>Допустимы только цифры</Text>}
      </View>

      <View style={styles.inputBox}>
        <Controller
          control={control}
          rules={{
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Email"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.error}>Некорректный email</Text>}
      </View>
      <Button title="Сохранить" onSubmit={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default UserForm;
