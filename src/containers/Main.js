import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import UploadForm from '../components/UploadForm';
import FileList  from '../components/FileList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = () => {
    const [files, setFiles] = useState([]);


    return(
        
        <div className="main">
            <header>
                <img src="../../riffs.png" id="logo"/>
            </header>
            
            <Router>
                <React.Fragment>
                    <div className="navbar">
                    <NavBar />
                    </div>
                    <div className="left">
                        <img src="../../bass.png" id="bass"/>
                    </div>
                    <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/UploadForm" component={UploadForm} />
                    <Route path="/FileList" component={FileList} />
                    </div>
                    <div className="right">
                        <img src="../../guitar.png" id="guitar"/>
                    </div>
                </React.Fragment>
            </Router>
            
        </div>
    )
}

export default Main;