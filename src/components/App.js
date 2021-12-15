import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import { handleInitData } from '../actions/shared';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitData());
    }


    render() {
        const { loading } = this.props;

        return (
            <Fragment>
                <LoadingBar />
                <div className="container">
                    {loading === true
                        ? null
                        : <Home />
                    }
                </div>
            </Fragment>
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
