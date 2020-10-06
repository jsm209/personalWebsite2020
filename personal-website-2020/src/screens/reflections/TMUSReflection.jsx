import React from 'react';

// Components
import ContentSection from "../../components/ContentSection";
import ProjectLogistics from "../../components/ProjectLogistics";

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function TMUSReflection(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#23EDEC"
    }

    let subtitleStyle = {
        fontSize: "30px",
        color: "#23EDEC"
    }

    let pStyle = {
        fontSize: "20px"
    }

    let liStyle = {
        paddingTop: "10px"
    }

    let divStyle = {
        width: "70%",
        margin: "auto"
    }

    let imgStyle = {
        height: "400px",
        width: "auto",
        margin: "auto",
        display: "block",
        paddingTop: "50px"
    }
    let flexboxStyle = {
        display: "flex",
        width: "70%",
        margin: "auto",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingBottom: "50px"
    }

    return (
        <div>
            {/* Reflection */}
            <ContentSection
                heading="Technical Experience Internship"
                content=""
                src="images/tmobilelogo.jpg"
            />

            <Fade>
                <ProjectLogistics
                    team1name="Product & Technology"
                    team1="Sean Horn (Manager), Scott Granger (Leader)"
                    team2name="Interns"
                    team2="Joshua Maza (TechX Intern)"
                    scope="N/A"
                    time="Oct 2020 - Present"
                    tools="N/A"
                />
            </Fade>
        </div>
    )
}

export default TMUSReflection;