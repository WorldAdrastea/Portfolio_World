import React from "react";

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

import MeetCaseStudy from "url:../../../src/items/Meet Case Study.pdf"

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

export const Meet = () => {
    return (
        <>
            <StyledDiv>
                <Typography variant="h1">
                    Meet Application
                </Typography>
                <Typography variant="body1">
                    This application was made with React
                </Typography>
                <div id="links">
                    <a href="https://github.com/WorldAdrastea/meetv2" target="_blank">
                        <Button>
                            Github Repo
                        </Button>
                    </a>
                    <a href={MeetCaseStudy} target="_blank" download={MeetCaseStudy}>
                        <Button>
                            Full Case Study Here
                        </Button>
                    </a>
                </div>
            </StyledDiv>
        </>
    )
}