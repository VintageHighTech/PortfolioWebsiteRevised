import {Button, IconButton, Stack} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import navIcon3 from "../assets/image/leetcode_svg.svg";

export default function SocialIconGroup() {

    return(
        <Stack direction='row' spacing={1} marginRight={1}>
            <IconButton
                sx={{marginRight: 1}}
                href="https://github.com/VintageHighTech"
            >
                <GitHubIcon style={{fontSize: 'larger', fill: "#00a4c1"}}/>
            </IconButton>
            <IconButton
                href="https://www.linkedin.com/in/christopher-stephenson-b5419a225/"
            >
                <LinkedInIcon style={{fontSize: 'larger', fill: "#00a4c1"}}/>
            </IconButton>
            <Button size="small" href="https://leetcode.com/twentyGoToTen/">
                <img className="social-icon" src={navIcon3} alt="LC"/>
            </Button>
        </Stack>
    );
};