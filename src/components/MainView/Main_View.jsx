import React, { useState } from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { NavBar } from "../NavBar/Nav_Bar";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import circleGraphic from "url:../../../src/img/Circle BG.png"

import styled from "@emotion/styled";

const StyledMain = styled.div`
    font-family: Black Ops One;
    background-color: #464A4B;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    Button {
        font-family: Black Ops One;
        background-color: gray;
    }
    
    Button:hover {
        background-color: black;
    }

    header {
        position: fixed;
        top: 0;
        margin-top: 100px;
        z-index: 2;
    }

    section {
        position: relative;
        color: white;
        z-index: 3;
    }

    #circleGraphic {
        position: absolute;
        max-height: 80%;
        object-fit: cover;
        filter: grayscale(100%);
        z-index: 1;
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media all and (max-width: 768px) {
        font-size: 16px;
        height: 100%
        width: 100%;
        margin: 10px;

        NavBar {
            flex-direction: column; 
            align-items: center;
        }
    
        section {
            margin: 10px;
        }

        #circleGraphic {
            max-height: 60%;
        }
    }
    
    @media all and (max-width: 430px) {
        font-size: 12px;
        height: 100%
        width: 100%;
        margin: 0px;

        section {
            margin: 5px;
        }

        #circleGraphic {
            max-height: 30%;
        }
    }
`

export const MainView = () => {
    const [showAbout, setShowAbout] = useState(true);
    const [showProjects, setShowProjects] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleNavItemClick = (section) => {
        setShowAbout(section === "About");
        setShowProjects(section === "Projects");
        setShowSkills(section === "Skills");
        setShowContact(section === "Contact");
    };

    return (
        <StyledMain>
            <NavBar onNavItemClick={handleNavItemClick} />
            <img src={circleGraphic} alt="Spinning Circle" id="circleGraphic" />
            <section id="About" style={{ display: showAbout ? "block" : "none" }}>
                <About />
            </section>
            <section id="Projects" style={{ display: showProjects ? "block" : "none" }}>
                <Projects />
            </section>
            <section id="Skills" style={{ display: showSkills ? "block" : "none" }}>
                <Skills />
            </section>
            <section id="Contact" style={{ display: showContact ? "block" : "none" }}>
                <Contact />
            </section>
        </StyledMain>
    );
};