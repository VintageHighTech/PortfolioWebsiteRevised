import {AppBar, Toolbar, IconButton, Button, Stack} from "@mui/material";
import {useState} from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/image/logo-one-image.png";
import SocialIconGroup from "./SocialIconGroup";


export function ResponsiveDrawerTwo() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    function onUpdateActiveLink(value) {
        setActiveLink(value)
        setMobileOpen(false);
    }

    const largeDrawer = (
        <Stack direction="row" sx={{justifyContent: "space-between"}}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Button href="#home"
                        onClick={() => onUpdateActiveLink("home")}
                >
                    <img className="navbarlogo" src={logo} alt="CS"/>
                </Button>
                <Button color={activeLink === "home" ? "warning" : "secondary"}
                        href="#home"
                        onClick={() => onUpdateActiveLink("home")}
                >
                    Home
                </Button>
                <Button color={activeLink === "skills" ? "warning" : "secondary"}
                        href="#skills"
                        onClick={() => onUpdateActiveLink("skills")}
                >
                    Skills
                </Button>
                <Button color={activeLink === "projects" ? "warning" : "secondary"}
                        href="#projects"
                        onClick={() => onUpdateActiveLink("projects")}
                >
                    Projects
                </Button>
                <Button color={activeLink === "contact" ? "warning" : "secondary"}
                        href="#contact"
                        onClick={() => onUpdateActiveLink("contact")}
                >
                    Contact
                </Button>
            </Stack>
            <SocialIconGroup/>
        </Stack>
    )

    const smallDrawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <Button color={activeLink === "home" ? "warning" : "secondary"}
                    href="#home"
                    onClick={() => onUpdateActiveLink("home")}
            >
                HOME
            </Button>
            <Divider/>
            <Button color={activeLink === "skills" ? "warning" : "secondary"}
                    href="#skills"
                    onClick={() => onUpdateActiveLink("skills")}
            >
                SKILLS
            </Button>
            <Divider/>
            <Button color={activeLink === "skills" ? "warning" : "secondary"}
                    href="#skills"
                    onClick={() => onUpdateActiveLink("projects")}
            >
                PROJECTS
            </Button>
            <Divider/>
            <Button color={activeLink === "skills" ? "warning" : "secondary"}
                    href="#skills"
                    onClick={() => onUpdateActiveLink("contact")}
            >
                CONTACT
            </Button>
            <Divider/>
            <SocialIconGroup/>
        </div>
    )

    return (
        <Box>
            <AppBar position="static">
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
    )
}