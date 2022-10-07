import {AppBar, Toolbar, Button, Stack, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../assets/image/logo-one-image.png";
import SocialIconGroup from "./SocialIconGroup";

export default function Footer({handleActiveLink}) {

    function onUpdateActiveLink(value) {
        handleActiveLink(value)
    };

    return (
        <Box sx={{marginTop: 1, display: {xs: "block"}}} >
            <AppBar elevation={10} position="static" sx={{ top:"auto", bottom: 0 }}>
                <Stack justifyContent="center">
                    <Toolbar sx={{justifyContent: "space-between"}}>
                        <Button
                            size="large"
                            edge="start"
                            href="#home"
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            <img className="navbarlogo" src={logo} alt="CS"/>
                        </Button>
                        <SocialIconGroup/>
                    </Toolbar>
                    <Box justifyContent="center" paddingBottom="20px" paddingLeft="25px"  marginTop="5px">
                        <Link href="mailto:chris.stephenson@vintagehightech.co.uk"
                            color="secondary"
                              variant="body2"
                              underline="hover">
                            {'Email Chris Stephenson'}
                        </Link>
                        <Typography marginTop="3px"
                                    color="#00a4c1"
                                    variant="body2">
                            Copyright 2022. All rights reserved.
                        </Typography>
                        <br/>
                    </Box>
                </Stack>
            </AppBar>
        </Box>
    );
}