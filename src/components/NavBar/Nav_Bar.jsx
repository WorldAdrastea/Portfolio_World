import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 2;
    position: relative;

    .right {
        display: flex;
        order: 1;
        align-items: center;
    }
    
    .left {
        display: flex;
    }

    #name {
        margin-top: 5px;
        font-size: 60px;
        color: black;
        transition: color 1s;
        cursor: pointer;
    }

    #name:hover {
        animation: nameColor 1s forwards
    }

    @keyframes nameColor {
        from {color: black;}
        to {color: white;}
    }

    Button {
        margin: 5px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        
        .left {
            margin-bottom: -15px;
        }

        .right {
            order: 2;
            flex-direction: column;
            .button {
                font-size: 8px;
                padding:
            }
        }
    }
`

export const NavBar = ({ onNavItemClick }) => {
    return (
        <header>
            <StyledDiv>
                <a className="left" id="name" onClick={() => onNavItemClick("About")}>
                    W.Y.
                </a>
                <div className="right">
                    <Button className="button" variant="contained" onClick={() => onNavItemClick("About")}>
                        Main
                    </Button>
                    <Button className="button" variant="contained" onClick={() => onNavItemClick("Projects")}>
                        Projects
                    </Button>
                    <Button className="button" variant="contained" onClick={() => onNavItemClick("Skills")}>
                        Skills
                    </Button>
                    <Button className="button" variant="contained" onClick={() => onNavItemClick("Contact")}>
                        Contact
                    </Button>
                </div>
            </StyledDiv>
        </header>
    )
}