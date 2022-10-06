import {Box, Grid, Typography, Paper} from "@mui/material";
import ContactImage from '../assets/image/contact-img.png';
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <Paper id="contact" elevation={0} sx={{
            // color: "inherit",
            padding: "5%",
            // paddingBottom:"10%",
            textAlign: "center"
        }}>
            <Box maxWidth="1100px">
                <Typography variant="h1" color="#00a4c1">Contact</Typography>
                <Grid container columnSpacing={2} marginTop={5} justifyContent="space-between">
                    <Grid item xs={10} sm={5} md={4} margin="auto">
                        <img src={ContactImage}
                             style={{width: "100%"}}
                             alt="Image1"
                        />
                    </Grid>
                    <Grid item xs={10} sm={6} margin="auto">
                        <ContactForm/>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}