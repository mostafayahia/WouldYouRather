import { getQuestions, getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';

export const INIT_DATA = 'INIT_DATA'

// todo: remove hardcoded user id 
const USER_ID = "tylermcginnis";

function initData(users, questions) {
    return {
        type: INIT_DATA,
        users,
        questions,
    }
}

export function handleInitData() {
    return async dispatch => {
        dispatch(showLoading());

        const [users, questions] = await Promise.all([getUsers(), getQuestions()]);
        dispatch(initData(users, questions));
        
        // todo: remove dispatching hardcoded user id 
        dispatch(setAuthedUser(USER_ID));

        dispatch(hideLoading());
    }
}