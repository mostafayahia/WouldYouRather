import { getQuestions, getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function handleInitData() {
    return async dispatch => {
        dispatch(showLoading());

        const [users, questions] = await Promise.all([getUsers(), getQuestions()]);
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));

        dispatch(hideLoading());
    }
}