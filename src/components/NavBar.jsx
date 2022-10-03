import {AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material';
import logo from '../assets/image/logo-one-image.png';
import { CssBaseline } from '@mui/material';
import {useState} from "react";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');

    function onUpdateActiveLink(value) {
        setActiveLink(value)
    }

    return (
            <AppBar position='static'>
                <Toolbar>
                    <CssBaseline/>
                    <Button size='large'
                            edge='start'
                            href='#home'
                            onClick={() => onUpdateActiveLink('home')}
                    >
                        <img className='navbarlogo' src={logo} alt='CS'/>
                    </Button>
                    <Stack direction='row' spacing={2}>
                        <Button color={ activeLink === 'home' ? 'warning' : 'secondary' }
                                href='#home'
                                onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Button>
                        <Button color={ activeLink === 'skills' ? 'warning' : 'secondary' }
                                href='#skills'
                                onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Button>
                        <Button color={ activeLink === 'projects' ? 'warning' : 'secondary' }
                                href='#projects'
                                onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Button>
                        <Button color={ activeLink === 'contact' ? 'warning' : 'secondary' }
                                href='#contact'
                                onClick={() => onUpdateActiveLink('contact')}
                        >
                            Contact
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
    );
};