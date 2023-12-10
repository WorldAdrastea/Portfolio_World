import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    z-index: 2;
    position: relative;

    .right {
        order: 1;
        justify-content: center;
    }
    
    .left {
    display: flex;
    }

    #name {
        margin-top: 5px;
        font-size: 60px;
        color: black;
        transition: color 1s;
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
`

export const NavBar = ({ onNavItemClick }) => {
    return (
        <header>
            <StyledDiv>
                <a className="left" id="name" onClick={() => onNavItemClick("About")}>
                    William Yau
                </a>
                <div className="right">
                    <Button className="button" variant="contained" onClick={() => onNavItemClick("About")}>
                        Home
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