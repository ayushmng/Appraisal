import {Action} from './userAction';
import {
  IMPORT_USERS,
  IMPORT_USERS_SUCCESS,
  IMPORT_USERS_FAILURE,
} from './userConstant';

interface InitialState {
  loadingContent: boolean;
  message?: string;
  allUser: Array<any>;
  userData: {
    [key: string]: any;
  };
}

const InitialState: InitialState = {
  loadingContent: false,
  userData: {},
  allUser: [],
};

export default function userReducer(
  state: InitialState = InitialState,
  action: Action,
): InitialState {
  switch (action.type) {
    case IMPORT_USERS: {
      return {...state, loadingContent: true};
    }
    case IMPORT_USERS_SUCCESS: {
      return {...state, loadingContent: false, allUser: action.payload.data};
    }
    default: {
      return state;
    }
  }
}
