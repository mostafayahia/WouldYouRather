import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OPTION_ONE, OPTION_TWO } from '../utils/options';

class QuestDetailsAnswered extends Component {
    render() {
        const {
            quest, authedUserAns, optionOneVotes, optionTwoVotes,
            totalVotes,
        } = this.props;
        const { optionOne, optionTwo } = quest;

        return (
            <div>
                <div className={`option ${authedUserAns === OPTION_ONE ? 'authed-user-answer' : ''}`}>
                    <p>
                        {optionOne.text}
                    </p>
                    <p className="votes">
                        votes: {`${optionOneVotes} / ${totalVotes} (${getPercentage(optionOneVotes, totalVotes)}%)`}
                    </p>
                </div>
                <div className={`option ${authedUserAns === OPTION_TWO ? 'authed-user-answer' : ''}`} >
                    <p>
                        {optionTwo.text}
                    </p>
                    <p className="votes">
                        votes: {`${optionOneVotes} / ${totalVotes} (${getPercentage(optionTwoVotes, totalVotes)}%)`}
                    </p>
                </div>
            </div>
        )
    }
}

function getPercentage(votes, totalVotes) {
    return Math.round(100 * votes / totalVotes);
}

function mapStateToProps({ authedUser, questions }, { id }) {
    const quest = questions[id];
    const authedUserAns = quest[OPTION_ONE].votes.includes(authedUser)
        ? OPTION_ONE
        : OPTION_TWO;
    const optionOneVotes = quest[OPTION_ONE].votes.length;
    const optionTwoVotes = quest[OPTION_TWO].votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return {
        quest,
        authedUserAns,
        optionOneVotes,
        optionTwoVotes,
        totalVotes,
    }

}

export default connect(mapStateToProps)(QuestDetailsAnswered);