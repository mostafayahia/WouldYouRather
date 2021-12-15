import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OPTION_ONE, OPTION_TWO } from '../utils/options';


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

        console.log('answer', this.state.answer)

        // todo: save user answer
        // todo: redirect to question path
    }


    render() {
        const { quest } = this.props;
        const { optionOne, optionTwo } = quest;

        return (
            <div>
                <h4>Would You Rather</h4>
                <input type="radio"
                    name="answer"
                    value={OPTION_ONE}
                    onChange={this.handleAnswer}
                    defaultChecked />
                {optionOne.text}<br />
                <input type="radio"
                    name="answer"
                    value={OPTION_TWO}
                    onChange={this.handleAnswer} />
                {optionTwo.text}
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

export default connect(mapStateToProps)(QuestDetailsUnanswered);