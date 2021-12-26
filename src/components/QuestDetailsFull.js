import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestDetailsUnanswered from './QuestDetailsUnanswered';
import QuestDetailsAnswered from './QuestDetailsAnswered';
import PropTypes from 'prop-types';

class QuestDetailsFull extends Component {

    render() {
        const { qid, answered } = this.props;

        return (
            <div>
                {
                    answered
                        ? <QuestDetailsAnswered id={qid} />
                        : <QuestDetailsUnanswered id={qid} />
                }
            </div>
        )

    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    const quest = questions[id];
    const answered = Object.keys(users[authedUser].answers).includes(quest.id);

    return {
        answered,
        qid: id
    }
}

QuestDetailsFull.propTypes = {
    qid: PropTypes.string.isRequired,
    answered: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(QuestDetailsFull);