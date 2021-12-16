import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    
    handleLogout = e => {
        e.preventDefault();

        // todo: update authedUser in the store
        // todo: redirect to login page
    }

    render() {
        const { authedUserName } = this.props;

        return (
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/add">New Question</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
                {
                    authedUserName === null
                        ? null
                        : <div className="authed-user">
                            <p>Hello {authedUserName},</p>
                            <button className="logout" onClick={this.handleLogout}>Logout</button>
                        </div>
                }
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    const authedUserName = users[authedUser]
        ? users[authedUser].name
        : null;

    return {
        authedUserName,
    }
}

export default connect(mapStateToProps)(Nav);