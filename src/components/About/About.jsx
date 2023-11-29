import React from "react";
import { Button } from "@mui/material";

export const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <h1>
                    Hello there, my name is Will.
                </h1>
                <p>
                    Write some sort of sad story here
                </p>
                <div>
                    <a
                        href="#contact"
                    >
                        Contact me here
                    </a>
                    <a
                        href="#projects"
                    >
                        My projects that I have worked on
                    </a>
                </div>
            </div>
            <div>
                <img
                    className="object-cover object-center rounded"
                    alt="photo"
                    //src=""
                    //Add photo here
                />
            </div>
            <div>
                <Button>Download Will's CV here</Button>
            </div>
        </section>
    );
};