import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import PropTypes from 'prop-types';

class Login extends Component {

    state = {
        username: ''
    }

    handleChange = e => {
        const { value } = e.target;

        this.setState(() => ({
            username: value
        }))
    }

    handleSignIn = e => {
        e.preventDefault();

        const { dispatch } = this.props;
        const { username } = this.state;

        dispatch(setAuthedUser(username));
    }


    render() {
        const { users } = this.props;
        const { username } = this.state;

        return (
            <div className="login">
                <h3 className="center login-header">Would You Rather</h3>
                
                <div className="login-body">
                    <h4 className="center">Please, Sign in to continue</h4>
                    <select onChange={this.handleChange}>
                        <option value="">Choose Username</option>
                        {
                            users.map(u => {
                                return <option key={u.id} value={u.id}>{u.name}</option>
                            })
                        }
                    </select>
                    <button disabled={username === ''} onClick={this.handleSignIn}>Sign in</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map(uid => ({
            id: uid,
            name: users[uid].name,
        }))
    }
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Login);