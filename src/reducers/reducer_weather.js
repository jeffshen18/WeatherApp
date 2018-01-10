import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      console.log(action.payload);
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; //inserted at the front of the array
      //state.concat does not mutate while state.push would be mutating the state
  }
  return state;
}
