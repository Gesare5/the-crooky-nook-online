import React from 'react';
import { alpha, Button, Checkbox, FormControlLabel, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import clsx from 'clsx';
// import Link from 'next/link';

const useStyles = makeStyles({
    checkboxDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem 0rem'
    },
    container: {
        height: '100vh',
    },
    form: {
        background: '#f9f9f9',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem'
    },
    googleBtn: {
        border: '1px solid #6C8E7A',
        marginBottom: '.5rem',
        height: 48,
    },
    imageDiv: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    inputDiv: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0rem'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 600
    },
    loginButton: {
        width: '100%',
        fontWeight: 600,
        fontSize: 16,
        textTransform: 'none',
    },
    loginTitle: {
        fontFamily: 'Brachella Drumal',
        marginBottom: '.5rem',
        fontSize: 60,
    },
    review: {
        backgroundColor: alpha('#f9f9f9', 0.4),
        backdropFilter: 'blur(5px)',
        border: `2px solid ${alpha('#f9f9f9', 0.7)}`,
        width: '85%',
        height: 350,
        position: 'absolute',
        bottom: '5%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 14px'
    },
    signIn: {
        backgroundColor: '#6C8E7A',
        color: '#f9f9f9',
        margin: '1rem 0rem',
        height: 46,
        '&:hover': {
            color: 'rgba(0,0,0)'
        }
    }
})

const Login = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.container} >
            <Grid item md={6} className={classes.form}>
                <Typography variant='h3' className={classes.loginTitle}>WELCOME BACK</Typography>
                <Typography color='textSecondary' style={{ marginBottom: '1rem' }} >Welcome Back! Please Enter your Details</Typography>
                <div style={{ width: '55%' }}>
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
                    <div className={classes.checkboxDiv}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    // name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember Me"
                        />
                        <Link href='#'><Typography className={classes.link}>Forgot Password?</Typography></Link>
                    </div>
                    <Button className={clsx(classes.loginButton, classes.signIn)}> Sign In</Button>
                    <Button className={clsx(classes.loginButton, classes.googleBtn)}> Sign In With Google</Button>
                </div>
                <Typography color='textSecondary' style={{ marginTop: '1.5rem' }}>Don't have an account? <span><Link href='#' className={classes.link} >Sign Up for free</Link></span></Typography>
            </Grid>
            <Grid item md={6} className={classes.imageDiv}>
                <img src="/images/toa-heftiba.jpg" alt="" height='100%' width='100%' style={{ objectFit: 'cover' }} />
                <div className={classes.review}>

                    <Typography variant='h4' style={{ color: '#fff' }}>Join us in our magical world of books. From countless selection of all famous genres; to much more niche ecosystems..</Typography>
                    {/* We understand your need and we are here to indulge you */}
                </div>
            </Grid>
        </Grid>
    );
};

export default Login