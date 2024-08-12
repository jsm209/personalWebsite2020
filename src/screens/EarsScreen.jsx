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
        color: "#606c38",
        paddingLeft: "15%",
        paddingTop: "50px"
    }

    let pStyle = {
        fontSize: "16px",
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
            <ContentSection
                heading="Emerald Noise"
                subheading="Producer and Mixing Engineer"
                content="'Emerald Noise is an online business I started in 2024 for providing production and mixing services, as well as providing consultation and lessons. It started from helping out friends to now serving a growing clientbase of other musicians. As of now due to my schedule and workload, it is not open to the public yet but will be in the near future."
                src="images/joshua2.jpg"
            />
{/* 
            <ContentSection
                heading="Rising Sons"
                subheading="Recording, Producer, and Mixing Engineer"
                content="'Rising Sons' is an upcoming music collective I started in early 2020 that consists of myself and a group of vocalists. Combining our backgrounds in rap, hip-hop, pop, and EDM, we aim to produce the next wave of Asian and American pop-culture music."
                src="images/risingsonslogo.jpg"
            /> */}

            <ContentSection
                heading="MAZAA"
                subheading="EDM DJ/Producer"
                content="'MAZAA' is my personal music brand. For the past 7 years I have been self learning and built foundation in music production through online classes, YouTube, and meeting other producers and mixing engineers in Seattle. Below you can find a bit of my discography. For more, visit my Soundcloud profile."
                src="images/mazaalogo.png"
            />
            <Fade>
                <h1 style={titleStyle}>LGCY (2021-2024)</h1>
                <p style={pStyle}>In January 2021, I joined a local Seattle based electronic music collective called LGCY.
                    It was dedicated to producing memories and carving legacies for others through various forms of creative
                    arts and media. Founded and rooted from Asian American identities, we strived to empower representation
                    and motivate Asian Americans to follow their creative aspirations.</p>

                <p style={pStyle}> Consisting of DJs, music producers, graphic artists, and other community members,
                    LGCY produced events, most of which are music charity events raising money for causes from COVID-19
                    to addressing racial inequality and awareness. We partnered with other music collectives like Scrubs \
                    Collective in Hawaii, Pastel, and BTO in California to empower small and local music artists.</p>

                 <p style={pStyle}> Through LGCY I've had the opportunity to DJ at nearly all the major venues and clubs
                 in Seattle. I've also been so fortunate and thankful to have the support of so many friends in the creative
                 industry to help me with booking, photography, and media. Below are the most notable events I've performed 
                 at, mainly as an opener for various Seattle tour stops for some of my biggest music inspirations:</p>
                 
                 <div style={divStyle}>

                </div>


            </Fade>

            <Fade>
                <div style={divStyle}>
                    <ul>
                        <li>7/1/2024 - San Holo @ Hanger 30</li>
                        <li>4/5/2024 - Beauz @ Q Nightclub</li>
                        <li>3/15/2024 - Mitis @ Showbox Sodo</li>
                        <li>9/3/2023 - Sabai and Hoang @ Showbox Market</li>
                        <li>8/16/2023 - Bass Canyon Local Stage</li>
                        <li>7/27/2023 - JVNA @ Trinity</li>
                        <li>7/8/2023 - LGCY & Friends @ Neumos</li>
                        <li>3/11/2023 - Kaivon @ Showbox Sodo</li>
                        <li>7/15/2022 - Trivecta @ Neumos</li>
                        <li>7/14/2022 - LGCY & Friends @ Neumos</li>
                        <li>6/10/2022 - Crystal Skies @ Neumos</li>
                        <li>2/4/2022 - ARMNHMR @ Showbox Market</li>
                        <li><i>Also various club night gigs at local clubs.</i></li>
                    </ul>
                    <img src="images/lgcymedialogo.jpg" style={imgStyle} />
                    <img src="images/lgcyguestmixart.jpg" style={imgStyle} />
                </div>
                <div style={divStyle}>
                    <p>For more info about MAZAA or social media content, <a href="https://www.instagram.com/mazaa_music/" target="_blank">click here</a> to find my instagram.</p>
                    <p>Below are some examples of sets, <a href="https://soundcloud.com/mazaamusic/sets/mazaa-mixes" target="_blank">click here</a> to find other mixes on my Soundcloud page.</p>
                    <ReactPlayer url='https://soundcloud.com/mazaamusic/opener-set-kaivon-awakening-tour-hardwave-trap-dubstep?in=mazaamusic/sets/mazaa-mixes' width="100%" height="100px" />
                    <ReactPlayer url='https://soundcloud.com/mazaamusic/slope-bomber?in=mazaamusic/sets/mazaa-mixes' width="100%" height="100px" />
                    <ReactPlayer url='https://soundcloud.com/mazaamusic/reminiscence' width="100%" height="100px" />
                    <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-live-ep-003-journey-midtempofuture-bassdubstep-mix-of-armnhmr-illenium-seven-lions-porter-etc' width="100%" height="100px" />
                </div>
                
            </Fade>

            <Fade>
                <h1 style={titleStyle}>Recent Work</h1>
            </Fade>

            <div style={divStyle}>
                <p>Below are some examples of sets, <a href="https://soundcloud.com/mazaamusic/sets/mazaa" target="_blank">click here</a> to find my full discography.</p>
            </div>
            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/here-right-now' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-forget-the-world-chasing-cars?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/i-just-cant-stop-neyo-closer-remix-free-download?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-when-im-gone?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/noiseprn/mazaa-palisade-breached?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
            </div>
            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/exodia-mazaa-remix?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/noiseprn/mazaa-ft-katie-butler-helios?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-fade-away-laquana-party?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/beasttrap/mazaa-breathtaking?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/dont-look-down-mazaa-remix?in=mazaamusic/sets/mazaa' width="200px" height="200px" />
            </div>

            <ContentSection
                    heading="Kenopsia"
                    content="'Kenopsia' is defined as the eerie, forlorn atmosphere of a place that is usually bustling with people but is now abandoned 
                    and quiet. It captures the haunting feeling one may experience when in a space that was once filled with activity and life but is now 
                    deserted or abandoned. The term combines the Greek words 'keno,' meaning empty, and 'opsia,' meaning seeing or viewing.

                    In the context of my life, this EP draws inspiration from a past breakup and the ensuing challenges. The spaces that were once filled 
                    with life are both physically and emotionally empty, and I had to push myself to be whole again on my own. The somber mood of the EP is 
                    embodied by drawing on inspiration from personal identity experiences in my newly single and solo life, such as my trip to Korea, struggles 
                    with feeling out of place, and finding new belonging with friends again."
                    src="images/kenopsia.jpg"
            />

            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/hongdae-smoke?in=mazaamusic/sets/kenopsia' width="100%" height="100px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/ronin?in=mazaamusic/sets/kenopsia' width="100%" height="100px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/anachronism?in=mazaamusic/sets/kenopsia' width="100%" height="100px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/spark?in=mazaamusic/sets/kenopsia' width="100%" height="100px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/get-home-safe-without-you?in=mazaamusic/sets/kenopsia' width="100%" height="100px" />
            </div>

            <ContentSection
                    heading="Wayfarer"
                    content="'Wayfarer' is a 2 track electronic music EP I released in December of 2021 that combines into a seamless 
                    10 minute long listening experience. It is called Wayfarer because it has an overall theme of taking the listener 
                    on a journey through various BPMs and EDM inspired sections. It was also the first time I hired help for mastering
                    and started gaining experience and tutoring from working with mastering engineers."
                    src="images/wayfarer.jpg"
            />

            <div style={divStyle}>
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-vagabond?in=mazaamusic/sets/wayfarer' width="100%" height="100px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/mazaa-saga?in=mazaamusic/sets/wayfarer' width="100%" height="100px" />
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
                <ReactPlayer url='https://soundcloud.com/mazaamusic/rising-son' width="100%" height="100px" />
                <ReactPlayer url='https://soundcloud.com/mazaamusic/thrive' width="100%" height="100px" />
            </div>

            <ContentSection
                heading="Internship with Tyler Dopps"
                subheading="Pro Tools, Ableton"
                content="Following Beatmatch 2019, I got in touch with Tyler Dopps, one of the judges for Beatmatch 2019, and also the producer and mixing engineer for various Seattle talent like Macklemore, Travis Thompson, and Paris Alexa among others. The month long apprenticeship consisted of preparing mixes, learning about industry recording and studio technology, and meeting local producers and vocalists."
                src="images/tylerdopps.jpg"
                right={true}
            />
        </div>
    )
}

export default EyesScreen;
