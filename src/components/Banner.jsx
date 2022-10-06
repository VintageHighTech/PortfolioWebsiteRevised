import {Box, Grid, Typography, Paper} from "@mui/material";
import BannerImage from '../assets/image/intro-img.png';

export default function Banner() {

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
                            Currently studying all aspects of software development, focussing on
                            web applications built using Java, Spring & React.js. After studying
                            part-time whilst working full-time as a Design Engineer, I recently
                            decided to study full time and concentrate my efforts on a career
                            in software development.
                        </Typography>
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
    )
}