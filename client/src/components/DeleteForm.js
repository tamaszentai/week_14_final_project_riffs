import React from 'react';
import axios from 'axios';

const DeleteForm = (props) => {
    const title = props.location.state.title;
    const fileName = props.location.state.fileName;
    const id = props.location.state.id;
    console.log(fileName, id);
    
    const handleDelete = event => {
      axios.delete("/api/riffs/" + id)
      .then(() => {
          console.log('hello');
        }
    )};
    
    const handleCancelDelete = event => {
        window.location.href = "http://localhost:3000/FileList";
    }
    
    
    return (
            <div className="form-style-5">
              <h3>Are you sure you want to delete?</h3>
              <h1>{title}</h1>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>

    )
}

export default DeleteForm;

