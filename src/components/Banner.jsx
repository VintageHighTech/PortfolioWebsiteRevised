import {Box, Grid, Typography, Button, Container, Paper} from "@mui/material";
import BackgroundImage from '../assets/image/background-one-img.png';
import BannerImage from '../assets/image/intro-img.png';

export default function Banner() {

    return (
        <Paper elevation={0} sx={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "inherit",
            padding: "20px"
        }}>
        {/*//     <Container>*/}
                <Grid container columnSpacing={{xs: 2}} marginTop={15}>
                    <Grid item xs={12} sm={6} >
                        <Typography variant="h3">
                            Chris Stephenson
                        </Typography>
                        <Typography variant="h3">
                            Software Developer
                        </Typography>
                        <dl/>
                        <Typography variant="body1" color="warning">
                            Currently studying all aspects of software development, focussing on
                            web applications built using Java, Spring & React.js. After studying
                            part-time whilst working full-time as a Design Engineer, I recently
                            decided to study full time and concentrate my efforts on a career
                            in software development.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat
                            ac felis donec et. Enim lobortis scelerisque fermentum dui faucibus in
                            ornare. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
                            In cursus turpis massa tincidunt dui ut ornare. Imperdiet massa tincidunt
                            nunc pulvinar. Mi sit amet mauris commodo quis imperdiet massa. Facilisis
                            sed odio morbi quis commodo odio aenean sed. Morbi tincidunt augue interdum
                            velit euismod in pellentesque massa. Ac orci phasellus egestas tellus rutrum
                            tellus. Eget aliquet nibh praesent tristique magna sit. Arcu risus quis
                            varius quam quisque id diam. Semper eget duis at tellus. Mauris cursus
                            mattis molestie a iaculis at erat. Ullamcorper malesuada proin libero
                            nunc consequat. Id faucibus nisl tincidunt eget nullam. Lorem ipsum
                            dolor sit amet consectetur adipiscing elit.

                            Arcu felis bibendum ut tristique et egestas. Consectetur lorem donec
                            massa sapien faucibus et molestie ac feugiat. Eleifend donec pretium
                            vulputate sapien. Tincidunt eget nullam non nisi est sit. Nunc non
                            blandit massa enim nec dui. Vel pharetra vel turpis nunc eget lorem
                            dolor sed. Non blandit massa enim nec dui nunc mattis enim. Porttitor
                            leo a diam sollicitudin tempor id. Elit ut aliquam purus sit amet
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={BannerImage}
                             style={{width:"100%"}}
                             alt="Image1"
                        />
                    </Grid>
                </Grid>
            {/*</Container>*/}
        </Paper>
    )
}