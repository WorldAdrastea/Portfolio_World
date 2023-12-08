import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    text-align: center;
`

export const About = () => {
    const downloadUrl = "../../items/William Yau Web Dev CV.pdf";

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "William_Yau_Web_Dev_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about">
            <StyledDiv>
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <h1>
                        Hello there, my name is Will.
                    </h1>
                    <p>
                        Write some sort of sad story here
                    </p>
                </div>
                <div>
                <Button variant="contained" onClick={handleDownload}>
                    Download My CV here!
                </Button>
                </div>
            </StyledDiv>
        </section>
    );
};