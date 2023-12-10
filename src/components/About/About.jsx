import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import CV from "url:../../items/William Yau Web Dev CV.pdf";

const StyledDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
`

export const About = () => {
    return (
        <section id="about">
            <StyledDiv>
                <div>
                    <h1>
                        Hello there, my name is Will.
                    </h1>
                    <p>
                        Write some sort of sad story here
                    </p>
                </div>
                <div>
                    <a href={CV} download={CV} target="_blank">
                        <Button variant="contained">
                            Download My CV here!
                        </Button>
                    </a>    
                </div>
            </StyledDiv>
        </section>
    );
};