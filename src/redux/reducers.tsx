import {combineReducers} from 'redux';

import userReducer from './user/userReducer';

export const reducers = combineReducers({
  userReducer,
});

export type RootState = ReturnType<typeof reducers>;
