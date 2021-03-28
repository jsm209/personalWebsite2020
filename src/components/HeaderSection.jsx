import React from "react"

import Fade from 'react-reveal/Fade';

// other
import { AwesomeButton } from "react-awesome-button";

// Props:
// title - title for header
// subtitle - subtitle for header


function HeaderSection(props) {

    let divStyle = {
        height: "400px",
        width: "100%",
        margin: "auto",
        marginBottom: "150px"
    }

    /*
    let titleStyle = {
        fontSize: "50px",
        color: "#FFFFFF",
        position: "relative",
        top: "-70%",
        left: "66%",
        transform: "translate(-50%, -50%)"
    }

    let subtitleStyle = {
        fontSize: "20px",
        fontStyle: "italic",
        color: "#FFFFFF",
        position: "relative",
        top: "-70%",
        left: "66%",
        transform: "translate(-50%, -50%)"
    }
    */

    let titleStyle = {
        fontSize: "250%",
        color: "black",
        textAlign: "center",
        paddingTop: "7%"
    }

    let subtitleStyle = {
        fontSize: "125%",
        fontStyle: "italic",
        color: "black",
        textAlign: "center"
    }

    let imgStyle = {
        margin: "auto",
        display: "block",
        paddingTop: "90px",
        width: "auto",
        height: "50px"
    }

    let resumeButton =

        <AwesomeButton
        style={{ display: "block", margin: "auto", width: "100px", marginTop: "50px" }}
        type="primary"
        href="resume"
    >
        Resume
                        </AwesomeButton>

    return (
        <div>

            <div style={divStyle}>
                <Fade>
                    <h1 style={titleStyle}>{props.title}</h1>
                    <h2 style={subtitleStyle}>{props.subtitle}</h2>
                    <div>{props.title == "J O S H" ? resumeButton : ""}</div>

                    <img src="images/downicon.png" style={imgStyle} />

                </Fade>


                {/*

            <ParticlesBg type="circle"/>

            <h1 style={titleStyle}>{props.title}</h1>
            <h2 style={subtitleStyle}>{props.subtitle}</h2>
            */}
            </div>
        </div>

    )
}

export default HeaderSection;
