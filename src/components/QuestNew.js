import React, { Component } from 'react';
import { connect } from 'react-redux';

import { OPTION_ONE, OPTION_TWO } from '../utils/options';

class QuestNew extends Component {

    state = {
        [OPTION_ONE]: '',
        [OPTION_TWO]: '',
    }
    
    handleSubmit = e => {
        e.preventDefault();

        // todo: add question in db & store
        // todo: redirect to home page
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

export default connect(mapStateToProps)(QuestNew);

