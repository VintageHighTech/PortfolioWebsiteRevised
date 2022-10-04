import {Box, Grid, Typography, Paper} from "@mui/material";
import JavaImage from "../assets/image/java-4-logo-svgrepo-com.svg";
import SpringImage from "../assets/image/spring-icon-svgrepo-com.svg";


export default function Skills() {

    return (
        <Paper id="skills" elevation={0} sx={{
            justifyContent: "center",
            backgroundColor: "#00a4c1",
            color: "inherit",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "5%",
            paddingBottom: "5%"
        }}>
            <>
                <Typography variant="h2">Skills</Typography>
                {/*<Box borderRadius="30px"*/}
                {/*     width="100%"*/}
                {/*     sx={{backgroundColor: "black"}}>*/}
                    <Grid container columnSpacing={{xs: 2}}>
                        <Grid item xs={6}>
                            <Box borderRadius="10px"
                                 width="100%"
                                 padding="5%"
                                 sx={{backgroundColor: "black"}}>
                                <img src={JavaImage}
                                     style={{width: "60%"}}
                                     alt="Image1"/>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box borderRadius="10px"
                                 width="100%"
                                 padding="5%"
                                 sx={{backgroundColor: "black"}}>
                                <img src={SpringImage}
                                     style={{width: "60%"}}
                                     alt="Image1"/>
                            </Box>
                        </Grid>

                    </Grid>
                {/*</Box>*/}
            </>
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