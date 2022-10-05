import {Box, Typography, Stack, Button} from "@mui/material";

export default function ProjectCard(props) {
    return (
        <Box width="auto"
             maxWidth="400px"
             height="auto"
             marginTop="7%"
             padding="7%"
             sx={{
                 backgroundColor: "#182028 ",
                 borderRadius: "15px"
             }}
        >
            <Stack spacing={1}>
                <img src={props.image}
                     alt="Image1"/>
                <Typography variant="subtitle2" paddingTop="1%">
                    {props.title}
                </Typography>
                <Typography variant="body2" paddingBottom="2%">
                    {props.description}
                </Typography>
                <Stack spacing={1}>
                    <Button color="secondary" variant="outlined" href={props.webUrl}>WEB APP</Button>
                    <Button color="secondary" variant="outlined" href={props.gitUrl}>GIT HUB</Button>
                </Stack>
            </Stack>
        </Box>
    )
}