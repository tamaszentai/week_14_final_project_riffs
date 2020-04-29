import React from 'react';
import File from './File';

const FileList = (props) => {
    console.log(props);
    let riffNode = null;
    if ( props.files !== null) {
        
        riffNode = props.files.map((file, index) => {
        return <File title={file.title}
                     url={file.fileUrl}
                     description={file.description}
                     key={index}
                     id={file._id.toString()}
                     fileName={file.fileName} 
                     ></File>
    })}

   
    //console.log(props.files);

    
    return (
        <div className="filelist">
           
        {riffNode}
        </div>
    )
}

export default FileList;