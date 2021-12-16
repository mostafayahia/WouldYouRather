import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestDetailsPreview from './QuestDetailsPreview';
import { PREVIEW, FULL } from '../utils/quest_details_types';
import QuestDetailsFull from './QuestDetailsFull';

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
                        <h4>Would You Rather</h4>
                        {
                            detailsType === PREVIEW
                                ? <QuestDetailsPreview quest={quest} />
                                : (
                                    detailsType === FULL
                                        ? <QuestDetailsFull id={quest.id} />
                                        : null
                                )
                        }
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }, { id, detailsType }) {
    const quest = questions[id];

    return {
        quest,
        detailsType,
        user: users[quest.author]
    };
}

export default connect(mapStateToProps)(Quest);