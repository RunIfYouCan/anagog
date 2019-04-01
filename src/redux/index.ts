import { combineReducers } from 'redux';

import user from './user/reducer';
import applications from './applications/reducer';

const rootReducer = combineReducers({
  user,
  applications,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
