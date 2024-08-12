import React from "react";
import ContentSection from "./ContentSection";
import ISBReflection from "../screens/reflections/ISBReflection";
import RDRReflection from "../screens/reflections/RDRReflection";
import TMUSReflection from "../screens/reflections/TMUSReflection";
import TMUSReflection2 from "../screens/reflections/TMUSReflection2";
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

const styles = {
    pStyle: {
        fontSize: "16px",
        textAlign: "center"
    },
    seemoreStyle: {
        fontSize: "16px",
        color: "white",
        backgroundColor: "#606c38",
        textAlign: "right",
        padding: "10px 40px",
        borderRadius: "40px",
        display: "inline",
        position: "absolute",
        right: "0"
    },
    backStyle: {
        fontSize: "16px",
        color: "white",
        backgroundColor: "#606c38",
        textAlign: "center",
        padding: "10px 40px",
        borderRadius: "40px",
        display: "inline",
        width: "75px"
    },
    backDivStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        margin: "auto",
        position: "relative",
        paddingBottom: "66px",
    },
    divStyle: {
        width: "70%",
        margin: "auto",
        position: "relative",
        paddingBottom: "66px",
    },
    awesomeButtonStyle: {
        margin: "auto",
        width: "100px",
        display: "block",
        marginBottom: "50px",
        marginTop: "50px",
        backgroundColor: "#606c38"
    }
};

class EyesNavBar extends React.Component {
    constructor() {
        super();
        this.state = { showSummary: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(summary) {
        this.setState({ showSummary: summary });
    }

    renderContentSections() {
        return (
            <div>
                <div style={styles.divStyle}>
                    <p style={styles.pStyle}>
                        <i>Each of these roles contain a number of smaller projects.</i>
                    </p>
                </div>
                {this.renderContentSection(
                    "T-Mobile",
                    "Software Engineer/iOS Developer (July 2021 - Present)",
                    "I currently am a key developer for numerous consumer-facing sales applications directly responsible for generating revenue at T-Mobile. These applications span multiple platforms from web to native iOS and involve implementing several sales platform-based solutions like cart systems, product catalogs, and handling and storing important customer information. I became a lead engineer on many of these teams and gained learned expertise in applying solutions to customer sales technical challenges in varying environments and technologies.",
                    "images/tmobilelogo.png",
                    "tmobile2"
                )}
                {this.renderContentSection(
                    "T-Mobile",
                    "TechX Software Engineer Internship (Oct 2020 - June 2021)",
                    "Nine-month TechX internships offer real-world experience for students currently enrolled in an undergraduate degree program and majoring in engineering or another technology-related field. I worked on an internal knowledge base tool that helps frontline store employees help customers in T-Mobile stores by making T-Mobile's internal knowledge base more accessible.",
                    "images/tmobilelogo.png",
                    "tmobile"
                )}
                {this.renderContentSection(
                    "Institute for Systems Biology (ISB)",
                    "Software Developer Internship (Sept 2019 - Sept 2020)",
                    "Initially brought on to be a developer for an educational game teaching the Central Dogma of molecular biology, I grew to support this role through multiple extensions and additional projects, including web development, backend, and database work.",
                    "images/isblogo.png",
                    "isb"
                )}
                {this.renderContentSection(
                    "Associated Students at the University of Washington (ASUW)",
                    "Rainy Dawg Radio Technology Manager (Sept 2018 - June 2020)",
                    "I supported the UW community by connecting students and music through technology. By building the Rainy Dawg website, music database, managing and maintaining live audio equipment and PA systems, educating other students, and coordinating events, I empowered students to contribute to the University of Washington campus community.",
                    "images/rdrlogo.png",
                    "rdr"
                )}
            </div>
        );
    }

    renderContentSection(heading, subheading, content, src, key) {
        return (
            <div key={key}>
                <ContentSection
                    heading={heading}
                    subheading={subheading}
                    content={content}
                    src={src}
                />
                <div style={styles.divStyle}>
                    <Fade>
                        <p style={styles.seemoreStyle} onClick={() => this.handleClick(key)}>
                            Show More
                        </p>
                    </Fade>
                </div>
            </div>
        );
    }

    renderReflection(ReflectionComponent) {
        return (
            <div>
                <div style={styles.backDivStyle}>
                    <Fade>
                        <p style={styles.backStyle} onClick={() => this.handleClick("")}>
                            Back
                        </p>
                    </Fade>
                </div>
                <ReflectionComponent />
                <div style={styles.backDivStyle}>
                    <Fade>
                        <p style={styles.backStyle} onClick={() => this.handleClick("")}>
                            Back
                        </p>
                    </Fade>
                </div>
            </div>
        );
    }

    render() {
        const { showSummary } = this.state;

        switch (showSummary) {
            case "isb":
                return this.renderReflection(ISBReflection);
            case "rdr":
                return this.renderReflection(RDRReflection);
            case "tmobile":
                return this.renderReflection(TMUSReflection);
            case "tmobile2":
                return this.renderReflection(TMUSReflection2);
            default:
                return this.renderContentSections();
        }
    }
}

export default EyesNavBar;
