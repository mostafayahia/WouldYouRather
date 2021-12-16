import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OPTION_ONE, OPTION_TWO } from '../utils/options';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';

class QuestNew extends Component {

    state = {
        [OPTION_ONE]: '',
        [OPTION_TWO]: '',
    }
    
    handleSubmit = e => {
        e.preventDefault();

        const { dispatch, history, authedUser } = this.props;
        const { optionOne, optionTwo } = this.state;

        dispatch(handleAddQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser,
        }))

        // redirect to home page
        history.push('/');
    }

    handleChange = e => {
        const option = e.target.name;
        const optionVal = e.target.value;

        this.setState(() => ({ [option]: optionVal }))
    }

    render() {
        const { optionOne, optionTwo } = this.state;

        return (
            <div>
                <h3 className="center">Create New Question</h3>
                <div className="quest-new">
                    <h4>Would you rather...</h4>
                    <input type="text" 
                        placeholder="Option One" 
                        name={OPTION_ONE} 
                        onChange={this.handleChange} />
                    <input type="text" 
                        placeholder="Option Two" 
                        name={OPTION_TWO} 
                        onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}
                        disabled={optionOne === '' || optionTwo === ''}>submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(QuestNew));

