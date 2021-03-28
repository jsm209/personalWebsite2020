import React from 'react';

// Components
import ContentSection from "../../components/ContentSection";
import ProjectLogistics from "../../components/ProjectLogistics";

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function ISBReflection(props) {

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
                heading="Software Engineering Internship"
                content=""
                src="images/isblogo.png"
            />

            <Fade>
                <ProjectLogistics
                    team1name="ISB Innovator 2019"
                    team1="Jacob Valenzuela (PM), Becky Howsmon (Educator), Jen Eklund (Educator), Lauren Bricker (Educator), Wei-Ju Wu (Engineer)"
                    team2name="Interns"
                    team2="Joshua Maza (Engineer), Jeremy Zhang (Engineer)"
                    scope="Game Development, Web Development, UI/UX Design, Research"
                    time="Sept 2019 - Present"
                    tools="JS, PhaserJS, React, HTML, CSS, MySQL, Python, Flask"
                />
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Experience Glossary</h1>
                    <ol style={pStyle}>
                        <li style={liStyle}><b>Institute for Systems Biology</b> - What is ISB?</li>
                        <li style={liStyle}><b>The Central Dogma Game</b> - Making education accessible</li>
                        <li style={liStyle}><b>Data Collection and Analysis</b> - Assessing knowledge and performance</li>
                        <li style={liStyle}><b>Takeaways</b> - Lessons I learned from this experience</li>
                    </ol>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Institute for Systems Biology (ISB)</h1>
                    <p style={pStyle}>ISB is the first ever institute dedicated to systems biology, which is an approach to
                    research that is holistic, collaborative, and spans multiple diciplines, and emphasizes <i>understanding
                    that the whole is greater than the sum of the parts.</i> ISB is a nonprofit biomedical research organization
                    that focuses on pressing issues in human health, such as brain health, cancer, aging, and infectious diseases.
                    It is an environment that fosters scientific collaboration stretched across diciplines inn order to produce
                    real world impact.</p>
                </div>
            </Fade>


            <ContentSection
                heading="The Central Dogma Game"
                subheading="Accessible way to learn DNA replication"
                content="This project specifically addresses the challenge of scalability in STEM education. A web-based game can 
                potentially teach core concepts to millions of students across the country and around the globe, particularly as 
                internet connectivity continues to rise. A free online game allows for access among all genders, races, and 
                economic backgrounds, especially in the US. Notably, the proposed framework engages scientists, educators, and 
                students across ISB, so that multiple perspectives can provide the best solutions to make sure the game is scalable, 
                accurate, and is in fact teaching core concepts."
                content2="This project originally started during the Summer of 2019, where the base of the game was built out
                by a previous full time intern. I later reached out, expressed interest in the project, and was brought on as
                an intern to pick up where the previous intern left off. Since then, I've redesigned nearly every aspect of the game
                from its menus, buttons, sprites, and sounds, and implemented many of my own features like scoring, leaderboards,
                quizzes, and gameplay interactions."
                src="images/cdg/concept.png"
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={subtitleStyle}>Lean Development</h1>
                    <p style={pStyle}>The main approach for this project was a lean development process of implementing features,
                    getting feedback, and iterating on our features, constantly adding things in and throwing things away until
                    the game worked. Through live feedback from users, surveys, and playtesting, the game naturally evolved
                    over the span of months to look entirely different from its initial concept.</p>

                    <p style={pStyle}>Below are some screenshots of various levels and screens within the game. What is pictured
                    is the final layout, which took several iterations to reach. In particular some of the factors I considered
                    for my design were:</p>

                    <ul>
                        <li style={pStyle}>Physical location of buttons
                            <i>(Can the player reach them, Will it hurt their finger or make it uncomfortable, etc.)</i>
                        </li>
                        <li style={pStyle}>Color relationship for elements to portray importance and relationship
                            <i>(For example, complementary colors were used to hint to the player proper nucleotide pairings.)</i>
                        </li>
                        <li style={pStyle}>Signifiers to communicate affordances for the player
                            <i>(Shapes, labels, icons, slight motion, screen effects, etc.)</i>
                        </li>
                    </ul>
                </div>
            </Fade>

            <Fade>
                <div style={flexboxStyle}>
                    <img src="images/cdg/gameplay.png" style={imgStyle} />
                    <img src="images/cdg/gameplay2.png" style={imgStyle} />
                    <img src="images/cdg/gameplay3.png" style={imgStyle} />
                </div>
            </Fade>


            <div style={divStyle}>
                <p style={pStyle}>The game was playtested by staff during an ISB retreat, by hand selected students from our
                education team, as well as at a TEALS conference where many high school students and kids were able to give
                direct feedback.
                </p>
            </div>

            <Fade>
                <div style={flexboxStyle}>
                    <img src="images/cdg/teals2.png" style={imgStyle} />
                    <img src="images/cdg/teals3.gif" style={imgStyle} />
                    <img src="images/cdg/teals4.png" style={imgStyle} />
                </div>
            </Fade>


            <ContentSection
                heading="Data Collection and Analysis"
                subheading="How do we assess whether there is a beneficial knowledge experience?"
                content2="Ultimately what we wanted to know how students performed before and after the game. I did this
                by implementing a login system, performance recording system, as well as a tool to analyze the results
                stored in our database."
                content="A second half to this project came in the form of data collection about player performance.
                We needed to collect data so we could determine if we were achieving our goal of making STEM education
                more accessible and scalable. The data could give insight into the viability of games as a tool to
                teach future topics. Additionally, I learned about how important funding is for research institutes
                and their projects, because a final reason why data is important is to prove to investors why this
                project provides value."
                src="images/cdg/gameplay3.png"
            />

            <ContentSection
                heading="Central Dogma Game API"
                subheading="Collaboration between front and back ends"
                content="I worked closely with a backend engineer to come up with specifications about the design of
                the database. We decided on the needs of the game, and how the API could be designed to supply that. I
                then implemented the interaction between the game and the API in the form of a login interface, and
                objects that store progress and performance. The overall impact is a collection of data that will provide
                us insight into the effectiveness of gaming as an unconvential educational tool, which can be used to guide
                future games."
                right={true}
            />

            <ContentSection
                heading="Database Tool"
                subheading="Data visualization and interactivity"
                content="I built a tool for data analysis through interactive graphs of various plots. I used HighCharts and wrangled
                data from snapshots exported from the database. The tool is made for educators to use to learn more about their
                classroom's performance. Additionally my boss can use it to analyze the whole data set to document and write in a research paper,
                which will further provide the company legitimacy for future funding. I learned that publishing papers and findings are 
                important in STEM research because it leads to more funding and future projects and can provide evidence that a 
                hypothesis has potential to be proven."
                src="images/cdg/databasetool1.PNG"
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Takeaways</h1>
                    <p style={pStyle}><b>Be thoughtful</b></p>
                    <p style={pStyle}>The amount of responsbility for this role initially gave me so much imposter syndrome. I felt
                    stressed, it was hard to take praise, and I always felt like the work I was doing was not good enough. It physically
                    manifested in the form of a lack of enthusiasm and an inability to voice my concerns, because I thought it was my job 
                    and that I should know how to do the things I was hired to do. I later realized that I should just
                    stop and think and take a step back to be more <i>thoughtful</i> about the entire situation. The praise from my boss,
                    the clear progress I was making, the fact that the internship was extended multiple times, and the pay raises are
                    all signs I was ignoring because I never stopped to just think about what I had to be thankful for. In other words,
                    during difficult times, focusing on the negative parts only is very draining and unnecessary. I eventually outgrew
                    the feeling, and I know how to overcome it now in the future.</p>
                    <br />
                    <p style={pStyle}><b>Multiply your time estimate by two</b></p>
                    <p style={pStyle}>Anytime my boss estimated how long something would take to do, or anytime I self estimated a task,
                    it almost always went over. At first I thought I was just extremely slow at my job, maybe it was my ego, but watching 
                    the professionals I was working with also experience the same mistake made me realize that estimating time based on 
                    how you feel is just not accurate because we sometimes overestimate ourselves. I learned to take uneducated estimates with an 
                    open mind, and grew honest about making longer estimations because it was better to be early than to be late, especially if I was
                    the one setting the deadline.</p>
                    <br />
                    <p style={pStyle}><b>Don't underestimate your work life relationships. Remote work requires an effort to build
                        relationships with your employer</b></p>
                    <p style={pStyle}>An aspect of work life I completely underestimated was the in-office relationships and culture
                    that I was missing out on by working remotely for a large amount of the time. Ultimately, the decision to allow
                    the position to be remote was for my own good, as it allowed me to study and work another part time job, however
                    it came at the cost of alienating myself from the typical worklife. Something I realized a bit too late was
                    that I should have a great relationship with my coworkers, and I should work to intentionally build them. A stigma
                    of work life I fell into was going in to get the job done and getting out, not paying attention to anything else.
                    I regret not building a stronger relationship with my boss and coworkers, so a clear, actionable takeaway is to
                    just be intentional about the people you have to work with.</p>
                    <p style={pStyle}> However, a second chance came in the form of the COVID-19 pandemic, where all ISB work was moved online and
                    made remote. It added the necessary infrastructure to help reconnect with coworkers in a more
                    accessible way.</p>
                </div>
            </Fade>
        </div>
    )
}

export default ISBReflection;