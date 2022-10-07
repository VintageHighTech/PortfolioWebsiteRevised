import './App.css';
import React from "react";
import {useState} from "react";
import {ThemeProvider} from '@mui/material/styles';
import {overall} from './muiStyleElements';
import {CssBaseline} from '@mui/material';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


function App() {
    const [activeLink, setActiveLink] = useState("home");

    return (
        <ThemeProvider theme={overall}>
            <CssBaseline/>
            <NavBar handleActiveLink={setActiveLink} activeLink={activeLink}/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer handleActiveLink={setActiveLink}/>
        </ThemeProvider>
    );
}

export default App;
