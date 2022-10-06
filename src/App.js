import './App.css';
import {ResponsiveDrawerTwo} from "./components/ResponsiveDrawerTwo";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { ThemeProvider } from '@mui/material/styles';
import {Box, Container} from '@mui/material';
import {overall} from './muiStyleElements';
import { CssBaseline } from '@mui/material';

function App() {
  return (
            <ThemeProvider theme={overall}>
                <CssBaseline/>
                <ResponsiveDrawerTwo/>
                <Banner/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </ThemeProvider>
  );
}

export default App;
