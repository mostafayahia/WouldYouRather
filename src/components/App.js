import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import { handleInitData } from '../actions/shared';
import Quest from './Quest';
import Leaderboard from './Leaderboard';
import QuestNew from './QuestNew';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import { unsetAuthedUser } from '../actions/authedUser';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitData());
    }

    handleLogout = e => {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(unsetAuthedUser());
    }


    render() {
        const { loading, authedUserName } = this.props;

        return (
            <BrowserRouter>
                <Fragment>
                    <LoadingBar />
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
                    <div className="container">
                        {loading === true
                            ? null
                            : authedUserName === null
                                ? <Login />
                                : <div>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/questions/:id" component={Quest} />
                                    <Route path="/add" component={QuestNew} />
                                    <Route path="/leaderboard" component={Leaderboard} />
                                </div>
                        }
                    </div>
                </Fragment>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ authedUser, users }) {
    const authedUserName = authedUser === null
        ? null
        : users[authedUser].name;

    return {
        loading: JSON.stringify(users) === {},
        authedUserName,
    }
}

export default connect(mapStateToProps)(App);
