import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

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

        dispatch(setAuthedUser(username))
    }


    render() {
        const { users } = this.props;
        const { username } = this.state;

        return (
            <div className="login">
                <h3 className="center">Please, Sign in to continue</h3>
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

export default connect(mapStateToProps)(Login);