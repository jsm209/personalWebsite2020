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

    return (
        <div>
            {/* Reflection */}
            <ContentSection
                heading="ExSpire"
                content="ExSpire is a bullet hell dungeon crawler where time is a currency. 
                Explore what makes you tick, manage your seconds, and climb The Spire to undercover 
                its secrets. Create an adventurer, roll your stats, and fight your way up by surviving 
                the tests and challenges trapped within levels of this dangerous tower. It will be released
                late fall 2020."
                src="images/exspiregame/HeaderCapsuleImage.png"
            />

            <ContentSection
                content="I built this entire project out from scratch and by myself, handling all aspects of
                development from planning, prototyping/ideating, testing, marketing, etc. I'm planning on establishing
                online communities (Twitter/Discord). After getting an initial version out and earning some initial 
                revenue, will take further post release feedback and expand the development team then to include more people."
            />

            <ProjectLogistics
                team1name="Developers"
                team1="Joshua Maza"
                scope="Game Development, Character and Level Design, 2D Pixel Art, UI Design, Environmental Storytelling and World Building"
                time="June - Current"
                tools="Unity, Piskel, FL Studio 20"
            />

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
                    <p>And more to come.. </p>
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
        </div>
    )
}

export default ExspireReflection;