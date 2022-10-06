import {Typography, Divider} from "@mui/material";

export default function TailoredDivider({color, title}) {
    return (
        <Divider
            sx={{
                "&::before, &::after": {
                    borderColor: color,
                    borderWidth: 3
                },
            }}
            component="div"
            variant="fullWidth"
        >
            <Typography variant="h2" color={color}>{title}</Typography>
        </Divider>
    )
}