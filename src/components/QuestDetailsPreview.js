import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function QuestDetailsPreview(props) {
    const { optionOne, optionTwo, id } = props.quest;

    return (
        <div>
            <p>
                {
                    getPreviewFromOptionText(optionOne.text) +
                    " / " + getPreviewFromOptionText(optionTwo.text)}
            </p>
            <Link className="btn" to={`/questions/${id}`}>
                View Question
            </Link>
        </div>
    );
}

function getPreviewFromOptionText(optionText) {
    if (!optionText) {
        return null;
    }

    const arr = optionText.split(' ');

    /*
     * just return 2nd & 3rd word of the option
     * if less than 3 word return the whole option
     */
    if (arr.length < 3) {
        return arr.join(' ');
    } else {
        return `...${[arr[1], arr[2]].join(' ')}...`
    }
}

QuestDetailsPreview.propTypes = {
    quest: PropTypes.object.isRequired,
}

export default QuestDetailsPreview;