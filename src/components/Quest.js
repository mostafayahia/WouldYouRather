import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestDetailsPreview from './QuestDetailsPreview';
import { PREVIEW } from '../utils/quest_details_types';
import QuestDetailsFull from './QuestDetailsFull';
import QuestNotFound from './QuestNotFound'

class Quest extends Component {
    render() {
        const { user, quest, detailsType } = this.props;

        return quest
            ? <div className="quest">
                < div className="quest-header" >
                    <p>{user.name} asked:</p>
                </div >
                <div className="quest-body">
                    <img src={user.avatarURL}
                        className="avatar"
                        alt={`Avatar of ${user.name}`} />
                    <div className="quest-details">
                        <h4>Would You Rather</h4>
                        {
                            detailsType === PREVIEW
                                ? <QuestDetailsPreview quest={quest} />
                                : <QuestDetailsFull id={quest.id} />
                        }
                    </div>

                </div>
            </div >
            : <QuestNotFound />;

    }
}

function mapStateToProps({ questions, users }, props) {

    const { detailsType } = props;
    const id = props.match.params.id;

    const quest = questions[id];
    const user = quest ? users[quest.author] : null;

    return {
        quest,
        detailsType,
        user,
    };
}

export default connect(mapStateToProps)(Quest);