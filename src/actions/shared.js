import { getQuestions, getUsers } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function handleInitData() {
    return async dispatch => {
        dispatch(showLoading());

        const [users, questions] = await Promise.all([getUsers(), getQuestions()]);
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));

        dispatch(hideLoading());
    }
}


function addQuestionAnswer({ qid, answer, authedUser }) {
    return {
        type: ADD_QUESTION_ANSWER,
        qid,
        answer,
        authedUser,
    }
}

export function handleAddQuestionAnswer({ authedUser, qid, answer }) {
    return async dispatch => {
        await saveQuestionAnswer({ authedUser, qid, answer });
        dispatch(addQuestionAnswer({ authedUser, qid, answer }))
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(quest) {
    return async dispatch => {
        const question = await saveQuestion(quest);
        dispatch(addQuestion(question));
    }
}