import React, { useState } from "react";
import styled from "@emotion/styled";
import GitHubIcon from '@mui/icons-material/GitHub';

//Separately importing due to Typeerror bug
import Card  from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

    @media (max-width: 768px) {
        flex-direction: column;

        h1 {
            font-size: 24px;
        }

        .cards {
            flex-direction: column;
            overflow: auto;

            img {
                width: 100px;
            }
            
            .MuiPaper-root {
                height: 100px;
            }

            div:hover::after {
                bottom: -10%;
            }
        }
    }
`

const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledModalContent = styled.div`
    
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 600px;
    width: 100%;
    max-height: 600px;
    justify-content: center;
    text-align: center;

    h1 {
        font-family: Black Ops One;
    }

    p {
        font-family: Silkscreen;
    }

    @media all and (max-width: 430px) {
        max-width: 300px
    }
`

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectInfo = {
        Chat: {
          title: "Chat App",
          description: "'Chat' the mobile application created with React Native, Firebase and Expo was designed to allow users to receive and send messages with anonymous authentication. Messages within conversations can be displayed whilst users are offline, and users would be also be able to send photos and their own location.",
          link: "https://github.com/WorldAdrastea/Chat-App"
        },
        Meet: {
          title: "Meet App",
          description: "An application created with React that allows users to find events that they can filter by location and technology. This project uses AWS Lambda, Google OAuth, Recharts, Jest, Cucumber and Puppeteer. The application itself uses the Google Calendar API to fetch upcoming events.",
          link: "https://github.com/WorldAdrastea/meetv2"
        },
        myFlix: {
          title: "myFlix App",
          description: "'myFlix' is a web application project built with the MERN tech stack. It was made to allow users to create an account to log into a database of movies. Users would have information about each individual movie and be able to save a list of their favourite movies. They would be able to update their account information and delete it if necessary.",
          link: "https://github.com/WorldAdrastea/myFlix-Client"
        },
    };

    const handleNavItemClick = (projectName) => {
        setSelectedProject(projectName);
        setIsModalOpen(true);
    };

    const handleGoBack = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <StyledDiv>
            <Typography variant="h1">
                Select a project:
            </Typography>
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
            <StyledModal 
                open={isModalOpen} 
                onClose={handleGoBack}
            >
                <StyledModalContent>
                    {selectedProject !== null && (
                        <div >
                            <Typography variant="h1">{projectInfo[selectedProject].title}</Typography>
                            <Typography variant="body1">{projectInfo[selectedProject].description}</Typography>
                            <a
                                href={projectInfo[selectedProject].link}
                                target="_blank" 
                            >
                                <GitHubIcon className="icons" fontSize="large" />
                            </a>
                        </div>
                    )}
                    {selectedProject === null && <p>No project selected</p>}
                </StyledModalContent>
            </StyledModal>
        </StyledDiv>
    );
};