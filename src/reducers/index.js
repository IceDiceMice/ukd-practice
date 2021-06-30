import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';

const Reducers = combineReducers({
    loginReducer,
    postsReducer
  })
  export default Reducers;