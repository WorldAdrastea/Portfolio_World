import React, { useState } from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { NavBar } from "../NavBar/Nav_Bar";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";

import styled from "@emotion/styled";

const StyledMain = styled.div`
    font-family: Roboto;
    background-color: #464A4B;
    height: 100%;
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