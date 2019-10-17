import {FETCH_POST} from './types';

export function fetchPosts() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POST,
      payload: data
    }));
  }
}