import React, {useState} from 'react';
import { Link } from "react-router-dom";
import EditForm from './EditForm';

const File = (props) => {

    const [title, setTitle] = useState(props.title);
		const [description, setDescription] = useState(props.description);
    const [id, setId] = useState(props.id);
    const [fileName, setFileName] = useState(props.fileName);

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
                    <h6>Description: {props.description}</h6>    
                </div>
                
                <div className="editdeletediv">
                    
                    <Link to={{
                        pathname: '/EditForm',
                        state: {
                            title: title,
                            description: description,
                            id: id
                        }
                        }}><button className="fa fa-edit" /></Link>

					<Link to={{
                        pathname: '/DeleteForm',
                        state: {
							title: title,
                            id: id,
                            fileName: fileName
                        }
                        }}><button className="fa fa-trash" /></Link>			
                </div>  
            </details>
        </div>
     </div>
    )
}

export default File;