import {useState} from "react";
import React from "react";
import {AppBar, Toolbar, IconButton, Button, Stack, Container, Box, Divider, Drawer} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/image/logo-one-image.png";
import SocialIconGroup from "./SocialIconGroup";

export default function NavBar({handleActiveLink, activeLink}) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function onUpdateActiveLink(value) {
        handleActiveLink(value)
        setMobileOpen(false);
    }

    const links = ["home", "skills", "projects", "contact"]

    const largeDrawer = (
        <Box sx={{marginTop: 1, marginBottom: 1}}>
            <Stack direction="row" sx={{justifyContent: "space-between"}}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Button href="#home"
                            onClick={() => onUpdateActiveLink("home")}
                            sx={{marginLeft: 1}}
                    >
                        <img className="navbarlogo" src={logo} alt="CS"/>
                    </Button>
                    {
                        links.map((name) => {
                            return (
                                <Button key={name}
                                        color={activeLink === name ? "warning" : "secondary"}
                                        href={`#${name}`}
                                        onClick={() => onUpdateActiveLink(name)}
                                >
                                    {name}
                                </Button>
                            )
                        })
                    }
                </Stack>
                <SocialIconGroup/>
            </Stack>
        </Box>
    );

    const smallDrawer = (
        <Container>
            <div>
                <Toolbar/>
                {
                    links.map((name, index) => {
                        return (
                            <div key={index}>
                                <Button color={activeLink === name ? "warning" : "secondary"}
                                        href={`#${name}`}
                                        onClick={() => onUpdateActiveLink(name)}
                                >
                                    {name}
                                </Button>
                                <Divider sx={{borderColor: "#626870"}}/>
                            </div>
                        )
                    })
                }
                <Box sx={{marginTop: 1, marginBottom: 1}}>
                    <SocialIconGroup/>
                </Box>
            </div>
        </Container>
    );

    return (
        <Box sx={{marginTop: 1, marginBottom: 1}}>
            <AppBar elevation={10}>
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Button
                        size="large"
                        edge="start"
                        href="#home"
                        onClick={() => onUpdateActiveLink("home")}
                    >
                        <img className="navbarlogo" src={logo} alt="CS"/>
                    </Button>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: "none"}}}
                    >
                        <MenuIcon style={{fontSize: "larger", fill: "#00a4c1"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#1f2833"
                        }
                    }}
                    elevation={5}
                    anchor="top"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: "block", sm: "none"},
                    }}
                >
                    {smallDrawer}
                </Drawer>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#1f2833"
                        }
                    }}
                    anchor="top"
                    variant="permanent"
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: "none", sm: "block"},
                    }}
                >
                    {largeDrawer}
                </Drawer>
            </Box>
        </Box>
    );
}
