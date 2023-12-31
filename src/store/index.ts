import {persistStore, persistReducer} from 'redux-persist';

import {createStore} from 'redux';
import appReducer from './appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
