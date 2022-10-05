import './App.css';
import {ResponsiveDrawerTwo} from "./components/ResponsiveDrawerTwo";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from '@mui/material/styles';
import {Box, Container} from '@mui/material';
import {overall} from './muiStyleElements';
import { CssBaseline } from '@mui/material';

function App() {
  return (
            <ThemeProvider theme={overall}>
                <CssBaseline/>
                <ResponsiveDrawerTwo/>
                {/*<Container*/}
                {/*    sx={{*/}
                {/*    // width: "90%",*/}
                {/*    // marginLeft: "5%",*/}
                {/*    // alignItems: "center",*/}
                {/*    // justifyContent: "center",*/}
                {/*    // justifyItems: "center"*/}

                {/*}}>*/}
                <Banner/>
                <Skills/>
                <Projects/>
                <Contact/>
                {/*</Container>*/}
            </ThemeProvider>
  );
}

export default App;
