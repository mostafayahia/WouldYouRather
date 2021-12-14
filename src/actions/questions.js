import { getQuestions } from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';

function fetchQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export function handleGetQuestions() {
    return async dispatch => {
        const questions = await getQuestions();
        dispatch(fetchQuestions(questions))
    }
}