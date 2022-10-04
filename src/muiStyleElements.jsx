import { createTheme } from '@mui/material/styles';

/*
background: #1f2833

 */

export const overall = createTheme(
    {
        palette: {
            primary: {
                main: '#1f2833'
            },
            secondary: {
                main: '#fef9c7'
            },
            warning: {
                main: '#9FEDD7'
            },
            background: '#1f2833'
        },
        typography: {
            fontFamily: '"Ubuntu", sanserif',
            subtitle1: {
                fontSize: 12,
            },
            body1: {
                color: "#9FEDD7",
                fontSize: 18,
            },
        },
        background: {
            default: '#1f2833'
        }
    }
)

export const menuButtonTheme = createTheme(

)