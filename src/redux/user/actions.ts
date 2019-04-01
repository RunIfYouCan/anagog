import Api from '../../api/Api';
import history from '../../utils/history';

import {
  USER_LOGIN_FAIL,
  USER_LOGIN,
  USER_LOGOUT,
} from './types';
import { TOKEN_KEY } from '../../constants';

import { Action } from 'redux';
import { AppState } from '../index';
import { ThunkAction } from 'redux-thunk';

type ActionThunk = ThunkAction<void, AppState, null, Action<string>>;

export const login = (name: string, password: string): ActionThunk => async (dispatch: any) => {
  try {
    const { token, ...user } = await Api.login(name, password);

    localStorage.setItem(TOKEN_KEY, token);

    dispatch({
      type: USER_LOGIN,
      payload: user,
    });
    history.push('/applicationSelection');
  } catch (e) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: {
        error: e,
      },
    });
  }
};

export const logout = (): ActionThunk => async (dispatch: any) => {
  try {
    await Api.logout();

    localStorage.removeItem(TOKEN_KEY);

    dispatch({ type: USER_LOGOUT });
    history.push('/');
  } catch (e) {
    alert(e);
  }
};
