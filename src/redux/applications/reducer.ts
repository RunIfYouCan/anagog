import {
  LOAD_APPLICATIONS,
  DELETE_APPLICATION,
  SELECT_APPLICATION,
  UPLOAD_CONFIG,
  CREATE_APPLICATION,
  IApplicationsState,
  ApplicationActionTypes,
} from './types';

const initialState: IApplicationsState = {
  list: [],
  selected: '',
  config: null,
};

export default function (state = initialState, action: ApplicationActionTypes) {
  switch (action.type) {
    case LOAD_APPLICATIONS:
      return {
        ...state,
        list: action.payload,
      };
    case DELETE_APPLICATION:
      return {
        ...state,
        list: state.list.filter((app) => app.AppName !== action.payload),
        selected: '',
      };
    case SELECT_APPLICATION:
      return {
        ...state,
        selected: action.payload,
      };
    case UPLOAD_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    case CREATE_APPLICATION:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
}
