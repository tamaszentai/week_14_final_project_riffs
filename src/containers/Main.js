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
                RIFFS
            </header>
            <div className="intruments">
                <img src="../../guitar.png" alt="guitar" id="guitar"/>
                <img src="../../bass.png" alt="bass" id="bass"/>
            </div>
            <div className="router">
            <Router>
                <React.Fragment>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/UploadForm" component={UploadForm} />
                    <Route path="/FileList" component={FileList} />
                </React.Fragment>
            </Router>
            </div>
        </div>
    )
}

export default Main;