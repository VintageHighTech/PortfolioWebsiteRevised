import {Box, Grid, Typography, Paper} from "@mui/material";
import BannerImage from '../assets/image/intro-img.png';
import SocialIconGroup from "./SocialIconGroup";

export default function Banner() {
    return (
        <Paper id="home" elevation={0} sx={{
            color: "inherit",
            padding: "7%",
            paddingBottom:"10%",
        }}>
            <Box maxWidth="1100px">
                <Grid container columnSpacing={{xs: 0}} marginTop={12} justifyContent="space-between">
                    <Grid item xs={12} margin="auto">
                        <Typography variant="h1" marginBottom="10px" >
                            Chris Stephenson
                        </Typography>
                        <Typography variant="h1" color="secondary">
                            Software Developer
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" marginTop="7%" marginBottom="5%">
                            A highly motivated, self-taught software developer with a passion for technology.
                            Focused on Java and backend development but also keen to broaden my
                            understanding of frontend web applications. Currently studying data structures
                            and algorithms using online services such as StackSkills, Udemy, LeetCode and
                            others. Over seventeen years' experience in technical design roles in manufacturing
                            & engineering industries.
                        </Typography>
                        <SocialIconGroup/>
                        <br/>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>
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
