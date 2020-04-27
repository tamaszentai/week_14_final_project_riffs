import React from 'react';

const File = (props) => {
    return (
    <div>
        <h6>{props.name}</h6>
        <audio controls>
            <source src={props.url} type="audio/mpeg" />
                Your browser does not support the audio element.
        </audio>
     </div>
    )
}

export default File;