import React, {useState} from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import { useHistory, Link } from 'react-router-dom';
import globalUseStyles from '../styles/makestyles';
import {Grid, Paper, TextField, Button, Typography } from '@material-ui/core';

function Login(){

    const classes = globalUseStyles();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    let Obj = {email, password}
    
    const onLogin = (e) =>{
        e.preventDefault();
        let emailVal = e.target.email.value;
        let passwordVal = e.target.password.value;

        if(email == "" && password == ""){
            setErrors(!errors);
            e.target.email.focus();
        } else {
            setErrors(false);
            axios.post('/login',Obj)
            .then((res)=>{
                // console.log(res.data);
                history.push('/member');
            })
            .catch((err)=>{
                alert('Invalid Credentials');
                emailVal ='';
                passwordVal ='';
                e.target.email.focus();
            })
        }
        
    }
    
    return(
        <>
            <Grid align='center'>
                <Paper elevation={10} className={classes.loginPaperStyle}>

                    <div>
                    <img src={logo} alt="facegenie" width="80%" ></img>
                    </div>

                    <Typography variant="h6" fontWeight='bold' className={classes.headingDiv}>
                        Log In Confirmation
                    </Typography>

                    <Typography variant="body2" color="secondary" className={classes.pStyle}>
                        Please enter your password
                    </Typography>

                    <form onSubmit={onLogin} noValidate autoComplete="off">

                        <TextField 
                        id="outlined-basic-1" 
                        label="Email ID" 
                        variant="outlined" 
                        type="email"
                        name="email"
                        onInput={e=>setEmail(e.target.value)}
                        error = {errors}
                        helperText = {errors?'Email is required':''}
                        className={classes.inputDiv}/>

                        <TextField 
                        id="outlined-basic-2" 
                        label="Password" 
                        variant="outlined" 
                        type="password"
                        name="password"
                        onInput={e=>setPassword(e.target.value)}
                        error = {errors}
                        helperText = {errors?'Password is required':''}
                        className={classes.inputDiv} />

                        <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        className={classes.buttonStyle}>
                        Log In
                        </Button>
                    </form>

                    <Typography 
                        className={classes.forgotPasswordTypography}
                        variant='body2' >
                    <Link 
                        to='/forgotpassword'
                        className={classes.forgotPasswordStyles}>
                        Forgot Password?
                    </Link>
                    </Typography>
                </Paper>
            </Grid>   
        </>
    )
}
export default Login;