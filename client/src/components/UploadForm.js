import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';

const UploadForm = () => {
    const [values, setValues] = useState({name: '', file: null, description: ''})
    const [file, setFile] = useState(null);

    // const handleInputChange = event => {
    //     const {name, value} = event.target
    //     setValues({...values, [name]: value})
    // }
    const changeFile = (file) => {
        setFile(file);
        console.log(file);
        
    }

    const handleInputChange = event => {
        const selectedFile = event.target.files[0];
        changeFile(selectedFile);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData();// If file selected
		if ( file ) {data.append( 'file', file, file.name );
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
					//this.ocShowAlert( response.data.error, 'red' );
				 }
				} else {
                 // Success
                 console.log('success');
                 
				 let fileName = response.data;
				 console.log( 'filedata', fileName );
				 //this.ocShowAlert( 'File Uploaded', '#3089cf' );
				}
			 }
			}).catch( ( error ) => {
            // If another error
            console.log('error'); 
			//this.ocShowAlert( error, 'red' );
		 });
		} else {
         // if file not selected throw error
         console.log('error'); 
		// this.ocShowAlert( 'Please upload file', 'red' );
		}
	};

	// ocShowAlert = ( message, background = '#3089cf' ) => {
	// 	let alertContainer = document.querySelector( '#oc-alert-container' ),
	// 	 alertEl = document.createElement( 'div' ),
	// 	 textNode = document.createTextNode( message );
	// 	alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
	// 	$( alertEl ).css( 'background', background );
	// 	alertEl.appendChild( textNode );
	// 	alertContainer.appendChild( alertEl );
	// 	setTimeout( function () {
	// 	 $( alertEl ).fadeOut( 'slow' );
	// 	 $( alertEl ).remove();
	// 	}, 3000 );
	//  };
    // }

    return (
        <div className="form-style-5">
            <form onSubmit={handleSubmit}>
                {/* <input 
                name='name'
                type="text" 
                placeholder="File name" 
                value={values.name}
                onChange={handleInputChange}/> */}

                <input 
                name='file'
                type="file" 
                // value={values.file}
                onChange={handleInputChange}/>

                {/* <textarea 
                name='description'
                placeholder="Description here..." 
                rows="10" 
                cols="30" 
                value={values.description} 
                onChange={handleInputChange}/> */}

                <input
                type="submit" 
                value="Upload" />
            </form>
        </div>
    )
}         
export default UploadForm;