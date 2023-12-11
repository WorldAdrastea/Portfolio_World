import React from "react";

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

import FlixCaseStudy from "url:../../../src/items/Case Study myFlix.pdf"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    Button {
        color: white;
    }

    #links {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`

export const Flix = () => {
    return (
        <>
            <StyledDiv>
                <Typography variant="h1">
                    myFlix Movie Application
                </Typography>
                <Typography variant="body1">
                    This application was made with React
                </Typography>
                <div id="links">
                    <a href="https://github.com/WorldAdrastea/myFlix-Client" target="_blank">
                        <Button>
                            Github Repo
                        </Button>
                    </a>
                    <a href={FlixCaseStudy} target="_blank" download={FlixCaseStudy}>
                        <Button>
                            Full Case Study Here
                        </Button>
                    </a>
                </div>
            </StyledDiv>
        </>
    )
}