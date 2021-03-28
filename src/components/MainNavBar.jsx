import React from "react";

// React Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function MainNavBar() {

    let titleStyle = {
        fontSize: "125%",
        textAlign: "center"
    }

    let imgStyle = {
        margin: "auto",
        display: "block",
        width: "auto",
        height: "75px"
    }

    let divStyle = {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        width: "100%",
        margin: "auto",
        paddingTop: "50px"
    }

    return(
        <div style={divStyle}>

            <Link to="/josh" style={{textDecoration: "none"}} className="headerButton">
                <img src="images/joshicon.png" style={imgStyle}/>
                <h1 style={titleStyle}>J O S H</h1>
            </Link>
                
            <Link to="/eyes" style={{textDecoration: "none"}} className="headerButton">
                <img src="images/eyesicon.png" style={imgStyle}/>
                <h1 style={titleStyle}>E Y E S</h1>
            </Link>
                
            <Link to="/ears" style={{textDecoration: "none"}} className="headerButton">
                <img src="images/earsicon.png" style={imgStyle}/>
                <h1 style={titleStyle}>E A R S</h1>
            </Link>
            
            <Link to="/both" style={{textDecoration: "none"}} className="headerButton">
                <img src="images/bothicon.png" style={imgStyle}/>
                <h1 style={titleStyle}>B O T H</h1>
            </Link>
        </div>
    )
}

export default MainNavBar;