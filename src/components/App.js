import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import { handleInitData } from '../actions/shared';
import Quest from './Quest';
import Leaderboard from './Leaderboard';
import QuestNew from './QuestNew';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitData());
    }

    handleLogout = e => {
        e.preventDefault();

        // todo: update authedUser in the store
        // todo: redirect to login page
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
                            loading === true
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
        // todo: loading should be finished just after loading init data (users & questions)
        loading: authedUser === null,
        authedUserName,
    }
}

export default connect(mapStateToProps)(App);
