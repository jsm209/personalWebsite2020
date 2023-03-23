import React from 'react';

// Components
import ContentSection from "../components/ContentSection";
import SkillBar from "../components/Skillbar";
// import SkillPieChart from "../components/SkillPieChart";

function JoshScreen(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#ED6167"
    }

    let pStyle = {
        fontSize: "20px"
    }

    let subtitleStyle = {
        fontStyle: "italic",
        fontSize: "18px",
        textAlign: "center"
    }

    let divStyle = {
        width: "70%",
        margin: "auto"
    }

    let skillsFlexbox = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "70%",
        margin: "auto"
    }

    return(
        <div>
            {/* Josh Page */}

            <ContentSection
                heading="// welcome"
                content="Hi, I'm Josh and I'm currently a software engineer and iOS developer for T-Mobile.
                Through my work I've grown a passion for UI development, and worked in diverse teams to improve 
                the user experience for several consumer facing applications. If you're interested in learning more 
                about my professional experience, please find my resume above or refer to the 'Eyes' section of my website.

                I graduated from the University
                Of Washington, Seattle in 2021 and majored in Informatics* and
                minored in Entrepreneurship.
                
                I'm passionate about web and game development, as well as audio
                engineering and music production, and love to learn and apply myself
                in original and challenging personal projects.
                Whether it be through creating web apps, developing games, or
                producing music, growth, impact, and accessibility are always values at
                the forefront of my creative process. Through my passions, I
                hope to grow in my technical skills and create memorable
                and universal experiences in my work."
                src="images/joshua.jpg"
            />

            <div style={divStyle}>
                <p style={subtitleStyle}>*Informatics is the study of information. My degree path focuses on software engineering and data science.</p>
            </div>

            <div style={divStyle}>
                <h1 style={titleStyle}>// about me</h1>
                <ul>
                    <li style={pStyle}>Currently an <b>iOS Developer</b> with nearly 3 years of experience at <b>T-Mobile</b>.</li>
                    <li style={pStyle}>Majored in Informatics and minored in Entrepreneurship.</li>
                    <li style={pStyle}>Strong passion for <b>Entrepreneurship</b> and pitch competitions.</li>
                    <li style={pStyle}>A budding self published <b>indie game developer</b> and <b>iOS developer</b>.</li>
                    <li style={pStyle}>Produces <b>EDM, rap, and pop music,</b> and <b>DJs</b> music in local Seattle clubs and as an opener for touring EDM acts.</li>
                </ul>
            </div>

            <div style={divStyle}>
                <h1 style={titleStyle}>// goals</h1>
                <ul>
                    <li style={pStyle}>(Short-Term) Bench 2 plates or 225 lbs.</li>
                    <li style={pStyle}>(Short-Term) Do a marathon (I'm an avid runner!)</li>
                    <li style={pStyle}>(Short-Term) Release music on a medium-large EDM record label.</li>
                    <li style={pStyle}>(Long-Term) Create some kind of business or startup.</li>
                    <li style={pStyle}>(Long-Term) Create a dedicated game development startup focused on accessibility in unique games.</li>
                    <li style={pStyle}>(Long-Term) Build a personal music studio in Seattle to help produce/mix/master music for local artists.</li>
                    <li style={pStyle}>(Long-Term) Create sustained side income through self published apps in the Apple app store.</li>
                </ul>
            </div>

            <div style={divStyle}>
                <h1 style={titleStyle}>// skills</h1>
            </div>

            <div style={skillsFlexbox}>
                <div>
                    <p style={pStyle}>iOS Skills</p>
                    <table>
                        <SkillBar skill="Apple Design Guidelines" points={5}/>
                        <SkillBar skill="Accessibility Features in Swift" points={5}/>
                        <SkillBar skill="Cocoapods" points={5}/>
                        <SkillBar skill="Combine" points={3}/>
                        <SkillBar skill="NSCache" points={4}/>
                        <SkillBar skill="Resolver" points={5}/>
                        <SkillBar skill="RxSwift" points={3}/>
                        <SkillBar skill="Storyboards" points={5}/>
                        <SkillBar skill="Swift" points={5}/>
                        <SkillBar skill="SwiftUI" points={5}/>
                        <SkillBar skill="Swift Package Manager (SPM)" points={5}/>
                    </table>
                </div>
                <div>
                    <p style={pStyle}>Full Stack (Web dev) Skills</p>
                    <table>
                        <SkillBar skill="Bootstrap" points={5}/>
                        <SkillBar skill="C#" points={3}/>
                        <SkillBar skill="Golang" points={2}/>
                        <SkillBar skill="HTML" points={5}/>
                        <SkillBar skill="Java" points={5}/>
                        <SkillBar skill="JavaScript" points={5}/>
                        <SkillBar skill="Laravel" points={3}/>
                        <SkillBar skill="MySQL" points={4}/>
                        <SkillBar skill="NodeJS" points={3}/>
                        <SkillBar skill="PhaserJS" points={3}/>
                        <SkillBar skill="PHP" points={3}/>
                        <SkillBar skill="Python" points={3}/>
                        <SkillBar skill="R" points={4}/>
                        <SkillBar skill="React" points={5}/>
                        <SkillBar skill="Vue" points={3}/>
                        
                    </table>
                </div>
                <div>
                    <p style={pStyle}>Tools</p>
                    <table>
                        <SkillBar skill="AWS" points={3}/>
                        <SkillBar skill="Docker" points={4}/>
                        <SkillBar skill="Gamemaker" points={4}/>
                        <SkillBar skill="Git/Gitlab" points={5}/>
                        <SkillBar skill="Gitlab CI/CD" points={3}/>
                        <SkillBar skill="Google Cloud Platform" points={4}/>
                        <SkillBar skill="MongoDB" points={2}/>
                        <SkillBar skill="NGINX" points={2}/>
                        <SkillBar skill="RabbitMQ" points={2}/>
                        <SkillBar skill="RPG Maker VX Ace" points={5}/>
                        <SkillBar skill="Unity" points={5}/>
                        <SkillBar skill="Unreal" points={2}/>
                    </table>
                </div>
            </div>

            <div style={divStyle}>
                <p style={subtitleStyle}>1-5 ranges from 1 = not comfortable, 3 = usable skills, and 5 = comfortable using</p>
            </div>

        </div>
    )
}

export default JoshScreen;
