import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import globalUseStyles from '../styles/makestyles';
import {Grid, Paper, TextField, Button, Typography } from '@material-ui/core';

export default function ForgotPassword (){

    const classes = globalUseStyles();

    return(
        <>
            <Grid align='center'>
                <Paper elevation={10} className={classes.forgotPasswordPaper}>

                    <div>
                    <img src={logo} alt="facegenie" width="80%" ></img>
                    </div>

                    <Typography variant="h6" fontWeight='bold' className={classes.headingDiv}>
                        Forgot Password?
                    </Typography>

                    <Typography variant="body2" color="secondary" className={classes.pStyle}>
                        Please enter your registered email
                    </Typography>

                    <form  noValidate autoComplete="off">

                        <TextField 
                        id="outlined-basic" 
                        label="Email ID" 
                        variant="outlined" 
                        type="email"
                        name="email" 
                        className={classes.inputDiv}/>

                        <Button 
                        variant="contained" 
                        color="primary"
                        className={classes.buttonStyle}>
                        Send Password Reset Link
                        </Button>
                    </form>

                    <Typography 
                        className={classes.forgotPasswordTypography}
                        variant='body2' >
                    <Link 
                        to='/'
                        className={classes.backToLoginStyles}>
                        Back to Login Page
                    </Link>
                    </Typography>
                </Paper>
            </Grid>   
        </>
    )
}