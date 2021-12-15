export function formatUser(user) {
    const { id, name, avatarURL, questions, answers } = user;
    return {
        id,
        name,
        avatarURL,
        questions: questions.length,
        answers: Object.keys(answers).length
    }
}