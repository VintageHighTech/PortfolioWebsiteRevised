import React from 'react';
import {Box, Grid, Typography, Paper, Stack} from "@mui/material";
import JavaImage from "../assets/image/java-4-logo-svgrepo-com.svg";
import SpringImage from "../assets/image/spring-icon-svgrepo-com.svg";
import ReactImage from "../assets/image/react-svgrepo-com.svg"
import DockerImage from "../assets/image/docker-logo-svgrepo-com.svg"
import AwsImage from "../assets/image/aws-svgrepo-com.svg"
import PostgresImage from "../assets/image/pgsql-svgrepo-com.svg";

export default function Skills() {

    function SkillCard(props) {
        return (
            <Box width="100%"
                 maxWidth="200px"
                 height="auto"
                 marginTop="20px"
                 paddingLeft="7%"
                 paddingRight="7%"
                 paddingTop="12%"
                 sx={{
                     backgroundColor: "#1f2833",
                     borderRadius: "15px"
                 }}
            >
                <Stack paddingBottom={2}>
                    <img src={props.image}
                        // style={{height: "70%"}}
                         alt="Image1"/>
                    <Typography marginTop="2%">
                        {props.title}
                    </Typography>
                </Stack>
            </Box>
        )
    }


    return (
        <Paper id="skills" elevation={0} sx={{
            justifyContent: "center",
            backgroundColor: "#00a4c1",
            color: "inherit",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "20px",
            paddingBottom: "5%",
            textAlign: "center"
        }}>
            <Typography variant="h2">Areas of Study</Typography>
            <dl/>
            <Grid container columnSpacing={{xs: 4}} paddingTop="2%">
                <Grid item xs={6} sm={3} md={2}>
                    <SkillCard image={JavaImage} title="Java"/>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <SkillCard image={SpringImage} title="Spring"/>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <SkillCard image={ReactImage} title="ReactJS"/>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <SkillCard image={DockerImage} title="Docker"/>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <SkillCard image={AwsImage} title="AWS"/>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <SkillCard image={PostgresImage} title="PostgreSQL"/>
                </Grid>
            </Grid>
        </Paper>
    )
}
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve
                niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
                ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
 */