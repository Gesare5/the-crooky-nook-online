import React from 'react';
import { alpha, Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        // backgroundColor: alpha('#003E42', 0.2),
        backgroundColor: '#fff',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    form: {
        height: '90%',
        borderRadius: 14,
        background: '#fff',
        boxShadow: `0px 0px 40px 0px ${alpha('#003E42', 0.15)}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputDiv: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0rem'
    },
    registerTitle: {
        fontFamily: 'Brachella Drumal',
        marginBottom: '2rem',
        fontSize: 60,
        marginTop: '-1rem',
    },
    signupButton: {
        width: '100%',
        fontWeight: 600,
        fontSize: 19,
        textTransform: 'none',
        backgroundColor: '#003E42',
        color: '#f9f9f9',
        margin: '2.5rem 0rem',
        height: 46,
        '&:hover': {
            color: 'rgba(0,0,0)'
        }
    },
})

const Register = () => {

    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            <Grid item md={5} style={{ height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                {/* <Typography variant='h4'>TheCrookyNook</Typography> */}
                <Typography style={{ color: '#003E42', fontSize: 36, fontWeight: 600, letterSpacing: 1 }}>Now you don't have to put your book down. For all your reading needs anytime, anywhere</Typography>
                <img height='auto' width='100%' alt='' src='/images/online_library_flat.jpg' style={{ objectFit: 'cover' }} />
            </Grid>
            <Grid item md={5} className={classes.form}>
                <Typography variant='h3' className={classes.registerTitle}>WELCOME</Typography>
                <div style={{ width: '65%' }} >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6}>
                            <Typography style={{ marginBottom: '.2rem', fontWeight: 600 }}>First Name</Typography>
                            <TextField
                                type='text'
                                variant='outlined'
                                placeholder='Enter First Name'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography style={{ marginBottom: '.2rem', fontWeight: 600 }}>Last Name</Typography>
                            <TextField
                                type='text'
                                variant='outlined'
                                placeholder='Enter Last Name'
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <div className={classes.inputDiv}>
                        <Typography style={{ marginBottom: '.2rem', fontWeight: 600 }}>Email</Typography>
                        <TextField
                            type='text'
                            variant='outlined'
                            placeholder='Enter your email'
                            fullWidth
                        />
                    </div>
                    <div className={classes.inputDiv}>
                        <Typography style={{ marginBottom: '.2rem', fontWeight: 600 }}>Password</Typography>
                        <TextField
                            type='password'
                            variant='outlined'
                            placeholder='Password'
                            fullWidth
                        />
                    </div>
                    <div className={classes.inputDiv}>
                        <Typography style={{ marginBottom: '.2rem', fontWeight: 600 }}>Confirm Password</Typography>
                        <TextField
                            type='password'
                            variant='outlined'
                            placeholder='Password'
                            fullWidth
                        />
                    </div>
                    <Button className={classes.signupButton}> Let's Go!</Button>

                </div>
            </Grid>
        </Grid>
    );
};

export default Register;