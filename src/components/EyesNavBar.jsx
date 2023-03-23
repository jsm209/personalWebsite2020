import React from "react"

// Components
import ContentSection from "./ContentSection";
import ISBReflection from "../screens/reflections/ISBReflection";
import RDRReflection from "../screens/reflections/RDRReflection";
import TMUSReflection from "../screens/reflections/TMUSReflection";
import { AwesomeButton } from "react-awesome-button";

import Fade from 'react-reveal/Fade';

class EyesNavBar extends React.Component {

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

        let pStyle = {
            fontSize: "20px",
            textAlign: "center"
        }

        let seemoreStyle = {
            fontSize: "20px",
            color: "white",
            backgroundColor: "#ED6167",
            textAlign: "right",
            padding: "10px 40px",
            borderRadius: "40px",
            display: "inline",
            position: "absolute",
            right: "0"
        }

        let divStyle = {
            width: "70%",
            margin: "auto",
            position: "relative",
            paddingBottom: "66px"
        }

        let awesomeButtonStyle = {
            margin: "auto",
            width: "100px",
            display: "block",
            marginBottom: "50px",
            marginTop: "50px"
        }

        if (this.state.showSummary == "") {
            return (
                <div>
                    <div style={divStyle}>
                        <p style={pStyle}><i>Each of these roles contain a number of smaller projects.</i></p>
                    </div>
                    <ContentSection
                        heading="T-Mobile"
                        subheading="Software Engineer/iOS Developer (July 2021 - Present)"
                        content="Key developer for numerous consumer facing applications. I was exposed to many different iOS development technologies and methods, more information coming soon."
                        src="images/tmobilelogo.jpg"
                    />
                    <ContentSection
                        heading="T-Mobile"
                        subheading="TechX Software Engineer Internship (Oct 2020 - June 2021)"
                        content="Nine-month TechX internships offer real-world experience for students currently
                        enrolled in an undergraduate degree program and majoring in engineering or another technology-related field.
                        I work on an internal knowledge base tool that helps customers in T-Mobile stores across the world."
                        src="images/tmobilelogo.jpg"
                    />
                    <div style={divStyle}>
                        <Fade>
                            <p style={seemoreStyle} onClick={() => {
                                this.handleClick("tmobile");
                            }}>Show More</p>
                        </Fade>
                    </div>

                    <ContentSection
                        heading="Institute for Systems Biology (ISB)"
                        subheading="Software Developer Internship (Sept 2019 - Sept 2020)"
                        content="Initially brought on to be a developer for an educational game teaching
                                the Central Dogma of molecular biology, I grew to support this role through multiple
                                extensions and additional projects, including web development, backend, and database work."
                        src="images/isblogo.png"
                    />
                    <div style={divStyle}>
                        <Fade>
                            <p style={seemoreStyle} onClick={() => {
                                this.handleClick("isb");
                            }}>Show More</p>
                        </Fade>
                    </div>
                    <ContentSection
                        heading="Associated Students at the University of Washington (ASUW)"
                        subheading="Rainy Dawg Radio Technology Manager (Sept 2018 - June 2020)"
                        content="I support the UW community by connecting students and music through technology.
                                By building the Rainy Dawg website, music database, managing and maintaining live audio
                                equipment and PA systems, educating other students, and coordinating events, I empower
                                students to contribute to our campus community."
                        src="images/rdrlogo.png"
                    />
                    <div style={divStyle}>
                        <Fade>
                            <p style={seemoreStyle} onClick={() => {
                                this.handleClick("rdr");
                            }
                            }>Show More</p>
                        </Fade>

                    </div>
                </div>
            )
        } else if (this.state.showSummary == "isb") {
            return (
                <div>
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                    <ISBReflection />
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                </div>

            )

        } else if (this.state.showSummary == "rdr") {
            return (
                <div>
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                    <RDRReflection />
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                </div>
            )
        } else if (this.state.showSummary == "tmobile") {
            return (
                <div>
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                    <TMUSReflection />
                    <AwesomeButton type="primary" style={awesomeButtonStyle} onPress={() => {
                        this.handleClick("");
                    }}>Back</AwesomeButton>
                </div>
            )
        }


    }
}

export default EyesNavBar;
