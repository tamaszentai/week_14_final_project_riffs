import React, { useState } from 'react';

const UploadForm = () => {
    const [values, setValues] = useState({name: '', file: null, description: ''})

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    return (
        <div className="uploadform">
            <form>
                <input 
                name='name'
                type="text" 
                placeholder="File name" 
                value={values.name}
                onChange={handleInputChange}/>

                <input 
                name='file'
                type="file" 
                value={values.file}
                onChange={handleInputChange}/>

                <textarea 
                name='description'
                placeholder="Description here..." 
                rows="10" 
                cols="30" 
                value={values.description} 
                onChange={handleInputChange}/>

                <input
                type="submit" 
                value="Upload" />
            </form>
        </div>
    )
}

export default UploadForm;