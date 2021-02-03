import { combineReducers } from 'redux';
import reducer from '../todo/redux/index';

const rootReducer = combineReducers({
    reducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;