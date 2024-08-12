import React from 'react';

// Components
import ContentSection from "../../components/ContentSection";
import ProjectLogistics from "../../components/ProjectLogistics";

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function RDRReflection(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#606c38"
    }

    let subtitleStyle = {
        fontSize: "16px",
        fontStyle: "italic",
        color: "#606c38"
    }

    let pStyle = {
        fontSize: "16px"
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
        justifyContent: "space-evenly"
    }

    return (
        <div>
            {/* Reflection */}
            <ContentSection
                heading="Rainy Dawg Radio Technology Manager"
                content=""
                src="images/rdrlogo.png"
            />

            <ProjectLogistics
                team1name="Staff 2018-2019"
                team1="Sami Shaffer (General Manager), Tavo O'Connell (Assistant Manager), Joshua Maza (Technology Manager), Chelsea Rodgers (Music Director), Mary Hale (Promotions Coordinator)"
                team2name="Staff 2019-2020"
                team2="Max Bryla (General Manager), Jules Travis (Assistant Manager), Joshua Maza (Technology Manager), Elliott Hansen (Music Director), Devon Pimentelli (Promotions Coordinator)"
                scope="Web Development, Audio Hardware/Software, PA Systems and Live Mixing, Event Production"
                time="Sept 2018 - Present"
                tools="JS, HTML, CSS, WordPress, React, LAMP Stack (Linux, Apache, MySQL, PHP), Heroku, NodeJS, PlotlyJS, Firebase"
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Experience Glossary</h1>
                    <ol style={pStyle}>
                        <li style={liStyle}><b>Rainy Dawg Radio (ASUW)</b> - What is Rainy Dawg Radio and ASUW?</li>
                        <li style={liStyle}><b>Studio</b> - Managing audio hardware, software, and educating DJs</li>
                        <li style={liStyle}><b>Traffic Tracker</b> - Analyzing listener activity trends to maximize retention</li>
                        <li style={liStyle}><b>Event Production</b> - Finding venues, booking artists, and running promotion</li>
                        <li style={liStyle}><b>Website</b> - Consolidating our data into a tool for the community</li>
                        <li style={liStyle}><b>Music Management System</b> - Building a lasting music database</li>
                        <li style={liStyle}><b>Takeaways</b> - Lessons I learned from this experience</li>
                    </ol>
                </div>
            </Fade>



            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Associated Students at the University of Washington (ASUW)</h1>
                    <p style={pStyle}>The Associated Students of the University of Washington (ASUW) is as a nonprofit
                    that acts as the undergraduate student government on the University of Washington campus in Seattle.
                    The structure of ASUW is a complex composition of government, corporation, advocacy, and programming
                    elements which have been created and modified by thousands of students over more than a hundred years.
                    The ASUW works closely with the Student Advisory Office (SAO) and the Graduate and Professional Student
                    Senate GPSS in providing services for not only undergraduates but also clubs and graduate students.
                    You can also learn more at <a href="www.asuw.org">www.asuw.org</a>.</p>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Rainy Dawg Radio (RDR)</h1>
                    <p style={pStyle}>Rainy Dawg Radio is a non-profit radio station staffed and operated by students at the
                    University of Washington. Though the station focuses on providing quality and diverse programming for the
                    University community, its reach is global, and anyone, worldwide, can tune in to our live stream at <a href="www.rainydawg.org">www.rainydawg.org</a>.

                    The station is an enterprise of the Associated Students of the University of Washington, and was founded in
                    2001 to create an educational outlet for students at the UW interested in the broadcast and music industries,
                    as well as providing entertainment for UW students, staff, and faculty.

                    Since its inception, Rainy Dawg has stayed on the cutting edge of broadcast technology, and worked hard to
                    integrate itself into the UW and Seattle music communities. The station has also sponsored a number of
                    highly-successful on-campus events—often in collaboration with other ASUW entities and enterprises—bringing
                    national and local talent to the campus for one-of-a-kind performances.</p>
                </div>
            </Fade>


            <ContentSection
                heading="Studio"
                subheading="Managing audio hardware, software, and educating DJs"
                content="The primary role of the job was to understand the studio's hardware and accompanying software, maintain 
                the overall system, and look for ways to improve and replace various devices. By far learning the hardware
                was the most difficult part because every studio is different, and early issues taught me valuable 
                troubleshooting skills I still maintain today."
                content2="A second half of the job was understanding the studio well enough to summarize it and teach DJs 
                on its use. I've taught over 100 DJs, wrote guides, and even left my number in the studio to be on call to
                maintain the 24/7 broadcast we maintain during the school year. I learned how to be more thoughtful about
                teaching, which included knowing what to exclude and how to best help students retain knowledge."
                src="images/rdr/studio.jpg"
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Traffic Tracker</h1>
                    <p style={subtitleStyle}>Analyzing listener activity trends to maximize retention</p>
                    <p style={pStyle}>Another part of this role was constantly adapting to meet our station's needs. One of those needs
                    was to better understand our stream numbers. The current system only allowed us to view how many listeners
                    were listening at a given time, but we needed a way to understand its change over time.</p>
                    <p style={pStyle}>I learned how to schedule scripts with Heroku scheduler to fetch our data, record into a firebase database
                    and read it out again to create an interactive graph with plotly. Showing it to my coworkers allowed us to
                    match listener retention to the particular DJ's show content to get a better picture of what retains listeners
                    and what doesn't. An unexpected but useful nuance came in the form of observing the changes in listeners between
                    DJ shows rather than during, indicating that the transition time between shows was a potential area for improvement.</p>
                </div>
            </Fade>

            <ContentSection
                heading="Event Production"
                subheading="Finding venues, booking artists, and running promotion"
                content="Ultimately Rainy Dawg provides programming for students, and another way we do this is through event production.
                Over 2 years, I've worked with multiple teams of staff to help create and promote 10+ music events for the UW campus. It involved
                working within ASUW rules to book venues and artists, promoting the actual event, and sometimes collaborating with other organizations."
                content2="One invaluable takeaway after going through the planning and execution process multiple times, is knowing what steps are needed
                and in what order to produce an event. I learned a lot about teamwork and taking risks, and how to deal with unexpected problems. Issues 
                I never even thought of like having water for artists, especially singers, or the fact that venues might not have a ramp, along with
                lessons you can only gain by doing it provided me an invaluable experience in event production."
                src="images/rdr/bday2019.jpg"
            />

            <Fade>
                <div style={flexboxStyle}>
                    <img src="images/rdr/locallysourced.jpg" style={imgStyle} />
                    <img src="images/rdr/guyaba.jpg" style={imgStyle} />
                    <img src="images/rdr/console.jpg" style={imgStyle} />
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Website</h1>
                    <p style={subtitleStyle}>Consolidating our data into a tool for the community</p>
                    <p style={pStyle}>One of the most impactful projects I completed was building a more modern website for our station.
                    Previously, we were restricted by Wordpress themes, which held back our station because it relied on
                    derelict plugins and undocumented internal tools by past technology managers. Additionally, our station spread itself
                    over multiple platforms for social media, blogging, and programming content such that our audience often were not
                    aware of all the events that were happening.</p>
                    <p style={pStyle}>To solve this, I created a web application that sources from all our platforms and places it in a single
                    site. It summarizes DJ shows and profiles, blog articles, upcoming events, ways to get involved, and contact information
                    for our staff. I'm particularly proud of this project because I see it as having the most impact, and it forced me outside
                    my comfort zone for programming. Initially this project took a while because while I knew basic web development, I knew
                    many of the features I wanted would be made easier with React. It was something I was meaning to learn for a while and this
                was the perfect opportunity to apply my knowledge.</p>
                </div>
                <img src="images/rdr/websitedemo.gif" style={imgStyle} />
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Music Management System</h1>
                    <p style={subtitleStyle}>Building a lasting music database</p>
                    <p style={pStyle}>One of the toughest issues with new radio stations is the curation of music and the appropriate copyright
                    laws to stream them. Without knowing what, when, and how songs are being played makes it troublesome to accurately
                    report numbers for artists to collect streaming revenue. Our station already uses Spinitron, a service for tracking
                    the music we play, however the source of that music was a grey area and a potential area for improvement.</p>
                    <p style={pStyle}>To solve this, I initially created a database with MySQL, with a basic applicatino for people to update it with
                    PHP, JS, HTML, and CSS, however I realized the issue ran much deeper. There were two halves of this problem, one
                    was physically storing the music somewhere legally, and the other was having the rights to store, and then stream that
                    song.</p>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Takeaways</h1>
                    <p style={pStyle}><b>Document your problems</b></p>
                    <p style={pStyle}>Troubleshooting problems was a huge part of this job. Whether it was something failing in the studio,
                    website issues, or sound system issues, there were so many times where I didn't know how to solve a problem. Documenting
                    them, which means writing down the problem, symptoms, the solution, as well as how I got there was so valuable for figuring
                    out other issues. It made me internalize how technology worked, the sources and signs of problems, and how I can navigate
                    related problems given similar technology or symptoms. Additionally, it leaves behind documentation for your successor
                    to use to maintain your systems, promoting its longevity.</p>
                    <br />
                    <p style={pStyle}><b>Long term projects need third party accountability</b></p>
                    <p style={pStyle}>Personally I struggled with long term projects in this job because there was low risks and expectations.
                    Much of my work was improving on existing systems, not solving a major time sensitive problem. The lack of risk and expectations,
                    and my priorities as a student often allowed projects to stretch on far too long. I learned that personally, I need to have
                    accountability with someone who isn't myself because I realized it was very easy to morph my internally set deadlines to fit
                    my schedule. That temptation lead to less productivity, and could have easily been fixed by setting up more accountability.</p>
                    <br />
                    <p style={pStyle}><b>Take breaks when you're stuck on a problem</b></p>
                    <p style={pStyle}>One of the most stressful problems I've ever faced in this job was when the studio failed. It was so stressful
                    because without a working studio, none of the 100+ volunteers could do their show. It was very demoralizing and humiliating to have
                    to tell people that they could not have their show because of an issue in the studio that I haven't fixed yet. Because of that
                    pressure, I brute forced troubleshooting until it worked, often for hours in a row way past what I was hired to do. Maybe it was
                    my initial unfamiliarity with audio hardware, but it was a trial by fire to fix studio issues.</p>
                    <p style={pStyle}>It was inevitable that the troubleshooting was running into my lectures. Being forced to take a break made me
                    realize that it can help solve issues. Sometimes, especially with physical audio hardware, issues sometimes just fix themselves.
                    But beyond luck, I learned that approaching problems with a clear, reset mind, was more efficient and less stressful than
                    taking it all at once. I learned to apply this to my daily life by sleeping on problems, which has overall improved my ability
                    to problem solve.</p>
                </div>
            </Fade>
        </div>
    )
}

export default RDRReflection;