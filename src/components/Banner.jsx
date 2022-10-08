import {Box, Grid, Typography, Paper} from "@mui/material";
import BannerImage from '../assets/image/intro-img.png';
import SocialIconGroup from "./SocialIconGroup";

export default function Banner() {
    const apikey= `${process.env.REACT_APP_JSMAIL_API_KEY}`
    console.log(apikey);
    return (
        <Paper id="home" elevation={0} sx={{
            color: "inherit",
            padding: "7%",
            paddingBottom:"10%",
        }}>
            <Box maxWidth="1100px">
                <Grid container columnSpacing={{xs: 2}} marginTop={12} >
                    <Grid item xs={12} sm={6} margin="auto">
                        <Typography variant="h1" marginBottom="2%">
                            Chris Stephenson
                        </Typography>
                        <Typography variant="h1" color="secondary">
                            Software Developer
                        </Typography>
                        <Typography variant="body1" marginTop="7%" marginBottom="5%">
                            A highly motivated, self-taught software developer with a
                            passion for technology, seeking to launch a new career.
                            Focused on Java and backend development but also developing
                            frontend web applications using ReactJS. Currently studying
                            data structures and algorithms using online services such as
                            StackSkills, Udemy, LeetCode, and others. Over twenty years'
                            experience working in technical design roles in manufacturing
                            & engineering industries.
                        </Typography>
                        <SocialIconGroup/>
                        <br/>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5} margin="auto">
                        <img src={BannerImage}
                             style={{width: "100%"}}
                             alt="Image1"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

// A highly motivated self-taught software developer with a passion for technology, seeking to launch a new career. Focused on Java and backend development but also developing frontend web applications using ReactJS. Currently studying data structures and algorithms using online services such as StackSkills, Udemy, LeetCode, and others. Over twenty years of experience working in technical design roles in manufacturing & engineering industries.