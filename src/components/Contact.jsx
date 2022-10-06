import {Box, Grid, Paper} from "@mui/material";
import ContactImage from '../assets/image/contact-img.png';
import ContactForm from "./ContactForm";
import TailoredDivider from "./TailoredDivider";

export default function Contact() {

    return (
        <div id="contact">
            <br/> <br/> <br/>
            <Paper elevation={0} sx={{
                paddingLeft: "5%",
                paddingRight: "5%",
                marginBottom: "35px",
                textAlign: "center"
            }}>
                <Box maxWidth="1100px">
                    <TailoredDivider color="#00a4c1" title="Contact"/>
                    <Grid container columnSpacing={2} marginTop={5} justifyContent="space-between">
                        <Grid item xs={11} sm={5} md={4} margin="auto" marginBottom="20px">
                            <img src={ContactImage}
                                 style={{width: "100%"}}
                                 alt="Image1"
                            />
                        </Grid>
                        <Grid item xs={11} sm={6} margin="auto">
                            <ContactForm/>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    )
}