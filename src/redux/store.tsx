import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducers as rootReducer} from './reducers';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  // whitelist: ['userReducer'],
};
const persistedReducer = persistReducer(persistConfig as any, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
let persistor: any;

function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  persistor = persistStore(store as any);

  sagaMiddleware.run(rootSaga);

  return store;
}

const storeObj = configureStore();
export {storeObj, persistor};
