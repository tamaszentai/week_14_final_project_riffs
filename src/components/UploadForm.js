import React, { useState } from 'react';

const UploadForm = () => {
    return (
        <div className="uploadform">
            <form>
                <input type="text" placeholder="File name" />
                <input type="file" />
                <textarea placeholder="Description here..."></textarea>
                <button type="submit" value="">Upload</button>
            </form>
        </div>
    )
}

export default UploadForm;