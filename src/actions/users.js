import { getUsers } from '../utils/api';

export const GET_USERS = 'GET_USERS';

function fetchUsers(users) {
    return {
        type: GET_USERS,
        users,
    }
}

export function handleGetUsers() {
    return async dispatch => {
        const users = await getUsers();
        dispatch(fetchUsers(users));
    };
}