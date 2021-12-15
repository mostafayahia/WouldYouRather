import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quest from './Quest';

const UNANSWERED = 'unanswered';
const ANSWERED = 'answered';

class Home extends Component {
    state = {
        category: UNANSWERED,
    };

    handleCategoryBtn = e => {
        e.preventDefault();

        const category = e.target.getAttribute('category');

        if (this.state.category !== category) {
            this.setState(() => ({
                category,
            }));
        }

    }

    render() {
        const { category } = this.state;

        const { answeredQuestionsIds, unansweredQuestionsIds } = this.props;

        const questionsIds = category === ANSWERED ? answeredQuestionsIds : unansweredQuestionsIds;

        return (
            <div className="home">
                <div className="home-header">
                    <button className={category === UNANSWERED ? "active" : ""}
                        category={UNANSWERED}
                        onClick={this.handleCategoryBtn} >
                        Unanswered
                    </button >
                    <button className={category === ANSWERED ? "active" : ""}
                        category={ANSWERED}
                        onClick={this.handleCategoryBtn} >
                        Answered
                    </button>
                </div>
                <div>
                    {
                        questionsIds.map(qid => {
                            return <Quest key={qid} id={qid}></Quest>
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    const answeredQuestionsIds = Object.keys(users[authedUser].answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unansweredQuestionsIds = Object.keys(questions).filter(qid => !answeredQuestionsIds.includes(qid))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        answeredQuestionsIds,
        unansweredQuestionsIds
    }
}

export default connect(mapStateToProps)(Home);