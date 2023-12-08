import React from "react";
import Code from "@mui/icons-material/Code";
import styled from '@emotion/styled';

//Styled component
const StyledDiv = styled.div`
    border-radius: 10px;
    padding: 20px;
    text-align: center;

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 8px;
    }
`
//Array of skills
const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "NodeJS",
    "Express",
    "AWS (EC2, S3, Lambda and IAM Policies)",
    "PostgreSQL",
    "MongoDB",
];

export const Skills = () => {
    return (
        <section id="skills">
            <StyledDiv>
                <Code/>
                <h3>My Skills and Technologies:</h3>
                <ul>
                    {skillsList.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </StyledDiv>
        </section>
    );
};