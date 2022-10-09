import {Box, Grid, Typography, Paper, Stack} from "@mui/material";
import JavaImage from "../assets/image/java-4-logo-svgrepo-com.svg";
import SpringImage from "../assets/image/spring-icon-svgrepo-com.svg";
import ReactImage from "../assets/image/react-svgrepo-com.svg"
import DockerImage from "../assets/image/docker-logo-svgrepo-com.svg"
import AwsImage from "../assets/image/aws-svgrepo-com.svg"
import PostgresImage from "../assets/image/postgresql-svgrepo-com.svg";

import TailoredDivider from "./TailoredDivider";

export default function Skills() {

    function SkillCard({image, title}) {
        return (
            <Box display="flex"
                 width="100%"
                 maxWidth="200px"
                 height="90%"
                 maxHeight="220px"
                 margin="auto"
                 marginTop="10%"
                 padding="10%"
                 paddingTop="20%"
                 justifyContent="center"
                 alignItems="center"
                 sx={{
                     backgroundColor: "#1f2833",
                     borderRadius: "15px"
                 }}
            >
                <Stack paddingBottom={2}>
                    <img src={image}
                         alt="Image1"
                         width="100%"
                         height="100%"
                    />
                    <Typography marginTop="2%">
                        {title}
                    </Typography>
                </Stack>
            </Box>
        )
    }

    const skills = [
        {
            title: "Java",
            image: JavaImage
        },
        {
            title: "Spring",
            image: SpringImage
        },
        {
            title: "React",
            image: ReactImage
        },
        {
            title: "Docker",
            image: DockerImage
        },
        {
            title: "AWS",
            image: AwsImage
        },
        {
            title: "Postgres",
            image: PostgresImage
        },
    ]

    return (
        <div id="skills">
            <br/> <br/>
            <Paper elevation={0} sx={{
                justifyContent: "center",
                backgroundColor: "#00a4c1",
                color: "inherit",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "30px",
                paddingBottom: "50px",
                textAlign: "center",
                borderRadius: "25px"
            }}>
                <TailoredDivider color="#1f2833" title="Skills"/>
                <Grid container columnSpacing={{xs: 2}} paddingTop="15px">
                    {skills.map((prop) => {
                        return (
                            <Grid key={prop.title} item xs={6} sm={3} md={2}>
                                <SkillCard image={prop.image} title={prop.title}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Paper>
        </div>
    );
}
