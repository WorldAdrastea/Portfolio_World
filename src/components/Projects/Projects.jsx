import React, { useState} from "react";
import styled from "@emotion/styled";
import { Button, Card, Typography } from "@mui/material";

import { Chat } from "./Chat";
import { Meet } from "./Meet";
import { Flix } from "./Flix";

import ChatImg from "../../img/Chat.png";
import MeetImg from "../../img/Meet.png";
import myFlixImg from "../../img/myflix_react.png";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: Silkscreen;
        font-size: 36px;
    }

    p {
        font-family: Silkscreen;
    }

    img {
        max-width: 200px;
        max-height: 350px;
    }

    .cards {
        display: flex;
        flex-direction: row;
        gap: 10px;

        :hover {
            cursor: pointer;
        }
        
        div:hover::after {
            content: attr(data-app-name);
            position: absolute;
            bottom: -20%;
            left: 50%;
            transform: translateX(-50%);
            background-color: black;
            color: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 14px;
            visibility: visible;
            opacity: 1;
            transition: visibility 0s, opacity 0.2s ease-out;
        }
    }

    .projects {
        font-family: Silkscreen;
    }

    #backbutton {
        color: white;
        border-color: white;
    }
`

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleNavItemClick = (projectName) => {
        setSelectedProject(projectName);
    };

    const handleGoBack = () => {
        setSelectedProject(null);
    };
    return (
        <StyledDiv>
            {selectedProject === null && (
                <Typography variant="h1">
                    Select a project:
                </Typography>
            )}
            {selectedProject === null && (
                <div className="cards">
                    <Card onClick={() => handleNavItemClick("Chat")} data-app-name="Chat App" >
                        <img src={ChatImg} />
                    </Card>
                    <Card onClick={() => handleNavItemClick("Meet")} data-app-name="Meet App" >
                        <img src={MeetImg} />
                    </Card>
                    <Card onClick={() => handleNavItemClick("myFlix")} data-app-name="myFlix App" >
                        <img src={myFlixImg} />
                    </Card>
                </div>
            )}
            {selectedProject !== null && (
                <div>
                    <Button id="backbutton" variant="outlined" onClick={handleGoBack}>
                        Back
                    </Button>
                </div>
            )}
            <div onProjectClick={handleNavItemClick}>
                <section className="projects" id="Chat" style={{ display: selectedProject === "Chat" ? "block" : "none" }}>
                    <Chat />
                </section>
                <section className="projects" id="Meet" style={{ display: selectedProject === "Meet" ? "block" : "none" }}>
                    <Meet />
                </section>
                <section className="projects" id="myFlix" style={{ display: selectedProject === "myFlix" ? "block" : "none" }}>
                    <Flix />
                </section>
            </div>
        </StyledDiv>
    );
};