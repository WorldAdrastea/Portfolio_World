import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import interventionSound from 'url:../../items/mlg-sound-effect-intervention-mw2.mp3';

const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;

    a:visited {
        color: black;
    }

    a:link {
        color: black;
    }

    .icons:hover {
        cursor: crosshair;
        animation: iconEnlarge 1s forwards
    }

    @keyframes iconEnlarge {
        from {
            transform: scale(1, 1);
        }

        to {
            transform: scale(1.3, 1.3);
        }
    }
`

const Dot = styled.div`
    height: 25px;
    width: 25px;
    border: 2px solid white;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: opacity 0.1s ease-in-out;
`;

export const Contact = () => {
    const [audio] = useState(new Audio(interventionSound));
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [dotVisible, setDotVisible] = useState(false);

    const playClickSound = () => {
        audio.play();
    };

    const handleIconHover = () => {
        setDotVisible(true);
    };

    const handleIconLeave = () => {
        setDotVisible(false);
    };

    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <StyledSection>
            <div>
                <Dot className="dot" style={{ left: mousePosition.x, top: mousePosition.y }} visible={dotVisible}/>
                <a 
                    href="https://www.linkedin.com/in/william-yau-wd/" 
                    target="_blank" 
                    onClick={playClickSound}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                >
                    <LinkedInIcon className="icons" fontSize="large" />
                </a>
                <a 
                    href="mailto:williamcfyau@hotmail.co.uk" 
                    onClick={playClickSound}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                >
                    <EmailIcon className="icons" fontSize="large" />
                </a>
                <a 
                    href="https://github.com/WorldAdrastea" 
                    target="_blank" 
                    onClick={playClickSound}
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconLeave}
                >
                    <GitHubIcon className="icons" fontSize="large" />
                </a>
            </div>
        </StyledSection>
    )
}