import React from 'react';

// Components
import ContentSection from "../components/ContentSection";
import ReactPlayer from 'react-player'

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function EyesScreen(props) {

    let titleStyle = {
        fontSize: "40px",
        color: "#ED6167",
        paddingLeft: "15%",
        paddingTop: "50px"
    }

    let pStyle = {
        fontSize: "20px",
        paddingLeft: "15%",
        width: "70%"
    }

    let divStyle = {
        width: "70%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingTop: "25px",
        paddingBottom: "50px"
    }

    let reactPlayerStyle = {
        width: "80%",
        height: "100px"
    }

    let imgStyle = {
        width: "300px",
        height: "auto"
    }

    return (
        <div>
            {/* Eyes Page */}

            <Fade>
                <h1 style={titleStyle}>LGCY Core</h1>
                <p style={pStyle}>In January 2021, I joined a local Seattle based electronic music collective called LGCY.
                    is dedicated to producing memories and carving legacies for others through various forms of creative
                    arts and media. Founded and rooted from Asian American identities, we strive to empower representation
                    and motivate Asian Americans to follow their creative aspirations.</p>

                <p style={pStyle}> Consisting of DJs, music producers, graphic artists, and other community members,
                    LGCY produces events, most of which are music charity events raising money for causes from COVID-19
                    to addressing racial inequality and awareness. We partner with other music collectives like Scrubs \
                    Collective in Hawaii, and Pastel and BTO in California to empower small and local music artists.</p>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <img src="images/lgcymedialogo.jpg" style={imgStyle} />
                    <img src="images/lgcyguestmixart.jpg" style={imgStyle} />
                </div>
                <div style={divStyle}>
                    <ReactPlayer url='https://soundcloud.com/lgcymedia/mazaafm' width="100%" height="150px" />
                </div>
            </Fade>

            <Fade>
                <h1 style={titleStyle}>Emerald Noise 2020</h1>
                <p style={pStyle}>In May 2020, I organized and produced an online music event for charity,
                raising nearly $1k in donations while supporting local musicians. Through a combination
                of marketing efforts, targeted ads, and word of mouth, a lineup of 9 artists (including myself)
                attracted hundreds of people online for a 6 hour EDM event. I practiced event production, marketing,
                and graphic design skills to ultimately donate all the proceeds to Direct Relief's COVID-19 relief fund.</p>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <img src="images/emeraldnoiseposter2020.png" style={imgStyle} />
                    <img src="images/emeraldnoisestats2020.png" style={imgStyle} />
                </div>
            </Fade>


            <ContentSection
                heading="Beatmasters by 206 Zulu"
                content="206 Zulu is a Seattle based non-profit organization located in historic Washington Hall that
                    works to preserve, elevate and celebrate Hip Hop culture while providing accessible spaces for the
                    arts and community organizing. They host an annual competition for 16 producers to apply to compete in a bracket
                    competition. For 2020, they opened it up to the entire Pacific Northwest (traditionally only Seattle based),
                    and I applied and got invited to compete, beating the majority of producers and placing 3rd overall."
                src="images/beatmasters2020.jpg"
            />

            <ContentSection
                heading="Beatmatch by do206"
                content="'Beatmatch' is an all annual ages local production competition in Seattle aimed at empowering
                    producers regardless of their background. Over a hundred producers apply every year, and styles range
                    from electronic to rap and hiphop, however they only accept 8 producers to compete in a bracket. The competition
                    consists of producing music to play for a crowd of 400+ people and a panel of judges where you only advance
                    by audience and judge vote. For the past two years I applied and got invited both years to compete.
                    Below you can find both of my submissions for 2019 and 2020."
                src="images/beatmatch2020.png"
            />
            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/rising-son' width="100%" height="150px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/thrive' width="100%" height="150px" />
            </div>

            <ContentSection
                heading="Internship with Tyler Dopps"
                subheading="Pro Tools, Ableton"
                content="Following Beatmatch 2019, I got in touch with Tyler Dopps, one of the judges for Beatmatch 2019, and also the producer and mixing engineer for various Seattle talent like Macklemore, Travis Thompson, and Paris Alexa among others. The month long apprenticeship consisted of preparing mixes, learning about industry recording and studio technology, and meeting local producers and vocalists."
                src="images/tylerdopps.jpg"
                right={true}
            />

            <ContentSection
                heading="Rising Sons"
                subheading="Recording and Mixing Engineer"
                content="'Rising Sons' is an upcoming music collective I started in early 2020 that consists of myself and a group of vocalists. Combining our backgrounds in rap, hip-hop, pop, and EDM, we aim to produce the next wave of Asian and American pop-culture music."
                src="images/risingsonslogo.jpg"
            />

            <ContentSection
                heading="MAZAA"
                subheading="FL Studio 12, FL Studio 20"
                content="'MAZAA' is my personal music brand. For the past 4 years I have been self learning and built foundation in music production through online classes, YouTube, and meeting other producers and mixing engineers in Seattle. Below you can find a bit of my discography. For more, visit my Soundcloud profile."
                src="images/mazaalogo.png"
            />

            <Fade>
                <h1 style={titleStyle}>Recent Work</h1>
            </Fade>

            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/lgcymedia/mazaa005' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/yami_produces/mazaa-x-yami-carousel' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/from-you' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/cant-stay-here' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/never-gone-1' width="200px" height="200px" />
            </div>
            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/dearly-beloved' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/ekali-runaway-ft-reo-cragun-mazaa-remix' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/the-glitch-mob-how-could-this-be-wrong-mazaa-remix' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/tungevaag-raaban-all-for-love-mazaa-remix' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/galantis-spaceship-mazaa-remix' width="200px" height="200px" />
            </div>

            <ContentSection
                heading="Late Bloomer"
                content="'Late Bloomer' is a 10 track electronic album I released in February of 2019. The goal of this project
                    was to capture my adolescence as both a new producer as well as my experiences in high school. Personally, I often
                    turn to music as a channel to vent emotions, and the stress of moving to a new city for high school, as well as
                    engaging with the rigor of the IB program led to the creation of tracks that reflected those events as well as my growth
                    as a producer."
                src="images/latebloomer.png"
            />

            <ContentSection
                heading="hibiscus"
                content="'hibiscus' is a 10 track lofi/chill beats album I released in December of 2019. Like many artists, music for me
                    is a reflection of life experiences. I stumbled on some old voice recordings, pictures, and videos of past, long gone relationships,
                    and took inspiration and samples from them to piece together an album that represents my personality and general mood about relationships in general."
                src="images/hibiscus.png"
            />

            <Fade>
                <h1 style={titleStyle}>Live Mixes</h1>
                <p style={pStyle}>I have three years of DJing experience for various nightclubs and events in Seattle. Below you can find some recently recorded sets I have performed for live audiences.</p>
            </Fade>
            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/pursuit-of-happiness-set' width="300px" height="300px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-rscc-set' width="300px" height="300px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/emerald-noise-2020-mazaa-set' width="300px" height="300px" />
            </div>

            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/reminiscence' width="300px" height="300px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-live-ep-003-journey-midtempofuture-bassdubstep-mix-of-armnhmr-illenium-seven-lions-porter-etc' width="300px" height="300px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/vigor-set' width="300px" height="300px" />
            </div>

        </div>
    )
}

export default EyesScreen;
