import React from "react"

// Components
import ContentSection from "./ContentSection";
import PetraReflection from "../screens/reflections/PetraReflection";
import BeatfoxflowReflection from "../screens/reflections/BeatfoxflowReflection";
import ExspireReflection from "../screens/reflections/ExspireReflection";
import { AwesomeButton } from "react-awesome-button";

import Fade from 'react-reveal/Fade';

class BothNavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            showSummary: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(summary) {
        this.setState(prevState => {
            return {
                showSummary: summary
            }
        })
    }

    render() {

        let titleStyle = {
            fontSize: "40px",
            color: "#606c38"
        }

        let pStyle = {
            fontSize: "16px",
            textDecoration: "none",
            color: "lack",
            textAlign: "center"
        }

        let p2Style = {
            fontSize: "16px",
            textDecoration: "none",
            color: "black",
            textAlign: "center"
        }

        let flexStyle = {
            width: "70%",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
        }

        let divStyle = {
            width: "70%",
            margin: "auto"
        }

        let imgStyle = {
            width: "300px",
            height: "auto",
            margin: "auto",
            display: "block"
        }

        let panelStyle = {
            padding: "25px",
            width: "300px",
            margin: "auto"
        }

        let awesomeButtonStyle = {
            margin: "auto",
            width: "100px",
            display: "block",
            marginBottom: "50px",
            marginTop: "50px"
        }

        let linkStyle = {
            color: "inherit"
        }

        if (this.state.showSummary == "") {
            return (
                <div>
                    <div style={divStyle}>
                        <p style={pStyle}><i>Click on a panel to learn more.</i></p>
                    </div>
                    <div style={panelStyle} className="portrait" onClick={() => {
                        this.handleClick("exspire");
                    }}>
                        <Fade>
                            <div>
                                <img src="images/exspiregame/LibraryCapsule.png" style={imgStyle} />
                                <p style={pStyle}>ExSpire (Coming November 2020)</p>
                                <p style={p2Style}>2D Rougelike Bullet Hell - Unity</p>
                            </div>
                        </Fade>
                    </div>
                    <div style={flexStyle}>


                        <div style={panelStyle} className="portrait" onClick={() => {
                            this.handleClick("petra");
                        }}>
                            <Fade>
                                <div>
                                    <img src="images/petra.png" style={imgStyle} />
                                    <p style={pStyle}>PETRA</p>
                                    <p style={p2Style}>2D Shooter - Unity</p>
                                </div>
                            </Fade>
                        </div>

                        <div style={panelStyle} className="portrait" onClick={() => {
                            this.handleClick("beatfoxflow");
                        }}>
                            <Fade>
                                <div>
                                    <img src="images/beatfoxflow.png" style={imgStyle} />
                                    <p style={pStyle}>BeatFoxFlow</p>
                                    <p style={p2Style}>2D Rhythmic Platformer - Unity</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div style={divStyle}>
                        <p style={pStyle}><i>Other games not listed here can be found on my <a href="https://mazaa.itch.io/" style={linkStyle} target="_blank">itch.io page</a> or my <a href="https://github.com/jsm209" style={linkStyle} target="_blank">github profile</a>.</i></p>
                    </div>
                </div>
            )
        } else if (this.state.showSummary == "petra") {
            return (
                <div>
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                    <PetraReflection />
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                </div>

            )

        } else if (this.state.showSummary == "beatfoxflow") {
            return (
                <div>
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                    <BeatfoxflowReflection />
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                </div>
            )
        } else if (this.state.showSummary == "exspire") {
            return (
                <div>
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                    <ExspireReflection />
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                </div>
            )
        }


    }
}

export default BothNavBar;