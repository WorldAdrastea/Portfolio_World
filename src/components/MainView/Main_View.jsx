import React from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { NavBar } from "../NavBar/Nav_Bar";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";

export const MainView = () => {
    return (
        <main className="flex text-center">
            <NavBar/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    );
};