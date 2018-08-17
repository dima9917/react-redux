import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); same as:
      if (!state.find(x => x.city.name === action.payload.data.city.name))
        return [action.payload.data, ...state];
      else alert(action.payload.data.city.name + ' already exists');
  }
  return state;
}
