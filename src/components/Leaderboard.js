import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatUser } from '../utils/helpers';
import PropTypes from 'prop-types';

class Leaderboard extends Component {
    render() {
        const { users } = this.props;

        return users.map(user => (
            <div className="user" key={user.id}>
                <div className="user-header">
                    <p>{user.name}</p>
                </div>
                <div className="user-body">
                    <img src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className="avatar"
                    />
                    <div className="user-details">
                        <p>Asked: {user.questions}</p>
                        <p>Answers: {user.answers}</p>
                    </div>
                </div>
            </div>
        ))
    }
}

function mapStateToProps({ users }) {
    const formattedUsers = Object.keys(users).map(uid => formatUser(users[uid]));

    // sort users according to the highest of (questions + answers)
    formattedUsers.sort((u1, u2) => (u2.questions + u2.answers) - (u1.questions + u1.answers));

    return {
        users: formattedUsers,
    }
}

Leaderboard.propTypes = {
    users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Leaderboard);