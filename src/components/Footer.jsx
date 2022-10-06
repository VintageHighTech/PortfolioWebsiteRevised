import {AppBar, Toolbar, IconButton, Button, Stack, Container, Link, Typography} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import logo from "../assets/image/logo-one-image.png";
import SocialIconGroup from "./SocialIconGroup";

export default function Footer() {
    const [activeLink, setActiveLink] = useState("home");

    function onUpdateActiveLink(value) {
        setActiveLink(value)
    }

    return (
        <Box sx={{marginTop: 1, marginBottom: 1}} sx={{
            display: {xs: "block"},
        }}>
            <AppBar elevation={10} position="bottom">
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
                    <Box justifyContent="center" paddingBottom="20px" paddingLeft="25px">
                        <Link href="mailto:chris.stephenson@vintagehightech.co.uk"
                              // margin="10px"
                            color="secondary"
                              variant="body1"
                              underline="hover">
                            {'chris.stephenson@vintagehightech.co.uk'}
                        </Link>
                        <Typography
                                    color="#00a4c1"
                                    variant="body2">
                            Copyright 2022. All rights reserved.
                        </Typography>
                        <br/>
                    </Box>
                </Stack>
            </AppBar>
        </Box>
    )
}