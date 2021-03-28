import React from 'react';

// Components
import ContentSection from "../../components/ContentSection";
import ProjectLogistics from "../../components/ProjectLogistics";

// other
import { AwesomeButton } from "react-awesome-button";
import Fade from 'react-reveal/Fade';

function PetraReflection(props) {

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
        width: "60%",
        margin: "auto"
    }

    let imgStyle = {
        height: "auto",
        width: "90%",
        margin: "auto",
        display: "block"
    }

    return(
        <div>
            {/* Reflection */}
            <ContentSection 
                heading="PETRA"
                content="PETRA is an bullet hell survival game centered around farming for upgrades for your character. It is an endless game full of randomized variables, such as the appearance of the map, locations of upgrades, and the enemies themselves."
                src="images/petralogo.png"
            />

            <ProjectLogistics
                team1name="Developers"
                team1="Joshua Maza"    
                scope="Game Development, Character and Level Design, Sprite Illustration and Animation"
                time="Aug 31 - Sept 7 (7 Days)"
                tools="Unity, Piskel"
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Project Glossary</h1>
                    <ol style={pStyle}>
                        <li style={liStyle}><b>Overview</b> - Ideating upon my creative restraints</li>
                        <li style={liStyle}><b>Resource Management</b> - Striking a balance between breathing and living</li>
                        <li style={liStyle}><b>Procedural Enemies</b> - Creating an ever adapting, scalable challenge</li>
                        <li style={liStyle}><b>Upgrading</b> - Building in game stats to grow the player</li>
                        <li style={liStyle}><b>Takeaways</b> - Lessons I learned from this project</li>
                    </ol>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Overview</h1>
                    <p style={pStyle}>The motivation for this project came from a 'Potluck Game Jam' 
                    which is where jammers can suggest themes to be added to a collection. Like most
                    game jam themes, they're supposed to be highly interpretable and are more of a prompt 
                    for creative ideation. The three randomly selected themes were <b>'breath', 'lasers', and 'random'</b>, which were the 
                    three main ideas my project revolves around. Naturally, I gravitate towards procedural 
                    and randomness in game design because I believe having healthy amounts of <b>unpredictability</b> is 
                    what makes games both fun to play for both players and designers.</p>
                </div>
            </Fade>

            <Fade>
                <div style={divStyle}>
                    <iframe
                        src={{margin: "auto"}} 
                        frameborder="0" 
                        src="https://itch.io/embed/480456?border_width=5&amp;bg_color=222222&amp;fg_color=eeeeee&amp;border_color=363636" 
                        width="216" 
                        height="175">
                            <a href="https://mazaa.itch.io/petra">PETRA by MAZAA</a>
                    </iframe>        
                </div>
            </Fade>

            <ContentSection 
                heading="Resource Management"
                subheading="Take a deep breath..."
                content="The vast majority of games present challenge through limited resources. Primarily 
                this means through variables like health, but I wanted to present additional challenge by incorporating 
                the creative restraint of 'breath'. Breath in this game is a constantly depleting resource for the player as 
                they run out of oxygen, which is unique because it motivates the player to move and explore the map, 
                a key driver for understanding and learning in PETRA."
                src="images/petragameplay/5.PNG"
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={subtitleStyle}>Balancing Difficulty</h1>
                    <p style={pStyle}>One concern of mine is that this would simply introduce contrived difficulty, so to prevent
                    a pain point I designed the map to be full of opportunities to replenish breath, as well as tested and relaxed 
                    the depletion rate of the mechanic. Additionally, there are upgrades in the game for the player to address this 
                    challenge themselves at their own will.</p>
                    <img style={imgStyle} src="images/petragameplay/1.PNG"/>
                </div>
            </Fade>


            <ContentSection 
                heading="Procedural Enemies"
                subheading="Believe it or not, rocks can be interesting"
                content="I purposely in good humor picked rocks to be the antagonist of my game because I wanted to challenge
                myself to give them personality beyond their stereotypical dullness. By giving them more character in the form
                of color, size, speed, and their movement animation, each enemy has a slightly unique personality, which is all
                generated on the fly."
                src="images/petragameplay/7.gif"
            />

            <ContentSection 
                heading=""
                subheading="Progressively more difficult"
                content="I wrote an algorithm to procedurally create enemies as the player is playing, in response to the player's
                progress. Depending on how much time has passed and which upgrades the player has bought, the enemies grow in stats
                like health, speed, and damage, which is reflected in their size and hue. The amount of enemies also slowly increases,
                resulting in a swarm-like rising threat that the player has to keep up with before eventually being overwhelmed."
                src="images/petragameplay/6.PNG"
                right={true}
            />

            <ContentSection 
                heading="Upgrading"
                subheading="Wandering merchants"
                content="One of the best things I love about games is character progression. In PETRA, the player grows by harvesting
                the drops from killing enemies, then finding the merchant for a particular upgrade somewhere in the map. Thanks to
                player exploration, the player should have a good idea of where to find these wandering merchants."
                src="images/petragameplay/10.gif"
            />

            <ContentSection 
                heading=""
                subheading="They drive a hard bargin"
                content="They randomly wander the map, but can generally be found in the north, south, east, and west directions in the map.
                They offer 4 ways for the player to grow; increasing how many lasers they can shoot, increasing their speed, or by increasing 
                their breath or health capacities. Upgrades also scale in price, doubling each time the player purchases it."
                src="images/petragameplay/2.PNG"
                right={true}
            />

            <Fade>
                <div style={divStyle}>
                    <h1 style={titleStyle}>Takeaways</h1>
                    <p style={pStyle}><b>Game balancing should not be left till the end</b></p>
                    <p style={pStyle}>Randomness is almost necessary for a game to be fun, but when taken to extremes such that
                    nearly all the elements of a game are unpredictable, turns randomness into a slippery slope. Complexity stacks quickly
                    and balancing randomness with scaling difficulty becomes a significant challenge. It is time consuming to
                    play test, and is often the result of an already embedded system which may need revision. Leaving this process
                    until the end limits how much one can balance these aspects, and was a mistake I made in development.</p>
                    <br />
                    <p style={pStyle}><b>Be mindful of assumptions you make about the player</b></p>
                    <p style={pStyle}>I made several assumptions about my user's understanding without properly giving them an introduction to
                    mechanics and a space to learn. The game dumps the player into the map after a very brief tutorial. Given my time constraints,
                    the short tutorial provided value, but for a longer game I need to be more mindful of my mechanics and how I introduce them
                    to the player. Improper preparation of the player results in unecessary frustration.</p>
                    <br />
                    <p style={pStyle}><b>Depth over breadth</b></p>
                    <p style={pStyle}>Reflecting on the game, the mechanics are quite disjointed and almost unrelated, and do not serve a
                    singly purpose, and are loosely held together under an afterthought of a theme (harvesting rock monsters on an 
                    oxygen deprived planet). The lack of cohesion is the result of <i>creep scope</i> because I wanted to include all these
                    mechanics in my game, and got carried away in them rather than solidifying foundational content like level or story design.
                    Game jam games aren't meant to have that depth, however if this were a bigger game project I might have to remove some
                    mechanics in exchange for more cohesion. I shouldn't be afraid of detaching myself from ideas I love, especially when
                    such short sightedness might bring down a game.</p>
                </div>
            </Fade>
        </div>
    )
}

export default PetraReflection;