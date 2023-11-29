import React from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { NavBar } from "../NavBar/Nav_Bar";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";

export const MainView = () => {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <NavBar/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    );
};