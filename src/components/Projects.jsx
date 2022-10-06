import {Grid, Typography, Paper, Divider} from "@mui/material";
import projImg1 from "../assets/image/Connect4-img.png";
import projImg2 from "../assets/image/Project2-img.png";
import projImg3 from "../assets/image/Project3-img.png";
import TailoredDivider from "./TailoredDivider";

import ProjectCard from "./ProjectCard";

export default function Projects() {

    const projects = [
        {
            title: "Connect 4",
            description: "Java & Spring backend. React & Material UI frontend. " +
                "Containerised using Docker. Deployed using elastic beanstalk. " +
                "Three difficulty levels, including an 'unbeatable' level",
            image: projImg1,
            gitUrl: "https://github.com/VintageHighTech/Connect4FinalSession",
            webUrl: "http://connect4singleback-env.eba-x63ic78n.eu-west-2.elasticbeanstalk.com/"
        },
        {
            title: "Student Database",
            description: "Design & Development",
            image: projImg2,
            gitUrl: "https://www.youtube.com/",
            webUrl: "https://youtu.be/_EwW1eoxBzM"
        },
        {
            title: "Music Curator",
            description: "Design & Development",
            image: projImg3,
            gitUrl: "https://www.bbc.co.uk/news",
            webUrl: "https://www.songkick.com/"
        }
    ]

    return (
        <div id="projects">
            <br/> <br/> <br/>
            <Paper elevation={0} sx={{
                justifyContent: "center",
                color: "inherit",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "40px",
                paddingBottom: "3%",
                textAlign: "center"
            }}>
                <TailoredDivider color="#00a4c1" title="Projects"/>
                <dl/>
                <Grid container
                      columnSpacing={{xs: 4}}
                      paddingTop="2%"
                      justifyContent="center"
                      marginTop="20px"
                >
                    {
                        projects.map((project, index) => {
                            return (
                                <Grid item key={index} xs={10} sm={4}>
                                    <ProjectCard

                                        {...project}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Paper>
        </div>
    )
}