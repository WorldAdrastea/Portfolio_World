import React from "react";

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

import ChatCaseStudy from "url:../../../src/items/Case Study Chat App.pdf"

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

export const Chat = () => {
    return (
        <>
            <StyledDiv>
                <Typography variant="h1">
                    Chat Application
                </Typography>
                <Typography variant="body1">
                    This application was made with React Native
                </Typography>
                <div id="links">
                    <a href="https://github.com/WorldAdrastea/Chat-App" target="_blank">
                        <Button>
                            Github Repo
                        </Button>
                    </a>
                    <a href={ChatCaseStudy} target="_blank" download={ChatCaseStudy}>
                        <Button>
                            Full Case Study Here
                        </Button>
                    </a>
                </div>
            </StyledDiv>
        </>
    )
}