import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestDetailsPreview from './QuestDetailsPreview';
import { PREVIEW, ANSWERED, UNANSWERED } from '../utils/quest_details_types';

class Quest extends Component {
    render() {
        const { user, quest, detailsType } = this.props;

        return (
            <div className="quest">
                <div className="quest-header">
                    <p>{user.name} asked:</p>
                </div>
                <div className="quest-body">
                    <img src={user.avatarURL}
                        className="avatar"
                        alt={`Avatar of ${user.name}`} />
                    <div className="quest-details">
                        {
                            detailsType === PREVIEW
                                ? <QuestDetailsPreview quest={quest} />
                                : null
                        }
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, { id, detailsType }) {
    const quest = questions[id];
    console.log('detailstype in map', detailsType);
    detailsType = detailsType || (
        Object.keys(authedUser.answers).includes(id)
            ? ANSWERED
            : UNANSWERED
    );

    return {
        quest,
        detailsType,
        user: users[quest.author]
    };
}

export default connect(mapStateToProps)(Quest);