import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;

    .right {
        order: 1; /* Change the order to 1 to place it on the left */
    }
    
    .left {
    display: flex;
    }
`

export const NavBar = ({ onNavItemClick }) => {
    return (
        <header>
            <StyledDiv>
                <a className="left" onClick={() => onNavItemClick("About")}>
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