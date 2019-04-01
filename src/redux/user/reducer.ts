import { USER_LOGIN, USER_LOGIN_FAIL, USER_LOGOUT, UserActionTypes, IUserState } from './types';

const initialState: IUserState = {
  name: '',
  loginError: '',
};

export default function (state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loginError: action.payload.error,
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
