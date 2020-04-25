import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/UploadForm">UploadForm</Link>
    </li>
    <li>
        <Link to="/FileList">FileList</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;