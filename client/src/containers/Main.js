import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import UploadForm from '../components/UploadForm';
import FileList  from '../components/FileList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';


const Main = () => {
    const [files, setFiles] = useState(null);

    const changeFiles = (newFiles) => {
        setFiles(newFiles)
    }

    useEffect(() => {
        axios.get("/api/riffs")
        .then(res => {
            console.log(res.data);
            //this.setState({ pictures: res.data });
            changeFiles(res.data)
            console.log(files);
          });
    }, [])
    
   

    return(
        <div className="main">
            <header>
                <img src="../../riffs.png" id="logo"/>
            </header>
            
            <Router>
                <React.Fragment>
                    <NavBar />
                    <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/UploadForm" component={UploadForm} />
                    <Route path="/FileList" component={FileList} />
                    </div>
                </React.Fragment>
            </Router>
            
        </div>
    )
}

export default Main;