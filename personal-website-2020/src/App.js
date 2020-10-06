// default
import React from 'react';
import './App.css';
import './fonts.css';

import "react-awesome-button/dist/styles.css";


// React Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// other
import { AwesomeButton } from "react-awesome-button";

// components
import MainNavBar from "./components/MainNavBar";
import HeaderSection from './components/HeaderSection';

// screens
import JoshScreen from './screens/JoshScreen';
import EyesScreen from './screens/EyesScreen';
import EarsScreen from './screens/EarsScreen';
import BothScreen from './screens/BothScreen';

function App() {

    let appStyle = {
        backgroundColor: "white",
        color: "black",
        fontFamily: "Barlow, sans-serif"
    }

    let footerStyle = {
        paddingTop: "100px"
    }

    let footerFlexbox = {
        display: "flex",
        flexWrap: "no-wrap",
        justifyContent: "space-evenly",
        width: "300px",
        margin: "auto"
    }

    let center = {
        textAlign: "center"
    }

    let linkStyle = {
        color: "inherit"
    }

    console.log("test");

    return (
        <div className="App" style={appStyle}>

            <Router>
                <MainNavBar />
                <br />
                <div>
                    {/* Put content for each page between route tags below. */}
                    <Switch>
                        <Redirect exact from="/" to="/josh" />
                        <Route path="/josh">
                            <HeaderSection
                                title="J O S H"
                                subtitle="is a full-stack developer, audio engineer, and game developer with a passion for accessibility."
                            />
                            <JoshScreen />
                        </Route>
                        <Route path="/eyes">
                            <HeaderSection
                                title="P R O G R A M M I N G"
                                subtitle="Full stack web dev, software engineering, databases, and more."
                            />
                            <EyesScreen />
                        </Route>
                        <Route path="/ears">
                            {/* Ears Page */}
                            <HeaderSection
                                title="M U S I C"
                                subtitle="Programmer by day, DJ by night."
                            />
                            <EarsScreen />
                        </Route>
                        <Route path="/both">
                            {/* Both Page */}
                            <HeaderSection
                                title="G A M E D E V"
                                subtitle="Combination of all my skills."
                            />
                            <BothScreen />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <footer className="page-footer font-small cyan darken-3" style={footerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center" style={footerFlexbox}>
                                <a className="portrait" href="https://www.linkedin.com/in/joshuasmaza/" style={linkStyle} target="_blank">
                                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="portrait" href="https://github.com/jsm209" style={linkStyle} target="_blank">
                                    <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="portrait" href="https://mazaa.itch.io/" style={linkStyle} target="_blank">
                                    <img src="images/itchio.png" style={{width: "30px", height: "30px"}}/>
                                </a>
                                <a className="portrait" href="https://twitter.com/mazaamusic" style={linkStyle} target="_blank">
                                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="portrait" href="https://open.spotify.com/artist/6VqLTxzQnYAUsSxxlwJ6lK" style={linkStyle} target="_blank">
                                    <i className="fab fa-spotify fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="portrait" href="https://soundcloud.com/mazaamusic" style={linkStyle} target="_blank">
                                    <i className="fab fa-soundcloud fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="portrait" href="https://www.instagram.com/joshuasmaza/" style={linkStyle} target="_blank">
                                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="portrait" href="https://www.facebook.com/joshua.maza.16" style={linkStyle} target="_blank">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={center}>Designed by Joshua Maza, 2020</p>
                <AwesomeButton
                    style={{ display: "block", margin: "auto", width: "100px" }}
                    type="primary"
                    href="https://drive.google.com/file/d/1UKXIrf_QMFP7K_OqUV-nvB5TUebjS0_f/view?usp=sharing"
                    target="_blank"
                >
                    Resume
                        </AwesomeButton>
                <p style={center}>All credit for the logos go to their respective owners.</p>

            </footer>
        </div>
    );
}

export default App;