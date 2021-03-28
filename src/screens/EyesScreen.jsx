import React from 'react';

// Components
import ContentSection from "../components/ContentSection";
import ISBReflection from "../screens/reflections/ISBReflection";
import RDRReflection from './reflections/RDRReflection';
import EyesNavBar from  "../components/EyesNavBar";

// other
import { AwesomeButton } from "react-awesome-button";

// React Router
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";


function EyesScreen(props) {

    return(
        <div>
            <EyesNavBar />

        </div>
    )
}

export default EyesScreen;