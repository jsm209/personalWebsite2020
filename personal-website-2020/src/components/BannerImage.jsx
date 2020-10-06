import React from "react"

import Fade from 'react-reveal/Slide';
import Grid from '@material-ui/core/Grid';

// Props:
// src - source of image


function BannerImage(props) {

    let divStyle = {
        width: "80%",
        margin: "auto"
    }

    let imageStyle = {
        width: "100%",
        height: "auto",
        margin: "auto",
        display: "block"
    }

    return(
        <div style={divStyle}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <img src={props.src} style={imageStyle}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default BannerImage;