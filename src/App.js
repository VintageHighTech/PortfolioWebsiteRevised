import './App.css';
import {ResponsiveDrawerTwo} from "./components/ResponsiveDrawerTwo";
import { ThemeProvider} from '@mui/material/styles';
import {overall} from './muiStyleElements';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
        <ThemeProvider theme={overall}>
            <CssBaseline/>
            <ResponsiveDrawerTwo/>
        </ThemeProvider>
    </div>
  );
}

export default App;
