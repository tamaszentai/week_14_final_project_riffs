import React from 'react';
import File from './File';

const FileList = (props) => {
    const riffNode = props.files.map((file, index) => {
    return <File name={file.fileName} url={file.fileUrl}></File>
})
    console.log(props.files);

    
    return (
        <>
        <h1>{riffNode}</h1>
        </>
    )
}

export default FileList;