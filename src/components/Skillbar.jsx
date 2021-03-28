import React from "react"

import Roll from 'react-reveal/Roll';


function SkillBar(props) {


    let barLabel = {
        fontSize: "20px",
        color: "#23EDEC" 
    }

    let fullbarStyle = {
        fontSize: "40px",
        color: "#23EDEC",
        display: "inline"
    }

    let emptybarStyle = {
        fontSize: "40px",
        color: "#075f5f",
        display: "inline"
    }


    let skillPoints = "";
    let emptyPoints = "|||||";
    for (let i = 0; i < props.points; i++) {
        skillPoints = skillPoints + "|";
        emptyPoints = emptyPoints.slice(0, emptyPoints.length - 1);
    }

    let label = " " + props.points + "/5"

    return(
        <tr>
            <Roll left>
                <td><h1 style={barLabel}>{props.skill}</h1></td>
    <td><h1 style={fullbarStyle}>{skillPoints}</h1><h1 style={emptybarStyle}>{emptyPoints}</h1></td><h1 style={barLabel}>{label}</h1>
            </Roll>
            
        </tr>
    )
}

export default SkillBar;