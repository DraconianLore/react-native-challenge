import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import Thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
/**
 * Reducers
 */
import RootReducer from './Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(Thunk)
);

const persistor = persistStore(store);

export {
  store,
  persistor,
};