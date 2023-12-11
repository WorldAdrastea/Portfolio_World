import React from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CV from "url:../../items/William Yau Web Dev CV.pdf";

const StyledDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;

    h1 {
        font-family: Silkscreen;
        font-size: 36px;
    }

    p {
        font-family: Silkscreen;
        font-size: 18px;
    }

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        max-width: 600px; /* Set your desired maximum width */
        margin: 0 auto;
    }
`

export const About = () => {
    return (
        <StyledDiv>
            <div className="intro">
                <Typography variant="h1">
                    Hello there, my name is Will.
                </Typography>
                <Typography variant="body1">
                    Welcome to my little corner! I'm a passionate web developer from the UK, eager to leverage my skills to make a positive impact. <br/><br/> Currently on the lookout for a forward-thinking company where I can apply my expertise, learn, and grow. <br/><br/> Excited about the prospect of contributing my skills and continuously nurturing my development journey. Let's build something amazing together!
                </Typography>
            </div>
            <div>
                <a href={CV} download={CV} target="_blank">
                    <Button variant="contained">
                        Download My CV here!
                    </Button>
                </a>    
            </div>
        </StyledDiv>
    );
};