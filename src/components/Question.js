import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const { user, question } = this.props;
        console.log('user', user);
        console.log('question', question);
        
        return (
            <div className="question">
                QUESTION
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