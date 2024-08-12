import React from 'react';

// Components
import ContentSection from "../../components/ContentSection";
import ProjectLogistics from "../../components/ProjectLogistics";

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function ExspireReflection(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#606c38"
    }

    let subtitleStyle = {
        fontSize: "30px",
        color: "#606c38"
    }

    let pStyle = {
        fontSize: "16px"
    }

    let liStyle = {
        paddingTop: "10px"
    }

    let divStyle = {
        width: "60%",
        margin: "auto"
    }

    let imgStyle = {
        height: "auto",
        width: "90%",
        margin: "auto",
        display: "block"
    }

    let iFrameStyle = {
        margin: "auto",
        display: "block",
        padding: "100px"
    }

    let footnoteStyle = {
        fontStyle: "italic",
        textAlign: "center"
    }

    return (
        <div>
            {/* Reflection */}
            <ContentSection
                heading="ExSpire"
                content="ExSpire is a bullet hell dungeon crawler where time is a currency. 
                Explore what makes you tick, manage your seconds, and climb The Spire to undercover 
                its secrets. Create an adventurer, roll your stats, and fight your way up by surviving 
                the tests and challenges trapped within levels of this dangerous tower."
                src="images/exspiregame/HeaderCapsuleImage.png"
            />

            <ContentSection
                content="I built this entire project out from scratch and by myself, handling all aspects of
                development from planning, prototyping/ideating, testing, marketing, etc. It was built in Unity over
                the course of several months where I practiced agile development practices with Trello and branch based
                development, as well as handle non-programming work such as drawing graphics and level design."
            />

            <ProjectLogistics
                team1name="Developers"
                team1="Joshua Maza"
                scope="Game Development, Character and Level Design, 2D Pixel Art, UI Design, Environmental Storytelling and World Building"
                time="April 2021 - June 2021"
                tools="Unity, Piskel, FL Studio 20"
            />
                        
            <div style={divStyle}>
                    <p style={footnoteStyle}>(Visit the steam page below or <a href="https://video.akamai.steamstatic.com/store_trailers/256839388/movie_max_vp9.webm?t=1623921897" target="_blank">click here</a> for a demo video)</p>
            </div>

            <Fade>
                <iframe src="https://store.steampowered.com/widget/1423620/" frameborder="0" width="646" height="190" style={iFrameStyle} ></iframe>
            </Fade>


            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Feature List</h1>
                    <ol style={pStyle}>
                        <li style={liStyle}>Time incorporated into gameplay as a currency</li>
                        <li style={liStyle}>Procedural level generation</li>
                        <li style={liStyle}>Scaling/responsive level generation</li>
                        <li style={liStyle}>Unique enemy mobs and behavior</li>
                        <li style={liStyle}>Boss fights with multiple phases</li>
                        <li style={liStyle}>Dialogue interactions</li>
                        <li style={liStyle}>Item system</li>
                    </ol>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={subtitleStyle}>Work In Progress Screenshots</h1>
                    <p style={pStyle}>Here are some screenshots of gameplay of the current build (October 2020).</p>
                    <img style={imgStyle} src="images/exspiregame/screenshot1.png" />
                    <img style={imgStyle} src="images/exspiregame/screenshot2.png" />
                    <img style={imgStyle} src="images/exspiregame/screenshot3.png" />
                    <img style={imgStyle} src="images/exspiregame/screenshot4.png" />
                    <img style={imgStyle} src="images/exspiregame/screenshot5.png" />
                </div>
            </Fade>
            <div style={divStyle}>
                <p style={footnoteStyle}>Note (8/6/2024):</p>
                <p style={footnoteStyle}>Unfortunately this game never actually "released" because I focused on 
                starting my role at T-Mobile out of college. However I did complete all the Steam publishing pipeline 
                tasks and successfully uploaded a complete final demo of my work on the Steam game page linked above. 
                I did not feel comfortable charging money for this as it was not my full final vision for the game. I may
                revisit this in the future but it is not likely.</p>
            </div>
        </div>
    )
}

export default ExspireReflection;