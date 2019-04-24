import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  //put placeholder here first
  posts: postsReducer,
  users: usersReducer
});
