import { createTheme } from '@mui/material/styles';

export const overall = createTheme(
    {
        palette: {
            primary: {
                main: '#1f2833'
            },
            secondary: {
                main: '#9fedd7'
            },
            warning: {
                main: '#ff652f'
            },
            danger: {
                main: '#ff652f'
            },
            background: '#1f2833'
        },
        typography: {
            fontFamily: '"Ubuntu", sanserif',
            h1: {
                color: "#00a4c1",
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1
            },
            h2: {
                color: "#1f2833",
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1
            },
            subtitle1: {
                fontSize: 40,
                fontWeight: 500,
                lineHeight: 1
            },
            subtitle2: {
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1
            },
            body1: {
                color: "#fef9c7",
                fontSize: 22,
                fontWeight: 300
            },
            body2: {
                color: "#fef9c7",
                fontSize: 15,
                fontWeight: 300
            },
        },
        background: {
            default: '#1f2833'
        },
        MuiDivider: {
            color: '#1f2833'
        }
    }
)

