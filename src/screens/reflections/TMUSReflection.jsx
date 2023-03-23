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
        color: "#ED6167"
    }

    let subtitleStyle = {
        fontSize: "30px",
        color: "#ED6167"
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
                heading="TechX Software Engineer Internship"
                content=""
                src="images/tmobilelogo.jpg"
            />

            <Fade>
                <ProjectLogistics
                    team1name="Product & Technology"
                    team1="Mike Muscato (Manager), Scott Granger (Manager)"
                    team2name="Interns"
                    team2="Joshua Maza (TechX Intern)"
                    scope="Full-stack Web Development, Test Automation"
                    time="Oct 2020 - June 2021"
                    tools="Vue, Laravel, Docker, Jira, Gitlab, PHPStorm"
                />
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <p style={subtitleStyle}>Here are a few lessons I learned during this experience</p>
                    <p style={pStyle}><b>Knowing when and how to ask for help</b></p>
                    <p style={pStyle}>This is by far the biggest lesson I've learned and struggled with daily. I
                        strongly believe in the idea that a struggle is healthy, because it indicates that one is in a
                        challenging situation, and challenging situations are opportunities to develop grit and grow.
                        How do I know when I have struggled enough? Or how do I know that I'm in a blocked situation
                        and I need outside help? These were questions I grappled with, and had to answer for myself
                        in order to do my job effectively. I learned to humble myself and accept that my determination
                        and ego in this context is a potential pitfall, because struggling way longer than I need to is
                        not me proving my determination, it's actually wasting time. It is more effective to simply ask
                        for help because it can solve problems faster. I've had to greatly reduce my threshold of time
                        spent before reaching out for help, and I learned what a blocker actually is and where I might
                        find them. Overall, at least in my current team dynamic, I've struck a good balance between
                        asking too many questions and not reaching out enough at the right moments.</p>
                    <br />
                    <p style={pStyle}><b>Navigating large existing community of engineers, systems, and code bases effectively</b></p>
                    <p style={pStyle}>A work environment that was completely new to me was the sprawling network that is
                    T-Mobile. There were several practices I had to learn for interacting with others (especially remotely)
                    across Jira, Gitlab, and Slack. Things like intentionally reaching out to the right people, building
                    relationships, and learning who does what and owns which applications were important lessons that didn't
                    exist in my previous experiences. It was interesting seeing the moving pieces from individual contributors
                    to managers and directors, and where I fit in to the overall picture. Lastly, it tied together for
                    navigating unknown pieces of code, because my internal map of my organization enabled me to know
                    who to go to for help with particular problems. Previously this networking piece was missing from my
                    problem solving process, however after practicing it at T-Mobile it has since become more natural.</p>
                    <br />
                    <p style={pStyle}><b>The best solution isn't necessarily the best solution</b></p>
                    <p style={pStyle}>This takeaway is a key difference between smaller teams and larger teams. Every problem
                        has multiple solutions, and what is the best to me might not be the best for my context, which involved
                        other team members and applications. There were several problems I had to solve where I couldn't solve
                        it in the "best" way because there would be downstream impacts. It resulted "duct-taped solutions" sometimes
                        being better in that moment because a true, higher quality solution would actually break more things
                        than it would solve. Coming from a background of personal projects and smaller teams. I initially felt
                        frustrated when I had to implement solutions that didn't necessarily fix the root cause or was a true solution,
                        but through experience and watching others, I realized that this is how it sometimes might be when
                        teams and projects get too large. In other words, larger teams with business and stakeholder pressure
                        have the potential to build up these restrictions because other priorities like time, cost, and speed
                        end up deprioritizing things like quality. The best solution in an engineering perspective isn't
                        necessarily the best solution from a business perspective, and it was in those moments where they
                        didn't align where I was learning that the best solution isn't necessarily the best solution.
                    </p>
                </div>
            </Fade>

        </div>
    )
}

export default TMUSReflection;
