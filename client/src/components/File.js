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
            <div className="editdeletediv">
            <a href="edit" class="fa fa-edit"/>
            <a href="delete" class="fa fa-trash"/>
            </div>
        </div>
        <div className="file-right">
             <h6><u>Description:</u></h6>
             <h6>{props.description}</h6>
        </div>  
     </div>
    )
}

export default File;