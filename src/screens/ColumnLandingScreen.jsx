import React from 'react';

function ColumnLandingScreen() {

    let titleStyle = {
        fontSize: "40px"
    }

    let h2Style = {
        fontSize: "32px"
    }

    let h3Style = {
        fontSize: "16px",
        paddingLeft: "40px"
    }


    let pStyle = {
        fontSize: "16px"
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

    let sectionStyle = {
        paddingTop: "20px",
        paddingBottom: "20px"
    }

    return(
        <div style={divStyle}>
            <section style={sectionStyle}>
                <span style={pStyle}>Hello! I'm </span><span style={titleStyle}>Joshua Maza </span><span style={pStyle}> and I'm a creative UI/UX focused software engineer!</span>
            </section>

            <section style={sectionStyle}>
                <span style={h2Style}>EYES </span><span style={pStyle}>technical engineering work experience with both iOS and web</span>
                <h3 style={h3Style}>Self Published Apple Store Apps (iOS)</h3>
                <h3 style={h3Style}>T-Mobile Software Engineer (iOS)</h3>
                <h3 style={h3Style}>T-Mobile Software Engineer (Web)</h3>
                <h3 style={h3Style}>Institute for Systems Biology (Web)</h3>
            </section>

            <section style={sectionStyle}>
                <span style={h2Style}>EARS </span><span style={pStyle}>Audio engineering and music production projects and work experience</span>
                <h3 style={h3Style}>Emerald Noise Studio Mixing and Production Business</h3>
                <h3 style={h3Style}>Assorted Single Releases</h3>
                <h3 style={h3Style}>Live Show Performance (DJing)</h3>
                <h3 style={h3Style}>Kenopsia EP</h3>
                <h3 style={h3Style}>Wayfarer EP</h3>
                <h3 style={h3Style}>Late Bloomer Album</h3>   
            </section>

            <section style={sectionStyle}>
                <span style={h2Style}>BOTH </span><span style={pStyle}>Specialized projects combining my technical expertise in audio and software engineering</span>
                <h3 style={h3Style}>ExSpire</h3>
                <h3 style={h3Style}>PETRA</h3>
                <h3 style={h3Style}>BeatFoxFlow</h3>
            </section>
        </div>
    )
}

export default ColumnLandingScreen;
