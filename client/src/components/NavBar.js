import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
 const hello = event => {
   console.log('hello');
 }


 return (
  <div className="navbar">
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/UploadForm">Upload Riff</Link>
    </li>
    <li>
        <Link to="/FileList" onClick={props.refreshList}>Riff Browser</Link>
    </li>
  </ul>
  </div>
  
 )};

export default NavBar;