import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudIcon from '@mui/icons-material/Cloud';
import MemoryIcon from '@mui/icons-material/Memory';
import DataArrayIcon from '@mui/icons-material/DataArray';

import styled from '@emotion/styled';
import { Typography } from "@mui/material";

const StyledDiv = styled.div`
    border-radius: 10px;
    padding: 20px;
    text-align: center;

    h1 {
        font-family: Silkscreen;
        font-size: 36px;
    }

    ul {
        font-family: Silkscreen;
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 8px;
    }

    @media (max-width: 768px) {
        padding: 0;

        h1 {
            font-size: 24px;
        }
    }
`

const skillsList = [
    { skill: "HTML", icon: <HtmlIcon className="icon" /> },
    { skill: "CSS", icon: <CssIcon className="icon" /> },
    { skill: "JavaScript", icon: <JavascriptIcon className="icon" /> },
    { skill: "React", icon: <DataObjectIcon className="icon" /> },
    { skill: "React Native", icon: <MobileFriendlyIcon className="icon" /> },
    { skill: "NodeJS", icon: <StorageIcon className="icon" /> },
    { skill: "Express", icon: <SpeedIcon className="icon" /> },
    { skill: "AWS (EC2, S3, Lambda and IAM Policies)", icon: <CloudIcon className="icon" /> },
    { skill: "PostgreSQL", icon: <MemoryIcon className="icon" /> },
    { skill: "MongoDB", icon: <DataArrayIcon className="icon" /> },
];

export const Skills = () => {
    return (
        <StyledDiv>
            <Typography variant="h1">
                My Skills and Technologies:
            </Typography>
            <ul className="skill-list">
                {skillsList.map((skill, index) => (
                <li key={index}>
                    {skill.icon}
                    {skill.skill}
                </li>
                ))}
            </ul>
        </StyledDiv>
    );
};