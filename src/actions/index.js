import _ from 'lodash';
//middleware has opportunity has ability to stop it from going to reducers, stop an action or change it
//redux thunk allows you to return function from action creator and will then call that action automatically
//dispatch change data
//getstate read data
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  _.chain(getState().posts)//this gets list of posts
  .map('userId')//then we map over and just take out the userId
  .uniq()//here we get the uniq userids
  .forEach(id => dispatch(fetchUser(id)))//for each uniq id we fetch user and dispatch results
  .value();//must have value here to execute these steps in a chain
}
export const fetchPosts = () => {
  //dont have to list getstate here and if there is only one arg remove parens
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
    //above we put response.data very important
  }
};


export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
    //above we put response.data very important
  }
};

//could also write above out as
// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts')
//
// dispatch({ type: 'FETCH_POSTS', payload: response.data})
// }
