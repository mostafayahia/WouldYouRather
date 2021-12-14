import { GET_USERS } from "../actions/users";
import { INIT_DATA } from "../actions/shared";

export default function users(state={}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            };
        case INIT_DATA:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state;
    }
}