import {Grid, Paper} from "@mui/material";
import projImg1 from "../assets/image/Connect4-img.png";
import projImg2 from "../assets/image/portfolio-site-project.png";
import projImg3 from "../assets/image/psql-project.png";
import TailoredDivider from "./TailoredDivider";

import ProjectCard from "./ProjectCard";

export default function Projects() {

    const projects = [
        {
            title: "Connect 4",
            description: "Includes three difficulty levels. Comprises a Java and Spring Boot " +
                "backend with a ReactJS and MUI frontend. " +
                "Containerised using Docker. Deployed to AWS using Elastic Beanstalk. "
                ,
            image: projImg1,
            active: true,
            linkButton: "WEBAPP",
            gitUrl: "https://github.com/VintageHighTech/Connect4FinalSession",
            webUrl: "https://c4sessions-rvcmqmwxra-no.a.run.app/"
        },
        {
            title: "Portfolio Site",
            description: "Fully responsive personal portfolio site. Created using ReactJS and MUI, " +
            "with some additional tailored styling elements.",
            image: projImg2,
            active: true,
            linkButton: "WEBSITE",
            gitUrl: "https://github.com/VintageHighTech/PortfolioWebsiteRevised",
            webUrl: "https://vintagehightech.co.uk"
        },
        {
            title: "Personnel Database",
            description: "COMING SOON. Database editor with CRUD operations. Comprises Java and Spring Boot backend, " +
                "connected to a PostgreSQL database, with ReactJS and Ant Design frontend. Containerised using Docker. " +
                "Deployed to AWS using Elastic Beanstalk.",
            image: projImg3,
            active: false,
            linkButton: "WEBAPP",
            gitUrl: "https://github.com/VintageHighTech/PersonnelDatabase",
            webUrl: "https://https://www.postgresql.org"
        }
    ];

    return (
        <div id="projects">
            <br/> <br/>
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
    );
}