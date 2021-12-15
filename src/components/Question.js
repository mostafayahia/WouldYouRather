import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const { user, question } = this.props;
        console.log('user', user);
        console.log('question', question);

        return (
            <div className="quest">
                <div className="quest-header">
                    <p>{user.name} asked:</p>
                </div>
                <div className="quest-body">
                    <img src={user.avatarURL} className="avatar" />
                    <div className="quest-details">QUESTION DETAILS</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id];

    return {
        question,
        user: users[question.author]
    };
}

export default connect(mapStateToProps)(Question);