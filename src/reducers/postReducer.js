import {Fetch_POST, FETCH_POST} from '../actions/types';
const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POST:
      return {
        ...state,
        items: action.payload
      }
    break;
    default:
      return state;
  }
}