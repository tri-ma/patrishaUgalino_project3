import React from 'react';

function Tasklist(props) {
    return(
        <div>
            <li>{props.task}</li>
        </div>
    )
}

export default Tasklist;