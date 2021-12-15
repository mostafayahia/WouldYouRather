import { getQuestions, getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from './authedUser';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

// todo: remove hardcoded user id 
const USER_ID = "tylermcginnis";

export function handleInitData() {
    return async dispatch => {
        dispatch(showLoading());

        const [users, questions] = await Promise.all([getUsers(), getQuestions()]);
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        
        // todo: remove dispatching hardcoded user id 
        dispatch(setAuthedUser(USER_ID));

        dispatch(hideLoading());
    }
}