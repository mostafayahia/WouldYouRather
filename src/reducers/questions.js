import { GET_QUESTIONS } from "../actions/questions";
import { INIT_DATA } from "../actions/shared";

export default function questions(state={}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case INIT_DATA:
            return {
                ...state,
                ...action.questions,
            };
        default:
            return state;
    }
}