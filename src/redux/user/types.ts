export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface ILogin {
  type: typeof USER_LOGIN;
  payload: {
    name: string;
  };
}

export interface ILoginFailed {
  type: typeof USER_LOGIN_FAIL;
  payload: {
    error: string;
  };
}

export interface ILogout {
  type: typeof USER_LOGOUT;
}

export type UserActionTypes = ILogin | ILoginFailed | ILogout;

export interface IUserState {
  name: string;
  loginError: string;
}
