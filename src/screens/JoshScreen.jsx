import React from 'react';

// Components
import ContentSection from "../components/ContentSection";
import SkillBar from "../components/Skillbar";
// import SkillPieChart from "../components/SkillPieChart";

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
                engineering and music production, and  love to learn and apply myself
                in original and challenging personal projects.
                Whether it be through creating web apps, developing games, or
                producing music, impact and accessibility are always values at
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
                    <li style={pStyle}>Majoring in Informatics / Minoring in Entrepreneurship</li>
                    <li style={pStyle}>Currently interning at <i>T-Mobile</i>,
                         as a <b>TechX SDE Intern</b> since October 2020.</li>
                    <li style={pStyle}>Interned at <i>The Institute for Systems Biology</i>,
                        a biotech research company as a <b>software engineer</b> for 1 year.</li>
                    <li style={pStyle}>Worked as a <b>Technology Manager</b> for a
                    student ran internet based radio station for 2 years.</li>
                    {/*  where
                    I managed several online streams, servers, websites, and databases
                    as well as handled audio hardware, PA setups, and live mixing. */}
                    {/* in Seattle where I worked with a team of biologists
                    and software developers to create an accessible <b>educational web game</b> about DNA replication. */}

                    {/* Hopes to start a game development company dedicated to furthering
                    gaming accessbility through VR or other creative mediums. */}
                    <li style={pStyle}>Currently developing a <b>commercial game</b> as a solo indie game developer.</li>
                    <li style={pStyle}>Produces <b>EDM, rap and pop,</b> and <b>DJs</b> EDM music in clubs and online charity events.</li>
                </ul>
            </div>

            <div style={divStyle}>
                <h1 style={titleStyle}>// goals</h1>
                <ul>
                    <li style={pStyle}>(Short-Term) Get a job as a software engineer/developer or game developer.</li>
                    <li style={pStyle}>(Short-Term) Do a marathon (I'm an avid runner!)</li>
                    <li style={pStyle}>(Short-Term) Plan and produce a small-medium sized live EDM music event</li>
                    <li style={pStyle}>(Long-Term) Create some kind of business or startup</li>
                    <li style={pStyle}>(Long-Term) Create a dedicated game development startup focused on accessibility in unique games</li>
                    <li style={pStyle}>(Long-Term) Build a personal music studio in Seattle to help produce/mix/master music for local artists</li>
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
                        <SkillBar skill="Laravel" points={3}/>
                        <SkillBar skill="MySQL" points={4}/>
                        <SkillBar skill="NodeJS" points={3}/>
                        <SkillBar skill="PhaserJS" points={4}/>
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
                        <SkillBar skill="AWS" points={2}/>
                        <SkillBar skill="Azure" points={1}/>
                        <SkillBar skill="Docker" points={4}/>
                        <SkillBar skill="Gamemaker" points={4}/>
                        <SkillBar skill="Git" points={5}/>
                        <SkillBar skill="Google Cloud Platform" points={5}/>
                        <SkillBar skill="MongoDB" points={2}/>
                        <SkillBar skill="NGINX" points={2}/>
                        <SkillBar skill="RabbitMQ" points={2}/>
                        <SkillBar skill="RPG Maker VX Ace" points={5}/>
                        <SkillBar skill="Unity" points={5}/>
                        <SkillBar skill="Unreal" points={2}/>
                    </table>
                </div>
                <div>
                    <p style={pStyle}>Concepts</p>
                    <table>
                        <SkillBar skill="Accessible Design" points={5}/>
                        <SkillBar skill="Agile Development Practices" points={5}/>
                        <SkillBar skill="Client Side Development" points={5}/>
                        <SkillBar skill="Graphic Design" points={4}/>
                        <SkillBar skill="Server Side Development" points={3}/>
                        <SkillBar skill="User Centered Design" points={5}/>
                        <SkillBar skill="Websockets" points={3}/>
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
