import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
    //const [values, setValues] = useState({name: '', file: null, description: ''})
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // const handleInputChange = event => {
    //     const {name, value} = event.target
    //     setValues({...values, [name]: value})
    // }
    // const changeFile = (file) => {
    //     setFile(file);
    //     console.log(file);
    // }

    const handleFileChange = event => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type !== 'audio/mpeg'){
            console.log('Please select an audio file!');
            return;
        }
        setFile(selectedFile);
        //changeFile(selectedFile);
    }

    const handleTitleChange = event => {
        const newTitle = event.target.value;
        setTitle(newTitle);
    }

    const handleDescriptionChange = event => {
        const newDescription = event.target.value;
        setDescription(newDescription);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData();// If file selected
        if ( file ) {
        data.append( 'file', file);
        data.append( 'title', title );
        data.append( 'description', description );
		axios.post( '/api/riffs/upload', data, {
			headers: {
			 'accept': 'application/json',
			 'Accept-Language': 'en-US,en;q=0.8',
			 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
			}
		 })
			.then( ( response ) => {if ( 200 === response.status ) {
				// If file size is larger than expected.
				if( response.data.error ) {
				 if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                    // console.log('filesize'
					// ,this.ocShowAlert( 'Max size: 2MB', 'red' );
				 } else {
					console.log( response.data );// If not the given file type
				 }
				} else {
                 // Success
                 console.log('success');   
				 let fileData = response.data;
				 console.log( 'filedata', fileData );
				}
			 }
			}).catch( ( error ) => {
            // If another error
            console.log('error'); 
		 });
		} else {
         // if file not selected throw error
         console.log('error'); 	
		}
	};

    return (
        <div className="form-style-5">
            <form onSubmit={handleSubmit}>
                <input 
                //name='name'
                type="text" 
                placeholder="File title" 
                //value={values.name}
                onChange={handleTitleChange}/>

                <input 
                //name='file'
                type="file" 
                // value={values.file}
                onChange={handleFileChange}/>

                <textarea 
                //name='description'
                placeholder="Description here..." 
                maxlength="100"
                rows="3" 
                // cols="30"
                //value={values.description} 
                onChange={handleDescriptionChange}/>

                <input
                type="submit" 
                value="Upload" />
            </form>
        </div>
    )
}         
export default UploadForm;