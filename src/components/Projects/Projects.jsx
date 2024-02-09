import React, { useState } from "react";
import styled from "@emotion/styled";
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

//Separately importing due to Typeerror bug
import Card  from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
            bottom: -50%;
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
            font-size: 20px;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 2px;
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

    img {
        max-height: 300px;
    }

    .horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media all and (max-width: 430px) {

        h1 {
            font-size: 24px;
        }

        p {
            font-size: 12px;
        }

        img {
            display: none;
        }
    }
`

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectInfo = {
        Project1: {
          title: "Mist",
          description: "Mist is a React-based project aimed at recreating the home page of Steam, the popular gaming platform. This project is designed to provide users with a familiar interface for browsing games, deals, and news, similar to the Steam home page experience.",
          link: "https://github.com/WorldAdrastea/Mist",
          image: "",
          demo: "https://mistgaming.netlify.app/"
        },
        Project2: {
          title: "YTT API",
          description: "The YTT API is a dynamic CRUD application developed with Node.js, TypeScript, Express, and MongoDB, focusing on covers of songs within the youtaite community. This API allows users to seamlessly create, read, update, and delete information about these covers. Leveraging the power of MongoDB for flexible data storage, the API facilitates exploration and discovery within the youtaite community, enabling users to access details such as cover titles, artist names, song information, and original artist's details. With a robust architecture and emphasis on simplicity, the YTT API provides an efficient solution for managing and exploring youtaite covers.",
          link: "https://github.com/WorldAdrastea/YTT-API",
          image: "",
          demo: "https://ytt-api.onrender.com"
        },
        Project3: {
          title: "myFlix App",
          description: "'myFlix' is a web application project built with the MERN tech stack. It was made to allow users to create an account to log into a database of movies. Users would have information about each individual movie and be able to save a list of their favourite movies. They would be able to update their account information and delete it if necessary.",
          link: "https://github.com/WorldAdrastea/myFlix-Client",
          image: myFlixImg,
          demo: "https://myflixmovieapplication.netlify.app/login"
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
                <Card onClick={() => handleNavItemClick("Project1")} data-app-name="Mist App" >
                    <div>
                        <Typography variant="h1" id="MistCard">Mist</Typography>
                    </div>
                </Card>
                <Card onClick={() => handleNavItemClick("Project2")} data-app-name="YTT_API" >
                    <div>
                        <Typography variant="h1" id="YTTCard">YTT API</Typography>
                    </div>
                </Card>
                <Card onClick={() => handleNavItemClick("Project3")} data-app-name="myFlix App" >
                    <div>
                        <Typography variant="h1" id="myFlixCard">myFlix</Typography>
                    </div>
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
                            <img src={projectInfo[selectedProject].image}></img>
                            <div className="horizontal">
                                <Typography variant="body1">Demo/Deployment:</Typography>
                                <a
                                    href={projectInfo[selectedProject].demo}
                                    target="_blank"
                                >
                                    <AutoAwesomeIcon className="icons" fontSize="large"/>
                                </a>
                                <Typography variant="body1">Repo:</Typography>
                                <a
                                    href={projectInfo[selectedProject].link}
                                    target="_blank" 
                                >
                                    <GitHubIcon className="icons" fontSize="large" />
                                </a>
                            </div>
                        </div>
                    )}
                    {selectedProject === null && <p>No project selected</p>}
                </StyledModalContent>
            </StyledModal>
        </StyledDiv>
    );
};