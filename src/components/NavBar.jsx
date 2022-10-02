import {AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import logo from "../assets/image/logo-one-image.png"

export default function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start'>
                    <img className='navbarlogo' src={logo} alt='CS'/>
                </IconButton>
                <Typography>
                    test
                </Typography>
            </Toolbar>
        </AppBar>
    )
}