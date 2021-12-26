import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OPTION_ONE, OPTION_TWO } from '../utils/options';
import { handleAddQuestionAnswer } from '../actions/questions';
import PropTypes from 'prop-types';


class QuestDetailsUnanswered extends Component {
    state = {
        answer: OPTION_ONE, // default value
    }

    handleAnswer = e => {
        const answer = e.target.value;

        this.setState(() => ({ answer }))
    }

    handleSubmit = e => {
        e.preventDefault();

        const { answer } = this.state;
        const { authedUser, quest, dispatch } = this.props;
        const { id } = quest;

        dispatch(handleAddQuestionAnswer({ authedUser, qid: id, answer }));
    }


    render() {
        const { quest } = this.props;
        const { optionOne, optionTwo } = quest;

        return (
            <div>
                <div>
                    <input type="radio"
                        name="answer"
                        value={OPTION_ONE}
                        onChange={this.handleAnswer}
                        defaultChecked />
                    {optionOne.text}
                </div>
                <div>
                    <input type="radio"
                        name="answer"
                        value={OPTION_TWO}
                        onChange={this.handleAnswer} />
                    {optionTwo.text}
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }, { id }) {
    const quest = questions[id];

    return {
        quest,
        authedUser,
    }
}

QuestDetailsUnanswered.propTypes = {
    dispatch: PropTypes.func.isRequired,
    quest: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(QuestDetailsUnanswered);