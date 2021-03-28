import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

function AboutMe(props) {

    let divStyle = {
        width: "80%",
        margin: "auto",
        paddingTop: "50px"
    }

    return(
        <div style={divStyle}>
            <Alert severity="info">
                Junior studying Informatics and Entrepreneurship <strong>@UW</strong>
            </Alert>
            <Alert severity="info">
                Software Developer Intern <strong>@ISB</strong>
            </Alert>
            <Alert severity="info">
                Previously <strong>@ASUW</strong>
            </Alert>
        </div>
    )
}

export default AboutMe;