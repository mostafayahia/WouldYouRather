import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetUsers } from '../actions/users';
import Login from './Login';

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetUsers());
    }


    render() {
        const { loading } = this.props;

        return (
            <div className="container">
                {loading === true
                    ? <p>Loading...</p>
                    : <Login />
                }
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        loading: JSON.stringify(users) === "{}"
    }
}

export default connect(mapStateToProps)(App);
