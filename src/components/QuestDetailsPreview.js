import React from 'react';

function QuestDetailsPreview(props) {
    const { optionOne, optionTwo } = props.quest;

    const handleViewQuest = e => {
        e.prevnetDefault();

        // todo: redirect to question path
    }

    return (
        <div>
            <p>
                {
                    getPreviewFromOptionText(optionOne.text) + 
                    " / " + getPreviewFromOptionText(optionTwo.text)}
            </p>
            <button onClick={handleViewQuest}>View Question</button>
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

export default QuestDetailsPreview;