import { FETCH_POSTS, FETCH_POST } from "../actions";
import _ from 'lodash';
export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_POST:
            // const post = action.payload.data;   
            // const NewState = {...state };
            // NewState[post.id]=post;
            // return NewState;

            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
}