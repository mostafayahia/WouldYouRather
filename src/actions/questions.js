import { saveQuestionAnswer, saveQuestion } from "../utils/api";
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
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