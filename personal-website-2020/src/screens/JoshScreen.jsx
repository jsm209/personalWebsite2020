import React from 'react';

// Components
import ContentSection from "../components/ContentSection";
import SkillBar from "../components/Skillbar";


function JoshScreen(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#23EDEC"
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
                content="Hi, I'm Josh and I'm a student at the University 
                Of Washington currently majoring in Informatics* and
                minoring in Entrepreneurship. 
                I'm passionate about web and game development, as well as audio 
                engineering and music production. I strive to pursue projects 
                that combine my passions in innovative applications. Whether 
                it be through creating web apps, developing games, or 
                producing music, impact and accessibility are always values at 
                the forefront of my creative process. Through my passions, I 
                hope to grow in my technical skills and create intentional and 
                universal experiences for all users."
                src="images/joshua.jpg"
            />

            <div style={divStyle}>
                <p style={subtitleStyle}>*Informatics is the study of information. My degree path focuses on software engineering and data science.</p>
            </div>
            

            <span className="ti-github"></span>

            <div style={divStyle}>
                <h1 style={titleStyle}>// about me</h1>
                <ul>
                    <li style={pStyle}>Majoring in Informatics / Minoring in Entrepreneurship</li>
                    <li style={pStyle}>Worked as a <b>Technology Manager</b> for a 
                    student ran internet based radio station for 2 years.</li>
                    {/*  where 
                    I managed several online streams, servers, websites, and databases
                    as well as handled audio hardware, PA setups, and live mixing. */}
                    <li style={pStyle}>Interned at <i>The Institue for Systems Biology</i>,
                    a biotech research company as a <b>software engineer</b> for 1 year.</li>
                    {/* in Seattle where I worked with a team of biologists
                    and software developers to create an accessible <b>educational web game</b> about DNA replication. */}
                    <li style={pStyle}>Aspiring entrepreneur, keen on starting a venture within the next year.</li>
                    {/* Hopes to start a game development company dedicated to furthering 
                    gaming accessbility through VR or other creative mediums. */}
                    <li style={pStyle}>Currently developing a <b>commercial game</b> as a solo indie game developer.</li>
                    <li style={pStyle}>Produces <b>EDM, rap and pop,</b> and <b>DJs</b> music.</li>
                </ul>
            </div>

            <div style={divStyle}>
                <h1 style={titleStyle}>// skills</h1>
            </div>
            
            <div style={skillsFlexbox}>
                <div>
                    <p style={pStyle}>Languages and Frameworks</p>
                    <table>
                        <SkillBar skill="Bootstrap" points={5}/>
                        <SkillBar skill="C#" points={3}/>
                        <SkillBar skill="Golang" points={4}/>
                        <SkillBar skill="HTML" points={5}/>
                        <SkillBar skill="Java" points={5}/>
                        <SkillBar skill="JavaScript" points={5}/>
                        <SkillBar skill="MySQL" points={4}/>
                        <SkillBar skill="NodeJS" points={3}/>
                        <SkillBar skill="PhaserJS" points={4}/>
                        <SkillBar skill="Python" points={3}/>
                        <SkillBar skill="R" points={4}/>
                        <SkillBar skill="React" points={5}/>
                    </table>
                </div>
                <div>
                    <p style={pStyle}>Tools</p>
                    <table>
                        <SkillBar skill="AWS" points={5}/>
                        <SkillBar skill="Azure" points={3}/>
                        <SkillBar skill="Docker" points={3}/>
                        <SkillBar skill="Gamemaker" points={4}/>
                        <SkillBar skill="Git" points={5}/>
                        <SkillBar skill="Google Cloud Platform" points={3}/>
                        <SkillBar skill="MongoDB" points={3}/>
                        <SkillBar skill="NGINX" points={2}/>
                        <SkillBar skill="RabbitMQ" points={3}/>
                        <SkillBar skill="RPG Maker VX Ace" points={5}/>
                        <SkillBar skill="Unity" points={4}/>
                        <SkillBar skill="Unreal" points={2}/>
                    </table>
                </div>
                <div>
                    <p style={pStyle}>Concepts</p>
                    <table>
                        <SkillBar skill="Accessible Design" points={5}/>
                        <SkillBar skill="Graphic Design" points={4}/>
                        <SkillBar skill="Server Side Development" points={4}/>
                        <SkillBar skill="User Centered Design" points={5}/>
                        <SkillBar skill="Web Development" points={5}/>
                        <SkillBar skill="Websockets" points={3}/>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default JoshScreen;