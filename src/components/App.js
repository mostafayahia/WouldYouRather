import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleGetUsers } from '../actions/users';
import Login from './Login';
import LoadingBar from 'react-redux-loading';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetUsers());
    }


    render() {
        const { loading } = this.props;

        return (
            <Fragment>
                <LoadingBar />
                <div className="container">
                    {loading === true
                        ? null
                        : <Login />
                    }
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        loading: JSON.stringify(users) === "{}"
    }
}

export default connect(mapStateToProps)(App);
