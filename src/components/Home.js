import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quest from './Quest';
import { PREVIEW } from '../utils/quest_details_types';
import PropTypes from 'prop-types'

const CAT_ANSWERED = 'ANSWERED';
const CAT_UNANSWERED = 'UNANSWERD'

class Home extends Component {
    state = {
        category: CAT_UNANSWERED,
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

        const questionsIds = category === CAT_ANSWERED ? answeredQuestionsIds : unansweredQuestionsIds;

        return (
            <div className="home">
                <div className="home-header">
                    <button className={category === CAT_UNANSWERED ? "active" : ""}
                        category={CAT_UNANSWERED}
                        onClick={this.handleCategoryBtn} >
                        Unanswered
                    </button >
                    <button className={category === CAT_ANSWERED ? "active" : ""}
                        category={CAT_ANSWERED}
                        onClick={this.handleCategoryBtn} >
                        Answered
                    </button>
                </div>
                <div>
                    {
                        questionsIds.map(qid => {
                            return <Quest detailsType={PREVIEW} key={qid} match={{
                                params: {
                                    id: qid,
                                }
                            }}></Quest>
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

Home.propTypes = {
    answeredQuestionsIds: PropTypes.array.isRequired,
    unansweredQuestionsIds: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Home);