import {IMPORT_USERS} from './userConstant';
import {IMPORT_USERS_SUCCESS} from './userConstant';
import {IMPORT_USERS_FAILURE} from './userConstant';

import {userProps} from './userApi';

export type Payload = {
  page?: number;
  id?: string;
  data?: any;
};

export interface Action {
  type:
    | typeof IMPORT_USERS
    | typeof IMPORT_USERS_SUCCESS
    | typeof IMPORT_USERS_FAILURE;
  payload: Payload;
}

export const getUsers = (): Action => {
  console.log('Its in action');
  return {
    type: IMPORT_USERS,
    payload: {},
    // payload: {page},
  };
};

export const getUsersSuccess = (payload: Payload): Action => {
  return {
    type: IMPORT_USERS_SUCCESS,
    payload,
  };
};

export const getUsersFailure = (payload: Payload): Action => {
  return {
    type: IMPORT_USERS_FAILURE,
    payload,
  };
};
