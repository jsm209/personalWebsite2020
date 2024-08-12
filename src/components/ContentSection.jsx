import React from "react"

import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';

// Props:
// heading - what heading to show
// content - what content to show
// src - source of image
// right - if true, places image to the right of the content.

function ContentSection(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#606c38"
    }

    let subtitleStyle = {
        fontSize: "16px",
        fontStyle: "italic",
        color: "#606c38",
        fontWeight: "light"
    }

    let pStyle = {
        fontSize: "16px"
    }

    let divStyle = {
        width: "70%",
        margin: "auto"
    }

    let imageStyle = {
        width: "75%",
        height: "auto",
        margin: "auto",
        display: "block"
    }

    let center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    if (props.right == true) {
        return(
            <div style={divStyle}>
                <Grid container spacing={3}>
                    <Grid item sm={8} xs={12}>
                            <Fade>
                                <h1 style={titleStyle}>{props.heading}</h1>
                                <h2 style={subtitleStyle}>{props.subheading}</h2>
                                <p style={pStyle}>{props.content}</p>
                                <p style={pStyle}>{props.content2}</p>
                            </Fade>
                    </Grid>
                    <Grid item sm={4} style={center}>
                        <Fade>
                            <img src={props.src} style={imageStyle}/>
                        </Fade>
                    </Grid>
                </Grid>
            </div>

        )
    }

    return(
        <div style={divStyle}>
            <Grid container spacing={3}>
                <Grid item sm={4} style={center}>
                    <Fade>
                        <img src={props.src} style={imageStyle}/>
                    </Fade>
                    
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Fade>
                        <h1 style={titleStyle}>{props.heading}</h1>
                        <h2 style={subtitleStyle}>{props.subheading}</h2>
                        <p style={pStyle}>{props.content}</p>
                        <p style={pStyle}>{props.content2}</p>
                    </Fade>                   
                </Grid>
            </Grid>
        </div>
    )
}

export default ContentSection;