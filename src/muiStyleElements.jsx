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
        },
        typography: {
            fontFamily: 'Centra',
            subtitle1: {
                fontSize: 12,
            },
            body1: {
                fontSize: 14,
            },
        },
        background: {
            default: '#1f2833'
        }
    }
)

export const menuButtonTheme = createTheme(

)