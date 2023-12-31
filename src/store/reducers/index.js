import {combineReducers} from 'redux';
import homeReducer from './homeRecer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
