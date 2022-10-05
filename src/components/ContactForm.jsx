import {Box, Grid, Typography, Paper, Button, TextField, createTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
// import { KeyboardDatePicker, MuiPickerUtilsProvider } from '@mui/utils/'
import React, {useState, useRef} from 'react';
import emailjs from "@emailjs/browser";


export default function ContactForm() {

    const style = {
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: "orange",
                color: 'secondary',
            }
        },
        "& label.Mui-focused": {
            color: "orange"
        },
        "& .MuiInputLabel-root": {color: 'secondary'},
        "& .MuiInputLabel-root.Mui-focused": {color: 'secondary'},
        "& .MuiOutlinedInput-root": {
            "& > fieldset": {borderColor: "white"},
            color: "white"
        },
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
                borderColor: "orange"
            }
        }
    };

    const StyledTextField = (props) => {
        return (
            <TextField
                sx={style}
                id="outlined"
                variant="outlined"
                name="first_name"
                label="First Name"
                value={formDetails.first_name}
                placeholder="First Name"
                onChange={(e) => onFormUpdate('first_name', e.target.value)}
            />
        )
    }


    const formInitialDetails = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message sent");
        setButtonText("Sending...");

        emailjs.sendForm('vintagehightech_p1', 'portfolio_a1', form.current, 'pdIIx0n889NuQnoqc')
            .then((result) => {
                setStatus({success: true, message: 'Message sent successfully'});

            }, (error) => {
                setStatus({success: false, message: 'Something went wrong, please try again later.'});
            });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
    }

    return (
        <Box component="form" ref={form} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item sm={6}>
                    {/*<StyledTextField label="First Name" name="first_name"/>*/}
                    <TextField sx={style}
                               variant="outlined"
                               name="first_name"
                               label="First Name"
                               value={formDetails.first_name}
                               placeholder="First Name"
                               onChange={(e) => onFormUpdate('first_name', e.target.value)}
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={style}
                               variant="outlined"
                               name="last_name"
                               label="Last Name"
                               value={formDetails.last_name}
                               placeholder="Last Name"
                               onChange={(e) => onFormUpdate('last_name', e.target.value)}
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={style}
                               variant="outlined"
                               name="email"
                               label="Email"
                               value={formDetails.email}
                               placeholder="Email Address"
                               onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={style}
                               variant="outlined"
                               name="phone"
                               label="Phone Number"
                               value={formDetails.phone}
                               placeholder="Phone Number"
                               onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                </Grid>
                <Grid item sm={6}>
                                    <textarea
                                        name="message"
                                        value={formDetails.message} placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}/>
                </Grid>
                <Grid>
                    <Button type="submit" color="secondary">{buttonText}</Button>
                </Grid>
                <Grid>
                    {
                        status.message &&
                        <div>
                            <Typography color={status.success === false ? "danger" : "success"}>
                                {status.message}
                            </Typography>
                        </div>
                    }
                </Grid>
            </Grid>
        </Box>
    );


}