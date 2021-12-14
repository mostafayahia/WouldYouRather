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
        return (
            <div >
                <Login />
            </div>
        );
    }
}

export default connect()(App);
