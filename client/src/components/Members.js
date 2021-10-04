import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import globalUseStyles from '../styles/makestyles';
import {Grid, Paper, Button, Typography } from '@material-ui/core';

function Members (){

    const [data, setData] = useState('');
    const classes = globalUseStyles();
    let history = useHistory(); 

    useEffect(()=>{
        axios.get('/members',{ withCredentials: true })
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
            history.push('/');
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    const onLogout = () => {
        history.push('/');
    }

    return(
        <>
            <Grid align='center'>
                <Paper elevation={10} className={classes.membersPaper}>

                    <Typography 
                        variant="h2" 
                        fontWeight='bold' 
                        className={classes.headingDiv}>
                       Welcome back {data.name}
                    </Typography>

                    <Typography 
                        variant="h5" 
                        className={classes.pStyle}>
                        Details about {data.name}
                    </Typography>
                    
                    <Typography className={classes.listStyle}>
                        <li>Name: {data.name}</li>
                        <li>Email: {data.email}</li>
                    </Typography>

                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={onLogout}
                        className={classes.logoutButtonStyle}>
                        Logout
                    </Button>

                    
                </Paper>
            </Grid>   
        </>
    )
}
export default Members;