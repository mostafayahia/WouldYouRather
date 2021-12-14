import { getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const GET_USERS = 'GET_USERS';

function fetchUsers(users) {
    return {
        type: GET_USERS,
        users,
    }
}

export function handleGetUsers() {
    return async dispatch => {
        dispatch(showLoading());

        const users = await getUsers();
        dispatch(fetchUsers(users));

        dispatch(hideLoading());
    };
}