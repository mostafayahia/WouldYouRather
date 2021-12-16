import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/add">New Question</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
            </div>
        )
    }
}

export default Nav;