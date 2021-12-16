import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import { handleInitData } from '../actions/shared';
import Quest from './Quest';
import Leaderboard from './Leaderboard';
import QuestNew from './QuestNew';
import Nav from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitData());
    }


    render() {
        const { loading } = this.props;

        return (
            <BrowserRouter>
                <Fragment>
                    <LoadingBar />
                    <Nav />
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

function mapStateToProps({ authedUser }) {
    return {
        // todo: loading should be finished just after loading init data (users & questions)
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
