import {Box, Typography, Stack, Button} from "@mui/material";

export default function ProjectCard({title, description, image, webUrl, gitUrl, linkButton, active}) {
    return (
        <Box width="auto"
             maxWidth="370px"
             height="auto"
             marginTop="7%"
             padding="7%"
             sx={{
                 backgroundColor: "#151C24",
                 borderRadius: "25px"
             }}
        >
            <Stack spacing={1}>
                <img src={image}
                     alt="Image"
                     width="100%"
                />
                <Typography variant="subtitle2" paddingTop="2%">
                    {title}
                </Typography>
                <Typography variant="body2" paddingTop="2%" paddingBottom="4%">
                    {description}
                </Typography>
                <Stack spacing={1.5}>
                    <Button disabled={!active} color="secondary" variant="outlined" href={webUrl}>{linkButton}</Button>
                    <Button disabled={!active} color="secondary" variant="outlined" href={gitUrl}>GIT HUB</Button>
                </Stack>
            </Stack>
        </Box>
    )
};