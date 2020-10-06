import React from "react"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fade from 'react-reveal/Slide';
import Grid from '@material-ui/core/Grid';

// Props:
// src - source of image


function ProjectLogistics(props) {

    let divStyle = {
        width: "60%",
        margin: "auto"
    }

    let titleStyle = {
        fontSize: "20px",
        color: "#000000",
    }

    let pStyle = {
        fontSize: "16px"
    }

    let flexboxStyle = {
        width: "99%",
        display: "flex",
        wrap: "nowrap",
        justifyContent: "space-evenly",
        margin: "auto"
    }

    let cardStyle = {
        margin: "20px"
    }

    let smallCardStyle = {
        margin: "20px",
        display: "inline",
        width: "30%",
        margin: "auto",
        height: "150px"
    }

    return(
        <div style={divStyle}>
            <Card style={cardStyle} variant="outlined">
                <CardContent>
                    <h1 style={titleStyle}>Team</h1>
                    <p style={pStyle}><b>{props.team1name}</b></p>
                    <p style={pStyle}>{props.team1}</p>
                    <p style={pStyle}><b>{props.team2name}</b></p>
                    <p style={pStyle}>{props.team2}</p>
                </CardContent>
            </Card>
            <div style={flexboxStyle}>
                <Card style={smallCardStyle} variant="outlined">
                    <CardContent>
                        <h1 style={titleStyle}>Scope</h1>
                        <p style={pStyle}>{props.scope}</p>
                    </CardContent>
                </Card>
                <Card style={smallCardStyle} variant="outlined">
                    <CardContent>
                        <h1 style={titleStyle}>Time</h1>
                        <p style={pStyle}>{props.time}</p>
                    </CardContent>
                </Card>
                <Card style={smallCardStyle} variant="outlined">
                    <CardContent>
                        <h1 style={titleStyle}>Tools</h1>
                        <p style={pStyle}>{props.tools}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ProjectLogistics;