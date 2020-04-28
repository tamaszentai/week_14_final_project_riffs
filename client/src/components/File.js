import React from 'react';

const File = (props) => {
    return (
    <div className="file">
        <div className="file-left">
            <h5>{props.title}</h5>
            <audio controls id="audioplayer">
                <source src={props.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
            </audio>
            <details>
            <summary>Details</summary>
                <div className="file-right">
                    <h6>{props.description}</h6>    
                </div>
                <div className="editdeletediv">
							<button className="fa fa-edit" />
							<button className="fa fa-trash" />
            </div>  
            </details>
        </div>
     </div>
    )
}

export default File;